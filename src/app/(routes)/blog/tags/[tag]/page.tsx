import { Suspense } from 'react';
import TagContent from './contents/TagContent';

interface TagPageProps {
    params: {
        tag: string;
    };
}

export default function TagPage({ params }: TagPageProps) {
    return (
        <main className='relative max-w-[2560px] py-20 lg:py-40'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <Suspense fallback={<span>Carregando...</span>}>
                    <TagContent slug={params.tag} />
                </Suspense>
            </section>
        </main>
    );
}
