import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serveFile = async (res, filePath) => {
  const content = await readFile(filePath, 'utf8');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(content);
};

const server = http.createServer(async (req, res) => {
  try {
    if (req.method !== 'GET') {
      throw new Error('Method Not Allowed');
    }

    if (req.url === '/') {
      await serveFile(res, path.join(__dirname, 'public', 'index.html'));
      return;
    }

    if (req.url === '/about') {
      await serveFile(res, path.join(__dirname, 'public', 'about.html'));
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>Internal Server Error</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});