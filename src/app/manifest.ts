import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Portfólio Roberto Fernandes',
        short_name: 'Fernandes Dev',
        icons: [
            {
                src: '../assets/fav/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '../assets/fav/android-chrome-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
    };
}
