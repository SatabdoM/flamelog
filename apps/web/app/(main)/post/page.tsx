'use client';

import { SimpleEditor } from '@/components/editor';

const PostPage = () => {
  return (
    <div className="space-y-6">
      <h1>Post Page</h1>
      <div className="bg-accent h-[800px] rounded-md p-2">
        <SimpleEditor />
      </div>

      <div>
        <p>Hello there</p>
      </div>
    </div>
  );
};

export default PostPage;
