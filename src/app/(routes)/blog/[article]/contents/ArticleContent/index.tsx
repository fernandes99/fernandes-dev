import Image from 'next/image';
import { FaXTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { ArticleService } from '@/services/articles';
import { config } from '@/config/general';
import PostContent from '@/components/PostContent';
import '@/styles/article.css';

interface ArticleContentProps {
    slug: string;
}

async function ArticleContent({ slug }: ArticleContentProps) {
    const article = await ArticleService.getBySlug(slug);
    const articleUrl = `${config.urls.base}/blog/${article.slug}`;
    const twitterShareUrl = `https://twitter.com/share?text=${article.title}&url=${articleUrl}&hashtags=${article.tags.map((tag) => tag.slug).join(',')}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}&t=${article.title}`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`;

    return (
        <section className='grid grid-cols-1 gap-4 lg:grid-cols-[3fr,1fr]'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-wrap gap-2'>
                    {article.tags.map((tag) => (
                        <a
                            key={tag.id}
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

                <article id='article-content'>
                    <PostContent content={article.content} />
                </article>
            </div>

            <div className='sticky top-6 h-fit'>
                <span className='flex justify-center text-secondary-200 lg:hidden'>
                    Compartilhe
                </span>
                <div className='flex flex-row items-center justify-center lg:flex-col'>
                    <a
                        className='group rounded-xl p-4 transition-all hover:bg-secondary-800-hover'
                        title='Compartilhar no Twitter'
                        href={twitterShareUrl}
                        target='_blank'
                    >
                        <FaXTwitter
                            size={32}
                            className='text-secondary-200 transition-all group-hover:opacity-75'
                        />
                    </a>
                    <a
                        className='group rounded-xl p-4 transition-all hover:bg-secondary-800-hover'
                        title='Compartilhar no Facebook'
                        href={facebookShareUrl}
                        target='_blank'
                    >
                        <FaFacebook
                            size={32}
                            className='text-secondary-200 transition-all group-hover:opacity-75'
                        />
                    </a>
                    <a
                        className='group rounded-xl p-4 transition-all hover:bg-secondary-800-hover'
                        title='Compartilhar no LinkedIn'
                        href={linkedInShareUrl}
                        target='_blank'
                    >
                        <FaLinkedin
                            size={32}
                            className='text-secondary-200 transition-all group-hover:opacity-75'
                            target='_blank'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ArticleContent;
