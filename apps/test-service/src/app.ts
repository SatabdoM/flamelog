import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import testRoutes from './routes/test.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// All test APIs will start with /test
// app.use('/test', testRoutes);

export default app;
