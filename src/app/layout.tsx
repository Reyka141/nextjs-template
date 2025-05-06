import { ToastProvider } from '@/components/ToastProvider/ToastProvider';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'MiniFhr | Free-to-Play Horse Racing Games',
    description:
        'Engage users, boost betting volume, and increase retention with our plug-and-play iframe solution for sportsbooks & affiliates.',
    keywords: 'horse racing, betting, free-to-play, games, sportsbooks, affiliates',
    applicationName: 'MiniFhr',
    authors: [{ name: 'MiniFhr Team' }],
    creator: 'MiniFhr',
    publisher: 'MiniFhr',
    metadataBase: new URL('https://minifhr.com'),
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon',
            },
        ],
        apple: {
            url: '/favicon.ico',
            type: 'image/x-icon',
        },
        shortcut: {
            url: '/favicon.ico',
            type: 'image/x-icon',
        },
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    openGraph: {
        type: 'website',
        title: 'MiniFhr | Free-to-Play Horse Racing Games',
        description:
            'Engage users, boost betting volume, and increase retention with our plug-and-play iframe solution for sportsbooks & affiliates.',
        siteName: 'MiniFhr',
        images: [
            {
                url: '/logo.svg',
                width: 800,
                height: 600,
                alt: 'MiniFhr Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MiniFhr | Free-to-Play Horse Racing Games',
        description:
            'Engage users, boost betting volume, and increase retention with our plug-and-play iframe solution for sportsbooks & affiliates.',
        images: ['/logo.svg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} font-sans`}>
                {children}
                <ToastProvider />
            </body>
        </html>
    );
}
