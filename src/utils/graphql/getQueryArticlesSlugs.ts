interface IGetQueryAllArticles {
    first: number;
    skip?: number;
}

const getQueryAllArticlesSlug = () => {
    return `
        query QueryAllArticles {
            allArticles {
                id
                slug
                _updatedAt
            }
        }
    `;
};

export default getQueryAllArticlesSlug;
