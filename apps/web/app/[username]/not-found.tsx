import Link from 'next/link';

import { Button } from '@workspace/ui/components/button';

const NotFound = () => {
  return (
    <div className="space-y-5 pt-20 text-center">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">Not Found :(</h2>
        <p className="text-lg">
          The page you're looking for doesn't exists or is temporarily moved to a different location
        </p>
      </div>

      <Button variant="outline" asChild>
        <Link href="/">Return to home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
