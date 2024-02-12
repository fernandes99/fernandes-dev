import { Suspense } from 'react';
import ArticleContent from './contents/ArticleContent';
import type { Metadata } from 'next';
import { ArticleService } from '@/services/articles';
import { config } from '@/config/general';
import SkeletonArticleContent from './contents/ArticleContent/skeleton';

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
            type: 'article',
            publishedTime: new Date(article._publishedAt).toISOString(),
            modifiedTime: new Date(article._updatedAt).toISOString(),
            authors: article.author.name,
            siteName: article.seo.title,
            url: `${config.urls.base}/blog/${article.slug}`,
            locale: 'pt_BR'
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
        publisher: 'https://www.linkedin.com/in/roberto-brito-fernandes/',
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
        <main className='relative max-w-[2560px] py-20 lg:py-40'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <Suspense fallback={<SkeletonArticleContent />}>
                    <ArticleContent slug={params.article} />
                </Suspense>
            </section>
        </main>
    );
}
