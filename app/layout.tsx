import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './Components/Sidebar/Sidebar';
import GlobalStyleProvider from './providers/GlobalStylesProvider';
import ContextProvider from './providers/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>
            <Sidebar />
            {children}
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
