export default function SkeletonArticleContent() {
    return (
        <div className='grid animate-pulse grid-cols-1 lg:grid-cols-[4fr,1fr]'>
            <div className='grid gap-4 rounded-xl p-2'>
                <div className='flex w-1/3 gap-2'>
                    <div className='h-6 flex-1 rounded-lg bg-slate-800' />
                    <div className='h-6 flex-1 rounded-lg bg-slate-800' />
                </div>
                <div className='h-12 rounded-lg bg-slate-800' />
                <div className='h-12 w-2/3 rounded-lg bg-slate-800' />
                <div className='flex items-center gap-4'>
                    <div className='h-16 w-16 rounded-full bg-slate-800' />
                    <div className='flex flex-1 flex-col gap-4'>
                        <div className='h-4 w-48 rounded bg-slate-800' />
                        <div className='h-4 w-24 rounded bg-slate-800' />
                    </div>
                </div>
                <div className='h-80 w-full rounded-lg bg-slate-800' />
            </div>
        </div>
    );
}
