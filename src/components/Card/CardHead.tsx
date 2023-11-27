import React, { ComponentProps, ReactNode } from 'react';

interface CardHeadProps extends ComponentProps<'div'> {
    children: ReactNode;
}

export default function CardHead({ children }: CardHeadProps) {
    return <div className='px-6 pb-4 pt-6'>{children}</div>;
}
