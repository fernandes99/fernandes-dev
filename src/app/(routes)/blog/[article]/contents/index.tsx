import Image from 'next/image';
import { ArticleService } from '@/services/articles';
import '@/styles/article.css';

interface ArticleContentProps {
    slug: string;
}

async function ArticleContent({ slug }: ArticleContentProps) {
    const article = await ArticleService.getBySlug(slug);

    return (
        <section className='grid grid-cols-1 md:grid-cols-[3fr,1fr]'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-wrap gap-2'>
                    {article.tags.map((tag) => (
                        <a
                            key={tag.id}
                            href={`/tags/${tag.slug}`}
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
                    ))}
                </div>
                <h1 className='mb-4 text-5xl font-semibold leading-tight'>{article.title}</h1>
                <div className='mb-4 flex items-center gap-4'>
                    <div className='h-16 w-16 overflow-hidden rounded-full'>
                        <Image
                            src={article.author.profileImage.url}
                            alt={article.author.profileImage.alt}
                            title={article.cover.title}
                            width={article.author.profileImage.width}
                            height={article.author.profileImage.height}
                            blurDataURL={article.author.profileImage.blurhash}
                            placeholder='blur'
                        />
                    </div>
                    <div>
                        <p className='font-semibold'>{article.author.name}</p>
                        <p className='text-sm text-secondary-200'>Desenvolvedor Front End</p>
                    </div>
                </div>

                <hr className='opacity-5' />

                <div className='flex h-full w-auto items-center justify-center overflow-hidden rounded-lg object-cover md:h-96 md:w-full'>
                    <Image
                        src={article.cover.url}
                        alt={article.cover.alt}
                        title={article.cover.title}
                        width={article.cover.width}
                        height={article.cover.height}
                        blurDataURL={article.cover.blurhash}
                        placeholder='blur'
                    />
                </div>

                <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    className='flex flex-col gap-4 text-secondary-100'
                    id='article-content'
                />
            </div>
        </section>
    );
}

export default ArticleContent;
