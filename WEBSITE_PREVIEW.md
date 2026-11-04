# Local website preview

This website uses plain HTML, CSS, and JavaScript. It has no package install, build step, external font, analytics, or runtime service.

## Open directly

Open `index.html` in a modern desktop browser. Relative links and the UI navigation work from the file URL.

## Serve from a local HTTP server

From a terminal on the Mac:

```sh
cd /path/to/acorda-case-study
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`. Stop the server with `Ctrl+C` when done.

This task's execution environment denied binding a local socket and did not expose its browser host, so a browser-rendered preview could not be opened here. The static files and internal links were prepared locally; use the steps above on the Mac to review layout and responsive behavior.
