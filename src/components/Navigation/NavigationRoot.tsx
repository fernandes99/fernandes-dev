import { usePathname } from 'next/navigation';
import { ComponentProps, ReactNode } from 'react';

interface NavigationRootProps extends ComponentProps<'nav'> {
    children: ReactNode;
}

export default function NavigationRoot({ children }: NavigationRootProps) {
    const pathname = usePathname();

    return (
        <nav
            className={`z-10 w-full bg-blend-soft-light backdrop-blur-sm ${pathname === '/' ? 'fixed' : 'absolute'}`}
        >
            <div className='container mx-auto flex h-16 max-w-[1020px] items-center justify-between p-2'>
                {children}
            </div>
        </nav>
    );
}
