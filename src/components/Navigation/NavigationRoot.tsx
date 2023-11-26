import React, { ComponentProps, ReactNode } from 'react';

interface NavigationRootProps extends ComponentProps<'nav'> {
    children: ReactNode;
}

export default function NavigationRoot({ children }: NavigationRootProps) {
    return (
        <nav className='fixed z-10 h-16 w-full bg-blend-soft-light backdrop-blur-sm'>
            <div className='container mx-auto flex h-full max-w-[1020px] items-center gap-8 p-2'>
                {children}
            </div>
        </nav>
    );
}
