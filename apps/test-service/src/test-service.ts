import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { PrismaClient } from '@prisma/client';

dotenv.config(); // Load environment variables

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (_, res) => {
  res.send('Flamelog Server is Running! ');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
