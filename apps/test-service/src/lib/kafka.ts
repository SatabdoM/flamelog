import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'flamelog-post-service',
  brokers: ['localhost:9092'],
});
