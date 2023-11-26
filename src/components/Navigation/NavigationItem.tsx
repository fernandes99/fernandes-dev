import Link from 'next/link';
import React, { ComponentProps, ReactElement } from 'react';

interface NavigationItemProps extends ComponentProps<'li'> {
    children: ReactElement | string;
    title: string;
    href: string;
}

export default function NavigationItem({ title, children, href, ...rest }: NavigationItemProps) {
    return (
        <Link href={href} title={title} key={title}>
            <li {...rest}>{children}</li>
        </Link>
    );
}
