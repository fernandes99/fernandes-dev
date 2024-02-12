import { config } from '@/config/general';
import { ArticleService } from '@/services/articles';
import format from '@/utils/functions/format';
import Image from 'next/image';
import TagContentEmpty from './empty';

interface ArticleContentProps {
    slug: string;
}

async function TagContent({ slug }: ArticleContentProps) {
    const tag = await ArticleService.getTagBySlug(slug);

    if (!tag) {
        return <TagContentEmpty />;
    }

    const articles = await ArticleService.getAllByTagId(tag?.id);

    return (
        <div>
            <div className='mb-4 flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-semibold'>{tag.title}</h1>
                <p className='mb-2 text-sm font-light text-secondary-200'>
                    {articles?.length === 1
                        ? `${articles?.length} artigo`
                        : `${articles?.length} artigos`}{' '}
                    com esse marcador
                </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {articles?.map((article) => (
                    <article
                        key={article.slug}
                        className='rounded-xl border border-secondary-800 p-2 transition-all hover:border-secondary-800-hover'
                    >
                        <div className='h-48 overflow-hidden rounded-lg'>
                            <Image
                                src={article.cover.url}
                                blurDataURL={article.cover.blurhash}
                                title={article.cover.title}
                                alt={article.cover.alt}
                                width={article.cover.width}
                                height={article.cover.height}
                                placeholder='blur'
                                className='h-full object-cover'
                            />
                        </div>
                        <div className='mt-2 flex flex-col gap-2 p-2'>
                            <a
                                href={`/blog/tags/${tag.slug}`}
                                className='flex w-fit cursor-pointer rounded-lg px-2 py-1'
                                style={{
                                    backgroundColor: tag.color ? `${tag.color.hex}10` : '#20262B'
                                }}
                            >
                                <p
                                    className='text-sm font-semibold text-secondary-200'
                                    style={{
                                        color: tag.color ? `${tag.color.hex}` : '#7C8CA0'
                                    }}
                                >
                                    {tag.title}
                                </p>
                            </a>
                            <h3 className='cursor-pointer text-xl font-semibold'>
                                <a
                                    href={`/blog/${article.slug}`}
                                    title={`Acessar o artigo ${article.title}`}
                                >
                                    {article.title}
                                </a>
                            </h3>
                            <p className='mb-2 line-clamp-3 font-light text-secondary-200'>
                                {article.subtitle}
                            </p>
                            <div className='flex gap-2 text-sm text-secondary-500'>
                                <p>{format.date(article._publishedAt, 'DD MM, AAAA')}</p>
                                <span>•</span>
                                <p>{article.readTime} min de leitura</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default TagContent;
