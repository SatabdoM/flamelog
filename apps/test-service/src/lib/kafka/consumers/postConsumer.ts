import { moderatePost } from '../../../modules/gpt/gpt';
import { kafka } from '../client';
import logger from '../../../utils/log/logger';

const consumer = kafka.consumer({ groupId: 'moderation-group' });

export const connectPostConsumer = async () => {
  await consumer.connect();
  console.log('Kafka Post-Consumer Connected');
  await consumer.subscribe({ topic: 'post-created', fromBeginning: false });
  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const post = JSON.parse(message.value?.toString() || '{}');
        logger.info('Picked up by post consumer:', post, typeof post);
        moderatePost(post);
      } catch (error) {
        logger.error('Error processing message:  ', error);
      }
    },
  });
};
