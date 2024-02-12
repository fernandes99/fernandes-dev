const getQueryAllArticlesByTagId = (id: string) => {
    return `
        query QueryAllArticlesByTagId {
            allArticles(filter: {tags: {allIn: "${id}"}}) {
                id
                slug
                title
                subtitle
                readTime
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
                _publishedAt
                _updatedAt
            }
        }
    `;
};

export default getQueryAllArticlesByTagId;
