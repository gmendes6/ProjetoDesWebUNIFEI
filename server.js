import express from 'express';  // Usando import em vez de require
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


async function createServer() {
  const app = express();

  // Cria um servidor Vite no modo SSR
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

      const appHtml = render(url);

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}

createServer();
