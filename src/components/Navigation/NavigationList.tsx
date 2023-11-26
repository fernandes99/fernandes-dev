import React, { ComponentProps, ReactElement, ReactNode } from 'react';

interface NavigationListProps extends ComponentProps<'ul'> {
    children: ReactNode;
}

export default function NavigationList({ children, ...rest }: NavigationListProps) {
    return (
        <ul className='ml-auto flex items-center gap-6' {...rest}>
            {children}
        </ul>
    );
}
