export const config = {
    env: process.env.NODE_ENV,
    urls: {
        base:
            process.env.NODE_ENV === 'production'
                ? 'https://www.robertofernandes.dev/'
                : 'http://localhost:3000/'
    },
    tokens: {
        GA: process.env.NEXT_PUBLIC_ANALYTICS_ID
    }
};
