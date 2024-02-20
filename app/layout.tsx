import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Page Title</title>
      <meta
        name="description"
        content="A brief description of the page content."
      />
      <link rel="icon" href="path/to/favicon.ico" />

      <body className={clsx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}
