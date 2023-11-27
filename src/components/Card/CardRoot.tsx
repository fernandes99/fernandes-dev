import React, { ComponentProps, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const styles = tv({
    base: 'w-fit min-w-[200px] max-w-[600px] overflow-hidden rounded-xl border border-secondary-800'
});

interface CardRootProps extends ComponentProps<'div'> {
    children: ReactNode;
}

export default function CardRoot({ children, className, ...rest }: CardRootProps) {
    return (
        <div className={styles({ className })} {...rest}>
            {children}
        </div>
    );
}
