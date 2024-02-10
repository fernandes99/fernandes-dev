import { Suspense } from 'react';
import ArticleContent from './contents';

interface BlogPageProps {
    params: {
        article: string;
    };
}

export default function BlogPage({ params }: BlogPageProps) {
    return (
        <main className='md:overflow-[unset] relative max-w-[2560px] overflow-x-hidden py-20 lg:py-40 xl:static'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <Suspense fallback={<span>Loading</span>}>
                    <ArticleContent slug={params.article} />
                </Suspense>
            </section>
        </main>
    );
}
