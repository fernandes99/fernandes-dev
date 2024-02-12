import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import Header from '@/components/Header';
import { config } from '@/config/general';
import Footer from '@/components/Footer';
import { Spotlight } from '@/components/Spotlight';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
};

export const metadata: Metadata = {
    title: 'Roberto Fernandes - Desenvolvedor Front End',
    description:
        'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
    openGraph: {
        title: 'Roberto Fernandes - Desenvolvedor Front End',
        description:
            'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
        type: 'website',
        url: config.urls.base,
        images: '/imgs/website-thumb.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roberto Fernandes - Desenvolvedor Front End',
        site: config.urls.base,
        description:
            'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
        images: '/imgs/website-thumb.png'
    },
    metadataBase: new URL(config.urls.base),
    alternates: {
        canonical: '/'
    },
    icons: {
        icon: '/favicon/favicon.ico',
        apple: '/favicon/apple-touch-icon.png'
    },
    creator: 'Roberto Fernandes',
    keywords: [
        'front-end',
        'react',
        'vuejs',
        'nextjs',
        'vuejs',
        'typescript',
        'javascript',
        'desenvolvedor',
        'portfólio',
        'fernandes',
        'dev'
    ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='pt-BR'>
            <body className={inter.className}>
                <GoogleAnalytics />
                <Header />

                {children}

                <Footer />
                <Spotlight />
            </body>
        </html>
    );
}
