import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes';
import { handleDBConnection } from './lib/database/dbconnect';
import { connectProducers } from './lib/kafka/producers';
import { connectPostConsumer } from './lib/kafka/consumers/postConsumer';
import logger from './utils/log/logger';

dotenv.config();
const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

app.get('/', (_, res) => {
  res.send('Welcome to Flamelog Test Service. Working apis start with /api');
});

app.listen(PORT, async () => {
  logger.info(`Flamelog Test-Service running on http://localhost:${PORT}`);
  //Prisma Daabase Connection
  handleDBConnection();
  //Kafka Producer Connection
  connectProducers().catch((error) => logger.error('Error connecting to Kafka producers:', error));
  //Kafka Consumer Connection
  connectPostConsumer().catch((error) =>
    logger.error('Error connecting to Kafka consumer:', error)
  );
});
