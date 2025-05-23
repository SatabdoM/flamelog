import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import '@workspace/ui/globals.css';
import { cn } from '@workspace/ui/lib/utils';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Modal } from '@/components/modal';
import { Toaster } from '@workspace/ui/components/sonner';
import { getAuthServerSide } from '@/lib/services/auth';
import { AuthProvider } from '@/providers/auth-provider';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'FlameLog',
  description: 'FlameLog',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { user } = await getAuthServerSide();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="FlameLog" />
      </head>
      <body className={cn('font-sans antialiased', fontSans.variable, fontMono.variable)}>
        <QueryProvider>
          <ThemeProvider>
            <AuthProvider user={user}>
              {children}
              <Modal />
              <Toaster richColors />
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
