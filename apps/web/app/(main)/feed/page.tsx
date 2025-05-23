import { getAuthServerSide } from '@/lib/services/auth';
import { LogComposeTrigger } from './_components/log-compose-trigger';
import { Hello } from './_components/hello';

const FeedPage = async () => {
  const { user } = await getAuthServerSide();

  return (
    <div className="space-y-6">
      <LogComposeTrigger />

      <p>Feed</p>
      <p>{user?.email}</p>
      <Hello />
    </div>
  );
};

export default FeedPage;
