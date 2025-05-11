import { moderatePost } from '../../../modules/gpt/gpt';
import { kafka } from '../client';

const consumer = kafka.consumer({ groupId: 'moderation-group' });

export const connectPostConsumer = async () => {
  await consumer.connect();
  console.log('Kafka Post-Consumer Connected');
  await consumer.subscribe({ topic: 'post-created', fromBeginning: false });
  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const post = JSON.parse(message.value?.toString() || '{}');
        console.log('Picked up by post consumer:', post, typeof post);
        //const parsedPost = JSON.parse(post);
        moderatePost(post);
      } catch (error) {
        console.error('Error processing message:  ', error);
      }
    },
  });
};
