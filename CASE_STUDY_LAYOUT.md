# Reusable case-study layout

Each project uses the same four perspectives in `index.html`:

1. **Product** — problem, audience, scope, decisions, trade-offs, roadmap, status.
2. **Design** — interaction rationale, design evolution, and a gallery that accepts only approved real screenshots.
3. **AI-assisted development** — Product Owner direction, implementation collaboration, review, and attribution.
4. **Engineering & QA** — architecture, technical stories, verification state, and known limits.

The shared `.case-study`, `.case-hero`, `.perspective-nav`, `.perspective`, `.engineering-story`, and `.verification-panel` styles keep Acorda and Drop & Route consistent. For a future product, duplicate one `<article class="case-study">`, assign unique section IDs for each perspective, add four matching navigation anchors, and label every evidence item as source-verified, executed, compiled-only, documented-only, or pending.

Keep real app screenshots separate from explanatory diagrams. Use the native dialog lightbox by adding `data-lightbox`, `data-alt`, and `data-caption` to an approved image trigger. The current gallery has no screenshots, so no lightbox item is shown yet.
