import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
import { handleDBConnection } from './lib/dbconnect';
dotenv.config();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (_, res) => {
  res.send('Welcome to Flamelog Test Service. Working apis start with /api');
});

app.listen(PORT, async () => {
  console.log(`Flamelog Test-Service running on http://localhost:${PORT}`);
  handleDBConnection();
});
