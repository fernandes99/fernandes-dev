import { Suspense } from 'react';
import ArticleContent from './contents';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArticleService } from '@/services/articles';
import { config } from '@/config/general';

type MetadataProps = {
    params: {
        article: string;
    };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const article = await ArticleService.getBySlug(params.article);

    return {
        title: article.seo.title,
        description: article.seo.description,
        openGraph: {
            title: article.seo.title,
            description: article.seo.description,
            images: article.cover.url,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Roberto Fernandes - Blog',
            site: config.urls.base,
            description: article.seo.description,
            images: article.cover.url
        },
        authors: {
            name: article.author.name,
            url: config.urls.base
        },
        metadataBase: new URL(config.urls.base),
        alternates: {
            canonical: `${config.urls.base}/blog/${article.slug}`
        },
        keywords: article.tags.map((tag) => tag.slug)
    };
}

interface BlogPageProps {
    params: {
        article: string;
    };
}

export default function BlogPage({ params }: BlogPageProps) {
    return (
        <main className='md:overflow-[unset] relative max-w-[2560px] overflow-x-hidden py-20 lg:py-40 xl:static'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <Suspense fallback={<span>Loading</span>}>
                    <ArticleContent slug={params.article} />
                </Suspense>
            </section>
        </main>
    );
}
