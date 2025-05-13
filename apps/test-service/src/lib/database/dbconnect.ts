import { prisma } from '@workspace/db';
import logger from '../../utils/log/logger';

const connectToDB = async () => {
  //console.log(prisma)
  try {
    await prisma.$connect();
    logger.info('Database Connected');
  } catch (error) {
    logger.error('Error connecting to the database:', error);
  }
};

const disconnectFromDB = async () => {
  await prisma.$disconnect();
  logger.info('Database Disconnected');
};

export const handleDBConnection = async () => {
  connectToDB();

  process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', error);
    disconnectFromDB();
  });
  process.on('unhandledRejection', (error) => {
    logger.error('Unhandled Rejection:', error);
    disconnectFromDB();
  });

  process.on('exit', async (code) => {
    logger.info(`Process exited with code: ${code}`);
    await disconnectFromDB();
  });
};
