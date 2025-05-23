'use client';

import { useAuthStore } from '@/stores/auth-store';

export const Hello = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="mt-10">
      <h4>Hello there</h4>
      <p>{user?.email}</p>
    </div>
  );
};
