import { MetadataRoute } from 'next';
import { config } from '@/config/general';
import { ArticleService } from '@/services/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = (await ArticleService.getAllSlugs()) || [];
    const sitemapArticles = articles.map((article) => {
        return {
            url: `${config.urls.base}/blog/${article.slug}`,
            lastModified: new Date(article._updatedAt),
            changeFrequency: 'monthly',
            priority: 0.5
        };
    }) as MetadataRoute.Sitemap;

    return [
        {
            url: config.urls.base,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${config.urls.base}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
        ...sitemapArticles
    ];
}
