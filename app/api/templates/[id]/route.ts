import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Template from "@/lib/db/template-model";
import Handlebars from "handlebars";
import mjml2html from "mjml";
import nodemailer from "nodemailer";
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

const extractVars = (mjml: string) =>
  [...new Set(Array.from(mjml.matchAll(/\{\{\s*([a-zA-Z0-9_.]+)\s*\}\}/g)).map(m => m[1]))];
async function loadMjml() {
    try { const req: any = (eval as any)("require"); return req("mjml"); }
    catch { const mod: any = await import("mjml"); return mod.default ?? mod; }
  }
export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const { id } = await params;
  const doc = await Template.findById(id);
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const v = doc.versions[0];
// no vars from request — we set them ourselves
const hardcodedVars = {
    firstname: "Sruthi",
    lastname: "Chandrasekar",
  };
  const tpl = Handlebars.compile(v.mjml);
  const mjml2html = await loadMjml();
  const { html, errors } = mjml2html(tpl(hardcodedVars), { minify: true });
  if (errors?.length) console.warn("[mjml]", errors);
  const { html: finalHtml, attachments } = replaceDataImagesWithCid(html);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: 'veractdev@gmail.com', pass: 'kvth khtw jkyr aysm' },
  });
  await transporter.sendMail({
    from: 'veractdev@gmail.com',
    to: 'sruthiamutharani@gmail.com',
    subject: 'Test Email',
    html: finalHtml,
    text: htmlToText(finalHtml, { selectors: [{ selector: "img", format: "skip" }] }),
    attachments,
  });
  return NextResponse.json(doc);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string }}) {
  await dbConnect();
  const { mjml, projectJson, note = "" } = await req.json();
  const { html } = mjml2html(mjml, { minify: true });
  const variables = extractVars(mjml);

  const doc = await Template.findById(params.id);
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

  doc.versions.push({ mjml, html, json: projectJson, variables, note });
  doc.currentVersion = doc.versions.length - 1;
  await doc.save();
  return NextResponse.json({ ok: true, currentVersion: doc.currentVersion });
}
