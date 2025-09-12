import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Template from "@/lib/db/template-model";
import Handlebars from "handlebars";

export const runtime = "nodejs"; // <-- important

export async function POST(req: NextRequest, { params }: { params: { id: string }}) {
  await dbConnect();

  // Load mjml at runtime via CJS so Turbopack doesn't bundle it
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mjml2html = require("mjml");

  const { vars = {}, versionIndex }: { vars?: Record<string, any>; versionIndex?: number } = await req.json();

  const doc = await Template.findById(params.id);
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const v = doc.versions[versionIndex ?? doc.currentVersion];
  const tpl = Handlebars.compile(v.mjml);
  const { html } = mjml2html(tpl(vars), { minify: true });

  return NextResponse.json({ html });
}
