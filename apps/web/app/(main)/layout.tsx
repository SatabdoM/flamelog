import { Navbar } from '@/components/navbar';
import type { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="px-10 py-6">{children}</main>
    </div>
  );
};

export default MainLayout;
