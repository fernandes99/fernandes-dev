const getQueryArticleBySlug = (slug: string) => {
    return `
        query QueryArticle {
            article(filter: {slug: {eq: "${slug}"}}) {
                id
                slug
                title
                subtitle
                readTime
                content
                author {
                    id
                    name
                    slug
                    profileImage {
                        url
                        title
                        alt
                        blurhash
                        width
                        height
                    }
                }
                tags {
                    id
                    slug
                    title
                    color {
                        hex
                    }
                }
                cover {
                    url
                    title
                    alt
                    blurhash
                    width
                    height
                }
                seo {
                    title
                    description
                    twitterCard
                }
                _publishedAt
                _updatedAt
            }
        }
    `;
};

export default getQueryArticleBySlug;
