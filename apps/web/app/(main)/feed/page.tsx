import { getPosts } from '@/data/get-posts';
import { LogComposeTrigger } from './_components/log-compose-trigger';

const FeedPage = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <LogComposeTrigger />

      <p>Feed</p>
    </div>
  );
};

export default FeedPage;
