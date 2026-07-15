// Temporary holding page: the whole site is paused behind this middleware.
// Every route (landing, product pages, /book, the voice API) returns one
// minimal black card with the wordmark and contact email. Served as a 503
// with noindex and no-store so search engines and caches treat the outage
// as temporary. To bring the site back, delete this file (or revert the
// commit that added it); everything else is untouched.

const HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Tesurai</title>
    <style>
      html, body { margin: 0; height: 100%; background: #0a0a0a; color: #fff;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
      main { height: 100%; display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: 22px; }
      h1 { margin: 0; font-size: 13px; font-weight: 500;
        letter-spacing: 0.42em; text-indent: 0.42em; }
      p { margin: 0; font-size: 11px; letter-spacing: 0.18em;
        text-transform: uppercase; }
      a { color: rgba(255, 255, 255, 0.45); text-decoration: none; }
      a:hover { color: #fff; }
    </style>
  </head>
  <body>
    <main>
      <h1>TESURAI</h1>
      <p><a href="mailto:hello@tesurai.com">hello@tesurai.com</a></p>
    </main>
  </body>
</html>
`;

export function middleware() {
  return new Response(HTML, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "retry-after": "86400",
    },
  });
}
