import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Roberto Fernandes - Desenvolvedor Front End',
        short_name: 'Roberto Fernandes Dev',
        icons: [
            {
                src: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/favicon/android-chrome-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
    };
}
