import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Roberto Fernandes - Desenvolvedor Front End',
    description:
        'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
    openGraph: {
        title: 'Roberto Fernandes - Desenvolvedor Front End',
        description:
            'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
        type: 'website',
        url: 'https://www.robertofernandes.dev/',
        images: 'https://www.robertofernandes.dev/imgs/website-thumb.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roberto Fernandes - Desenvolvedor Front End',
        site: 'https://www.robertofernandes.dev/',
        description:
            'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
        images: 'https://www.robertofernandes.dev/imgs/website-thumb.png'
    }
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
