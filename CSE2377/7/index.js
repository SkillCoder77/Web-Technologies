import { createServer } from 'node:http';
import { appendFile, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const folder = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 8080;

const server = createServer(async (_request, response) => {
  try {
    const pageContent = await readFile(join(folder, 'content.txt'), 'utf8');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(`
      <!doctype html>
      <html lang="en">
        <head><meta charset="utf-8"><title>Web Technologies Lab</title></head>
        <body>
          <h1>Hello, Web Technologies Lab!</h1>
          <p>Date: ${new Date().toLocaleString()}</p>
          <p>Platform: ${os.platform()}</p>
          <p>Architecture: ${os.arch()}</p>
          <p>Host name: ${os.hostname()}</p>
          <p>Operating system: ${os.type()}</p>
          ${pageContent}
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Could not read content.txt:', error);
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('The page could not be loaded.');
  }
});

async function demonstrateFileOperations() {
  const originalFile = join(folder, 'demo-file.txt');
  const renamedFile = join(folder, 'demo-file-renamed.txt');

  await writeFile(originalFile, 'Hello, Web Technologies Lab!\n', 'utf8');
  await appendFile(originalFile, 'This line was appended.\n', 'utf8');
  await rename(originalFile, renamedFile);

  console.log(`Created, updated, and renamed ${renamedFile}`);
}

if (process.argv.includes('--files-demo')) {
  demonstrateFileOperations().catch((error) => {
    console.error('File demonstration failed:', error);
    process.exitCode = 1;
  });
} else {
  server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}
