import { createServer as createViteServer } from 'vite';
import { readFileSync } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const url = req.url;

  const vite = await createViteServer({
    server: { middlewareMode: true }
  });

  const template = readFileSync(path.resolve('index.html'), 'utf-8');
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  const appHtml = render(url);
  const html = template.replace('<!--app-html-->', appHtml);

  res.status(200).setHeader('Content-Type', 'text/html').end(html);
}
