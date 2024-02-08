import { config } from '@/config/general';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/']
            }
        ],
        sitemap: `${config.urls.base}sitemap.xml`
    };
}
