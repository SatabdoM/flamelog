import { PencilLine } from 'lucide-react';

import { getPosts } from '@/data/get-posts';
import { Button } from '@workspace/ui/components/button';

const FeedPage = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <div className="space-y-2 border p-2">
        <Button variant="secondary" className="w-full rounded-md">
          <PencilLine className="size-5" />
          <p>Log today&apos;s learning</p>
        </Button>

        <p className="text-muted-foreground text-center text-xs md:text-sm">
          Keep the flame 🔥 burning by adding the logs 🪵
        </p>
      </div>

      <p>Feed</p>
    </div>
  );
};

export default FeedPage;
