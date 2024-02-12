const getQueryTagBySlug = (slug: string) => {
    return `
        query QueryTagBySlug {
            tag(filter: {slug: {eq: "${slug}"}}) {
                slug
                id
                title
                color {
                    hex
                }
            }
        }
    `;
};

export default getQueryTagBySlug;
