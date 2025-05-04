import { connectPostProducer, postProducer } from './postProducers';

export async function connectProducers() {
  await connectPostProducer();
}
export { postProducer };
