import { config } from '@/config/general';
import { HOUR_IN_SECOND } from '@/constants/time';
import { IArticle, IArticleTag } from '@/types/articles';
import getQueryAllArticlesByTagId from '@/utils/graphql/getQueryAllArticlesByTagId';
import getQueryAllTags from '@/utils/graphql/getQueryAllTags';
import getQueryArticleBySlug from '@/utils/graphql/getQueryArticleBySlug';
import getQueryAllArticles from '@/utils/graphql/getQueryArticles';
import getQueryAllArticlesSlug from '@/utils/graphql/getQueryArticlesSlugs';
import getQueryTagBySlug from '@/utils/graphql/getQueryTagBySlug';

interface IGetAllResult {
    data: {
        allArticles: IArticle[];
    };
}

interface IGetBySlugResult {
    data: {
        article: IArticle;
    };
}

interface IGetAllSlugsResult {
    data: {
        allArticles: {
            slug: string;
            _updatedAt: Date;
        }[];
    };
}

interface IGetTagBySlugResult {
    data: {
        tag: IArticleTag;
    };
}

interface IGetAllTagsResult {
    data: {
        allTags: IArticleTag[];
    };
}

export const ArticleService = {
    getAll: async () => {
        try {
            const url = config.urls.datoGraphQL;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: config.tokens.datoCms
                },
                body: JSON.stringify({
                    query: getQueryAllArticles({ first: 10 })
                }),
                next: {
                    revalidate: HOUR_IN_SECOND
                }
            });
            const result = (await response.json()) as IGetAllResult;
            return result.data.allArticles;
        } catch (e) {
            return null;
        }
    },
    getAllByTagId: async (id: string) => {
        try {
            const url = config.urls.datoGraphQL;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: config.tokens.datoCms
                },
                body: JSON.stringify({
                    query: getQueryAllArticlesByTagId(id)
                }),
                next: {
                    revalidate: HOUR_IN_SECOND
                }
            });
            const result = (await response.json()) as IGetAllResult;
            return result.data.allArticles;
        } catch (e) {
            return null;
        }
    },
    getBySlug: async (slug: string) => {
        try {
            const url = config.urls.datoGraphQL;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: config.tokens.datoCms
                },
                body: JSON.stringify({
                    query: getQueryArticleBySlug(slug)
                }),
                next: {
                    revalidate: HOUR_IN_SECOND
                }
            });
            const result = (await response.json()) as IGetBySlugResult;
            return result.data.article;
        } catch (e) {
            return null;
        }
    },
    getAllSlugs: async () => {
        try {
            const url = config.urls.datoGraphQL;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: config.tokens.datoCms
                },
                body: JSON.stringify({
                    query: getQueryAllArticlesSlug()
                }),
                next: {
                    revalidate: HOUR_IN_SECOND
                }
            });
            const result = (await response.json()) as IGetAllSlugsResult;
            return result.data.allArticles;
        } catch (e) {
            return null;
        }
    },
    getTagBySlug: async (slug: string) => {
        try {
            const url = config.urls.datoGraphQL;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: config.tokens.datoCms
                },
                body: JSON.stringify({
                    query: getQueryTagBySlug(slug)
                }),
                next: {
                    revalidate: HOUR_IN_SECOND
                }
            });
            const result = (await response.json()) as IGetTagBySlugResult;
            return result.data.tag;
        } catch (e) {
            return null;
        }
    },
    getAllTags: async () => {
        try {
            const url = config.urls.datoGraphQL;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: config.tokens.datoCms
                },
                body: JSON.stringify({
                    query: getQueryAllTags()
                }),
                next: {
                    revalidate: HOUR_IN_SECOND
                }
            });
            const result = (await response.json()) as IGetAllTagsResult;
            return result.data.allTags;
        } catch (e) {
            return null;
        }
    }
};
