import { config } from '@/config/general';
import { IArticle } from '@/types/articles';
import getQueryArticleBySlug from '@/utils/graphql/getQueryArticleBySlug';
import getQueryAllArticles from '@/utils/graphql/getQueryArticles';

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
    }
};
