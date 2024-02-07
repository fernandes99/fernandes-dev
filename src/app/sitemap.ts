import { config } from '@/config/general';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: config.urls.base,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        }
    ];
}
