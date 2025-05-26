import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

console.log('Starting server...');
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

const server = app.listen(port, () => {
  console.log(`Test server running on port ${port}`);
});

// Keep the process alive
setInterval(() => {
  console.log('Server heartbeat:', new Date().toISOString());
}, 30000);
