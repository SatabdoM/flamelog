import { notFound } from 'next/navigation';

import { getProfile } from '@/features/profile/actions/server/get-profile';

interface ProfilePageProps {
  params: Promise<{
    username: string;
  }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const username = (await params).username;

  return (
    <div>
      <h1>🔥 Profile of {username}</h1>
      <p>Logs, streak, and more coming soon...</p>
    </div>
  );
};

export default ProfilePage;
