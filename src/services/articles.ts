import { config } from '@/config/general';
import { IArticle } from '@/types/articles';
import getQueryArticleBySlug from '@/utils/graphql/getQueryArticleBySlug';
import getQueryAllArticles from '@/utils/graphql/getQueryArticles';
import getQueryAllArticlesSlug from '@/utils/graphql/getQueryArticlesSlugs';

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
                })
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
                })
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
                })
            });
            const result = (await response.json()) as IGetAllSlugsResult;
            return result.data.allArticles;
        } catch (e) {
            return null;
        }
    }
};
