import { Suspense } from 'react';
import TagContent from './contents/TagContent';

type TagPageProps = {
    params: Promise<{
        tag: string;
    }>;
};

export default async function TagPage({ params }: Readonly<TagPageProps>) {
    const { tag } = await params;

    return (
        <main className='relative max-w-[2560px] py-20 lg:py-40'>
            <section className='container mx-auto grid max-w-[1020px] p-4 lg:p-0'>
                <Suspense fallback={<span>Carregando...</span>}>
                    <TagContent slug={tag} />
                </Suspense>
            </section>
        </main>
    );
}
