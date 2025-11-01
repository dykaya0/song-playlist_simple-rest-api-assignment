// app/api/docs/ui/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Playlist API Docs</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
        <script>
          window.onload = () => {
            SwaggerUIBundle({
              url: '/api/docs',
              dom_id: '#swagger-ui'
            });
          };
        </script>
      </body>
    </html>`;
    return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}

