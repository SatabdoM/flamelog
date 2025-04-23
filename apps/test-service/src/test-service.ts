import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use('/api', router);

// Basic route
app.get('/', (_, res) => {
  res.send('Working apis start with /api');
});

app.listen(PORT, () => {
  console.log(`Flamelog Test-Service running on http://localhost:${PORT}`);
});
