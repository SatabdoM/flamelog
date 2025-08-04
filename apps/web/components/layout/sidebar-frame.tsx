import React, { type ReactNode } from 'react';

export const SidebarFrame = ({ children }: { children: ReactNode }) => {
  return (
    // height = 100vh - header height - padding of the parent container
    <aside className="sticky top-[calc(60px+16px)] hidden h-[calc(100vh-60px-32px)] lg:block">
      {children}
    </aside>
  );
};
