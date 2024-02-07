import { config } from '@/config/general';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='max-w-[2560px] border-t border-t-secondary-800-hover'>
            <div className='container mx-auto max-w-[1020px] py-6'>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <Link
                        href={config.urls.base}
                        className='text-xs font-medium text-secondary-200 hover:opacity-70'
                    >
                        ℠ Roberto Fernandes Website - 2024
                    </Link>
                </div>
            </div>
        </footer>
    );
}
