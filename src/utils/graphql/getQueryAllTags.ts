const getQueryAllTags = () => {
    return `
        query QueryAllTags {
            allTags {
                slug
                id
                title
                color {
                    hex
                }
                _updatedAt
            }
        }
    `;
};

export default getQueryAllTags;
