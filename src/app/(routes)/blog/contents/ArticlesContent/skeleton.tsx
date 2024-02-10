export default function SkeletonArticlesContent() {
    return (
        <div className='grid animate-pulse grid-cols-3 gap-6'>
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`rounded-xl p-2 ${i >= 3 ? 'opacity-40' : 'opacity-100'}`}>
                    <div className='h-48 rounded-lg bg-secondary-800' />
                    <div className='mt-2 flex-1 space-y-4 py-1'>
                        <div className='h-4 rounded bg-secondary-800' />
                        <div className='space-y-3'>
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='col-span-2 h-2 rounded bg-secondary-800'></div>
                                <div className='col-span-1 h-2 rounded bg-secondary-800'></div>
                            </div>
                            <div className='h-2 rounded bg-secondary-800'></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
