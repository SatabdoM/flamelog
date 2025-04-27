'use client';

import { useAuthStore } from '@/store/auth';
import { Button } from '@workspace/ui/components/button';
import { Logo } from '@workspace/ui/components/logo';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const { clearAuth } = useAuthStore();
  const router = useRouter();

  return (
    <div className="flex h-16 w-full items-center justify-between border-b px-10">
      <div>
        <Logo />
      </div>

      <div>
        <Button
          onClick={() => {
            clearAuth();
            router.refresh();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
