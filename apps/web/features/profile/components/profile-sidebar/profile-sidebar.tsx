'use client';

import { UserIcon } from 'lucide-react';

import { useAuthStore } from '@/stores/auth.store';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';

interface ProfileSidebarProps {
  username: string;
}

export const ProfileSidebar = ({ username }: ProfileSidebarProps) => {
  const { user } = useAuthStore();

  return (
    <div className="flex h-full w-[320px] flex-col overflow-y-auto rounded-md border">
      <div className="space-y-4 border-b p-4">
        <div className="flex items-center gap-4 text-center">
          <Avatar className="size-14 rounded-xl">
            <AvatarImage
              src={
                'https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
              className="object-cover"
            />
            <AvatarFallback className="bg-muted h-full w-full">
              <UserIcon className="size-5" />
            </AvatarFallback>
          </Avatar>

          <div className="text-left">
            <p className="text-base font-semibold">{user?.name || 'Loading...'}</p>
            <p className="text-muted-foreground text-sm">{user?.username || 'Loading...'}</p>
          </div>
        </div>

        <div className="text-muted-foreground flex items-center gap-2 font-mono text-sm">
          <span>🪵40 logs</span>
          <span>🔥2 days streak</span>
        </div>

        {username === user?.username && (
          <Button variant="secondary" className="w-full">
            Edit Profile
          </Button>
        )}
      </div>

      <div className="border-b p-4">
        <h3>Community Stats</h3>
      </div>

      <div className="border-b p-4">
        <h3>Topics</h3>
      </div>
    </div>
  );
};
