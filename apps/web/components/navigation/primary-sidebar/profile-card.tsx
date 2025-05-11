'use client';

import { UserIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';
import { useAuthStore } from '@/store/auth';

export const ProfileCard = () => {
  const { user } = useAuthStore();

  return (
    <div className="relative h-44 rounded-md border-b select-none">
      <div className="from-accent/20 to-accent relative h-20 bg-gradient-to-b">
        <div className="absolute right-0 -bottom-19 left-0 flex flex-col items-center gap-2 text-center">
          <Avatar className="size-14">
            <AvatarImage src={user?.image || ''} />
            <AvatarFallback className="bg-muted h-full w-full">
              <UserIcon className="size-5" />
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1.5">
            <p className="text-sm font-semibold">{user?.name || 'Loading...'}</p>
            <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
              <span>🪵40 logs</span>
              <span>🔥2 days streak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
