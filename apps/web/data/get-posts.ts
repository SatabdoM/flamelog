import { sleep } from '@/lib/utils';

export const getPosts = async () => {
  await sleep(2000);

  return [
    {
      id: 'Hello there',
    },
  ];
};
