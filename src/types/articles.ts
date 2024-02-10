export interface IArticle {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    content: string;
    readTime: number;
    author: IArticleAuthor;
    tags: IArticleTag[];
    cover: IAttributeImage;
    seo: IArticleSEO;
    _publishedAt: Date;
    _updatedAt: Date;
}

interface IArticleAuthor {
    id: string;
    name: string;
    slug: string;
    profileImage: IAttributeImage;
}

interface IArticleSEO {
    title: string;
    description: string;
    twitterCard: string;
}

interface IArticleTag {
    id: string;
    slug: string;
    title: string;
    color?: {
        hex: string;
    };
}

interface IAttributeImage {
    url: string;
    title: string;
    alt: string;
    blurhash: string;
    width: number;
    height: number;
}
