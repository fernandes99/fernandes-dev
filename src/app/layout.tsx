import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfólio Roberto Fernandes',
    description: 'Portfólio Roberto Fernandes'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='pt-BR'>
            <Head>
                <link rel='icon' href='/favicon/favicon.ico' sizes='any' />
                <link
                    rel='apple-touch-icon'
                    href='/favicon/apple-touch-icon.png'
                    type='image/png'
                />
            </Head>

            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
