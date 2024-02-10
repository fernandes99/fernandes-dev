interface IGetQueryAllArticles {
    first: number;
    skip?: number;
}

const getQueryAllArticles = ({ first = 10, skip = 0 }: IGetQueryAllArticles) => {
    return `
        query QueryAllArticles {
            allArticles(first: "${first}", skip: "${skip}") {
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

export default getQueryAllArticles;
