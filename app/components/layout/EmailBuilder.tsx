"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import "grapesjs/dist/css/grapes.min.css";

const loadGrapes = () => import("grapesjs");
const loadNewsletter = () => import("grapesjs-preset-newsletter");
const loadMjml = () => import("grapesjs-mjml");

export default function EmailBuilder() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const grapesjs = (await loadGrapes()).default;
      const preset = (await loadNewsletter()).default;
      const mjml = (await loadMjml()).default;

      const editor = grapesjs.init({
        container: "#gjs",
        height: "100vh",
        storageManager: false,
        plugins: [preset, mjml],
        pluginsOpts: {
          "gjs-preset-newsletter": {},
          "grapesjs-mjml": {},
        },
        blockManager: { appendTo: "#blocks" },
        panels: { defaults: [] },
      });

      // ---- Blocks (Text / Border Text / Divider / Image / Button / Table / Footer) ----
      const bm = editor.BlockManager;

      const card = (title: string, second?: string) => `
        <div class="block-card">
          <div class="block-title">${title}${second ? "<br/>" + second : ""}</div>
        </div>`;

      bm.add("m-text", {
        label: card("TEXT"),
        content: "<mj-text>Type here</mj-text>",
        category: "Style",
      });

      bm.add("m-border-text", {
        label: card("BORDER", "TEXT"),
        content: `
          <mj-section><mj-column>
            <mj-text padding="16px" border="1px solid #e2e8f0" border-radius="10px">
              Bordered text
            </mj-text>
          </mj-column></mj-section>`,
        category: "Style",
      });

      bm.add("m-divider", {
        label: card("DIVIDER"),
        content: `<mj-divider border-color="#e2e8f0" padding="12px 0"/>`,
        category: "Style",
      });

      bm.add("m-image", {
        label: card("IMAGES"),
        content: `<mj-image src="https://via.placeholder.com/600x200" alt="image"/>`,
        category: "Style",
      });

      bm.add("m-button", {
        label: card("BUTTON"),
        content: `<mj-button href="{{ctaUrl}}" background-color="#2563eb" border-radius="10px" padding="14px 22px">Call to Action</mj-button>`,
        category: "Style",
      });

      bm.add("m-table", {
        label: card("TABLE"),
        content: `
          <mj-section><mj-column>
            <mj-table font-size="14px" cellpadding="8" css-class="table">
              <tr style="background:#f1f5f9"><th align="left">Item</th><th align="right">Price</th></tr>
              <tr><td>Sample A</td><td align="right">$10</td></tr>
              <tr><td>Sample B</td><td align="right">$20</td></tr>
            </mj-table>
          </mj-column></mj-section>`,
        category: "Style",
      });

      bm.add("m-footer", {
        label: card("FOOTER"),
        content: `
          <mj-section background-color="#f8fafc"><mj-column>
            <mj-text align="center" font-size="12px" color="#64748b">
              © {{year}} Your Company • <a href="{{unsubscribeUrl}}">Unsubscribe</a>
            </mj-text>
          </mj-column></mj-section>`,
        category: "Style",
      });

      // ---- Starter canvas to match left mock ----
      editor.setComponents(`
        <mjml><mj-body background-color="#f5fbff">
          <mj-section padding="12px 0 0 0"><mj-column>
            <mj-text align="left" font-size="22px" font-weight="700" padding="10px 24px">Email Template</mj-text>
          </mj-column></mj-section>

          <mj-section background-color="#e9f3ff" border-radius="16px" padding="30px 24px"><mj-column>
            <mj-text color="#0f1f3a" font-size="16px">Header block…</mj-text>
          </mj-column></mj-section>

          <mj-section background-color="#e9f3ff" border-radius="16px" padding="30px 24px" css-class="mt">
            <mj-column><mj-text>Hero/content area…</mj-text></mj-column>
          </mj-section>

          <mj-section><mj-column>
            <mj-button href="{{ctaUrl}}" background-color="#2563eb" border-radius="9999px" padding="16px 24px">Get Started</mj-button>
          </mj-column></mj-section>
        </mj-body></mjml>
      `);

      editorRef.current = editor;
    })();
  }, []);

  async function save() {
    const ed = editorRef.current;
    const projectJson = ed.getProjectData();
    const mjml = ed.getHtml({ component: ed.getWrapper() }); // via grapesjs-mjml
    const name = prompt("Template name?") || `Template ${Date.now()}`;

    await fetch("/api/templates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mjml, projectJson }),
    }).then(r => r.json()).then(r => alert(`Saved: ${r.id}`));
  }

  async function loadById() {
    const id = prompt("Template id?");
    if (!id) return;
    const doc = await fetch(`/api/templates/689d7c5c68e7aa7bb8aeb71f`).then(r => r.json());
    const v = doc.versions[doc.currentVersion];
    const ed = editorRef.current;
    ed.loadProjectData(v.json);
    ed.setComponents(v.mjml);
  }

  async function previewRender() {
    const id = prompt("Template id to render?");
    if (!id) return;
    const { html } = await fetch(`/api/templates/${id}/render`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vars: { ctaUrl: "https://example.com", year: new Date().getFullYear(), unsubscribeUrl: "#" } }),
    }).then(r => r.json());
    const w = window.open("", "_blank"); w!.document.write(html);
  }

  return (
    <div className="w-full h-screen flex bg-[#f5fbff]">
      <div className="flex-1 p-4">
        <div id="gjs" className="h-full rounded-[22px] bg-white ring-1 ring-[#eaf2ff] shadow-sm" />
      </div>
      <aside className="w-[360px] p-4 pr-6">
        <div className="rounded-[22px] bg-white ring-1 ring-[#eaf2ff] shadow-sm p-4">
          <div className="text-[22px] font-semibold mb-3">Style</div>
          <div id="blocks" className="grid grid-cols-2 gap-4" />
          <div className="mt-4 grid gap-3">
            <button onClick={save} className="px-4 py-2 rounded-xl bg-blue-600 text-white">Save</button>
            <button onClick={loadById} className="px-4 py-2 rounded-xl bg-slate-800 text-white">Load</button>
            <button onClick={previewRender} className="px-4 py-2 rounded-xl bg-emerald-600 text-white">Preview HTML</button>
          </div>
        </div>
      </aside>

      {/* extra CSS for the block cards */}
      <style jsx global>{`
        #blocks .gjs-block { background: transparent; border:0; padding:0; box-shadow:none; }
        .block-card{display:grid;place-items:center;gap:10px;padding:22px 16px;border-radius:18px;background:#fff;border:1px solid #eaf2ff;box-shadow:0 2px 12px rgba(35,86,215,.06);font-weight:800;color:#184e97;transition:all .18s}
        .block-card:hover{transform:translateY(-1px);box-shadow:0 10px 30px rgba(35,86,215,.12);border-color:#dfe9ff}
        .block-title{text-align:center;letter-spacing:.02em}
      `}</style>
    </div>
  );
}
