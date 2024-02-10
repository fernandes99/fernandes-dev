import { Suspense } from 'react';
import ArticlesContent from './contents/ArticlesContent';
import SkeletonArticlesContent from './contents/ArticlesContent/skeleton';

export default function BlogPage() {
    return (
        <main className='md:overflow-[unset] relative max-w-[2560px] overflow-x-hidden py-20 lg:py-40 xl:static'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <div className='mb-4'>
                    <h1 className='mb-2 text-sm font-light text-secondary-200'>
                        Blog de Roberto Fernandes
                    </h1>
                    <h2 className='text-2xl font-semibold'>Últimas publicações</h2>
                </div>
                <Suspense fallback={<SkeletonArticlesContent />}>
                    <ArticlesContent />
                </Suspense>
            </section>
        </main>
    );
}
