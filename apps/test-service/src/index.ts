import app from './app';

const TEST_SERVICE_PORT = process.env.TEST_SERVICE_PORT || 5001;

app.listen(TEST_SERVICE_PORT, () => {
  console.log(`🚀 Test Service running on http://localhost:${TEST_SERVICE_PORT}`);
});
