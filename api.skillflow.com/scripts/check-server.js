const baseUrl = process.env.API_BASE_URL || 'http://localhost:5000';

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

const checkEndpoint = async ({ name, path, expectJson }) => {
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
  const results = [];

  for (const check of checks) {
    results.push(await checkEndpoint(check));
  }

  console.table(results);
  console.log(`All server checks passed for ${baseUrl}`);
};

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
