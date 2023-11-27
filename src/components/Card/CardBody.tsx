import React, { ComponentProps, ReactNode } from 'react';

interface CardBodyProps extends ComponentProps<'div'> {
    children: ReactNode;
}

export default function CardBody({ children }: CardBodyProps) {
    return <div className='px-6 pb-6'>{children}</div>;
}
