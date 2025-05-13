import { kafka } from '../client';

const postProducer = kafka.producer();
let isPostProducerConnected = false;

export const connectPostProducer = async () => {
  if (!isPostProducerConnected) {
    await postProducer.connect();
    isPostProducerConnected = true;
    console.log('Kafka Post-Producer Connected');
  }
};
export { postProducer };
