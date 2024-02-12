import { Suspense } from 'react';
import ArticlesContent from './contents/ArticlesContent';
import SkeletonArticlesContent from './contents/ArticlesContent/skeleton';
import { Metadata } from 'next';
import { config } from '@/config/general';

export const metadata: Metadata = {
    title: 'Roberto Fernandes - Blog',
    description:
        'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
    openGraph: {
        title: 'Roberto Fernandes - Blog',
        description:
            'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
        type: 'website',
        url: config.urls.base,
        images: '/imgs/website-thumb.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roberto Fernandes - Blog',
        site: config.urls.base,
        description:
            'Desenvolvedor Front End com experiência em React, Vue, NextJS, JavaScript, TypeScript, Styled Components, Tailwind, consumo de APIs REST, etc. Apaixonado por tecnologia.',
        images: '/imgs/website-thumb.png'
    },
    metadataBase: new URL(config.urls.base),
    alternates: {
        canonical: '/blog'
    },
    authors: {
        url: config.urls.base,
        name: 'Roberto Fernandes'
    }
};

export default function BlogPage() {
    return (
        <main className='relative max-w-[2560px] py-20 lg:py-40'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <div className='mb-4'>
                    <h1 className='mb-2 text-sm font-light text-secondary-200'>
                        Blog de Roberto Fernandes
                    </h1>
                    <h2 className='text-2xl font-semibold'>Últimas publicações</h2>
                </div>
                <Suspense fallback={<SkeletonArticlesContent />}>
                    <ArticlesContent />
                </Suspense>
            </section>
        </main>
    );
}
