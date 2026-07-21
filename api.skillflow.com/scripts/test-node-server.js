import http from 'node:http';
import app from '../src/app.js';
import { initSocket } from '../src/startup/socket.js';

const checks = [
  { name: 'api index', path: '/', expectJson: true },
  { name: 'plain health', path: '/health', expectJson: false },
  { name: 'json health', path: '/health.json', expectJson: true },
  { name: 'hello world', path: '/hello-world', expectJson: true },
  { name: 'admin api root', path: '/api/ap', expectJson: true },
  { name: 'admin dashboard', path: '/api/ap/dashboard', expectJson: true },
  { name: 'mobile api root', path: '/ma', expectJson: true },
  { name: 'mobile home', path: '/ma/home', expectJson: true },
];

const listen = (server) => {
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        reject(new Error('Unable to resolve test server address'));
        return;
      }

      resolve(`http://127.0.0.1:${address.port}`);
    });
  });
};

const close = (server) => {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
};

const checkEndpoint = async (baseUrl, { name, path, expectJson }) => {
  const response = await fetch(`${baseUrl}${path}`);
  const body = expectJson ? await response.json() : await response.text();

  if (!response.ok) {
    throw new Error(`${name} failed with ${response.status}`);
  }

  if (expectJson && body.success !== true) {
    throw new Error(`${name} returned an unexpected payload`);
  }

  return {
    name,
    path,
    status: response.status,
  };
};

const run = async () => {
  const server = http.createServer(app);
  initSocket(server);
  const baseUrl = await listen(server);

  try {
    const results = [];

    for (const check of checks) {
      results.push(await checkEndpoint(baseUrl, check));
    }

    console.table(results);
    console.log(`All self-contained server checks passed for ${baseUrl}`);
  } finally {
    await close(server);
  }
};

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
