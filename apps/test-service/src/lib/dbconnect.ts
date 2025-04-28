import { prisma } from '@workspace/db';

const connectToDB = async () => {
  //console.log(prisma)
  try {
    await prisma.$connect();
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

const disconnectFromDB = async () => {
  await prisma.$disconnect();
  console.log('Disconnected from the database!');
};

export const handleDBConnection = async () => {
  connectToDB();

  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    disconnectFromDB();
  });
  process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    disconnectFromDB();
  });

  process.on('exit', async (code) => {
    console.log(`Process exited with code: ${code}`);
    await disconnectFromDB();
  });
};
