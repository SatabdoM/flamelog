import React, { type ReactNode } from 'react';

import { cn } from '@workspace/ui/lib/utils';

export const MainFrame = ({ children }: { children: ReactNode }) => {
  return <main className={cn('flex-grow-1 pb-16 lg:pb-4')}>{children}</main>;
};
