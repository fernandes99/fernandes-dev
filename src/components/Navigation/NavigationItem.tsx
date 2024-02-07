import Link from 'next/link';
import React, { ComponentProps, ReactElement } from 'react';

interface NavigationItemProps extends ComponentProps<'li'> {
    children: ReactElement | string;
    title: string;
    href: string;
}

export default function NavigationItem({ title, children, href, ...rest }: NavigationItemProps) {
    return (
        <li {...rest}>
            <Link href={href} title={title} key={title}>
                {children}
            </Link>
        </li>
    );
}
