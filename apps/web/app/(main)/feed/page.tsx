import { getPosts } from '@/data/get-posts';

const FeedPage = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <p>Feed Page</p>
    </div>
  );
};

export default FeedPage;
