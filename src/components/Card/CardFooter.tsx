import React, { ComponentProps, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const styles = tv({
    base: 'px-6 pb-6'
});

interface CardFooterProps extends ComponentProps<'div'> {
    children: ReactNode;
}

export default function CardFooter({ children, className, ...rest }: CardFooterProps) {
    return (
        <div className={styles({ className })} {...rest}>
            {children}
        </div>
    );
}
