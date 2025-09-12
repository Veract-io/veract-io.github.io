export const runtime = "nodejs"; // ensure Node runtime for CJS require
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Template from "@/lib/db/template-model";
// import mjml2html from "mjml";

const extractVars = (mjml: string) =>
  [...new Set(Array.from(mjml.matchAll(/\{\{\s*([a-zA-Z0-9_.]+)\s*\}\}/g)).map(m => m[1]))];
const IMG_RE = /<mj-image\b([^>]*?)\bsrc=["']([^"']+)["']([^>]*)>/gi;

// function parseDataUrl(dataUrl: string) {
//   // data:image/png;base64,AAAA...
//   const m = /^data:(.+?);base64,(.+)$/i.exec(dataUrl);
//   if (!m) return null;
//   return { contentType: m[1], buffer: Buffer.from(m[2], "base64") };
// }

import { htmlToText } from "html-to-text";
import crypto from "node:crypto";

function parseDataUrl(dataUrl: string) {
  const m = /^data:(.+?);base64,(.+)$/i.exec(dataUrl);
  return m ? { contentType: m[1], buffer: Buffer.from(m[2], "base64") } : null;
}

function cid() { return crypto.randomBytes(8).toString("hex") + "@local"; }

function replaceDataImagesWithCid(html: string) {
  const IMG_RE = /<img\b[^>]*?\bsrc=(['"])(data:[^"']+)\1/gi;
  let attachments: any[] = [];
  let replaced = html.replace(IMG_RE, (m, q, dataUrl) => {
    const parsed = parseDataUrl(dataUrl);
    if (!parsed) return m;
    const contentId = cid();
    attachments.push({
      filename: `image.${parsed.contentType.split("/")[1] || "bin"}`,
      content: parsed.buffer,
      cid: contentId,
      contentType: parsed.contentType,
    });
    return m.replace(dataUrl, `cid:${contentId}`);
  });
  return { html: replaced, attachments };
}


function extFromContentType(ct: string) {
  const map: Record<string,string> = {
    "image/png":"png","image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/webp":"webp","image/svg+xml":"svg"
  };
  return map[ct] || "bin";
}
export async function GET() {
  await dbConnect();
  const rows = await Template.find({}, "name tags currentVersion updatedAt").sort({ updatedAt: -1 });
  return NextResponse.json(rows);
}

async function rewriteMjmlImagesToS3(mjml: string) {
    const matches = Array.from(mjml.matchAll(IMG_RE)); // gives indices
    if (matches.length === 0) return { mjml, assets: [] as any[] };
  
    const bucket = process.env.AWS_S3_BUCKET!;
    const nonce = Date.now();
    const assets: any[] = [];
  
    let out = "";
    let lastIndex = 0;
  
    for (const m of matches) {
      const [full, pre, quote, src, post] = m;
      const start = m.index!;
      const end = start + full.length;
  
      // copy content before this <mj-image ...>
      out += mjml.slice(lastIndex, start);
  
      let newSrc = src;
  
      if (src.startsWith("data:")) {
        const parsed = parseDataUrl(src);
        if (parsed) {
          const ext = extFromContentType(parsed.contentType);
          const key = `emails/uploads/${nonce}-${Math.random().toString(36).slice(2)}.${ext}`;
          newSrc = 'https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/List/Hover/Seasonal E-Commerce.webp'
        //   await putPublicObject({
        //     Bucket: bucket,
        //     Key: key,
        //     Body: parsed.buffer,
        //     ContentType: parsed.contentType,
        //   });
        //   newSrc = `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
          assets.push({ original: src, s3Key: key, url: newSrc, contentType: parsed.contentType });
        }
      }
      // Rebuild ONLY this tag; no big regex replacement
      out += `<mj-image${pre}src=${quote}${newSrc}${quote}${post}>`;
  
      lastIndex = end;
    }
  
    // tail after last match
    out += mjml.slice(lastIndex);
  
    return { mjml: out, assets };
  }
// export async function POST(req: NextRequest) {
//     await dbConnect();
  
//     const { name, projectJson, mjml, tags = [], note = "" } =
//       await req.json();
  
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const mjml2html = require("mjml");
//     const { html } = mjml2html(mjml, { minify: true });
  
//     const variables = extractVars(mjml);
  
//     const doc = await Template.create({
//       name,
//       tags,
//       currentVersion: 0,
//       versions: [{ mjml, html, json: projectJson, variables, note }],
//     });
  
//     return NextResponse.json({ id: doc._id, html }); // return id so caller can reuse
//   }

export async function POST(req: NextRequest) {
    await dbConnect();
    const { name, projectJson, mjml, tags = [], note = "" } = await req.json();
    if (!name || !mjml) return NextResponse.json({ error: "name & mjml required" }, { status: 400 });
  
    const { mjml: rewritten, assets } = await rewriteMjmlImagesToS3(mjml);
  
    // compile MJML -> HTML
    const mjml2html = require("mjml");
    const { html } = mjml2html(rewritten, { minify: true });
  
    const doc = await Template.create({
      name, tags, currentVersion: 0,
      versions: [{ mjml: rewritten, html, json: projectJson, variables: [], note, assets }],
    });
  
    return NextResponse.json({ id: doc._id, assets, mjml: rewritten });
  }