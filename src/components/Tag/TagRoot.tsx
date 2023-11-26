import React, { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const styles = tv({
    base: 'flex w-fit items-center justify-center gap-2 rounded-full bg-primary-800 font-medium text-primary-200',
    variants: {
        size: {
            small: 'px-4 py-1 text-sm',
            medium: 'px-5 py-2 text-base',
            large: 'px-5 py-2 text-xl'
        }
    },
    defaultVariants: {
        size: 'medium'
    }
});

interface TagRootProps extends ComponentProps<'div'>, VariantProps<typeof styles> {
    children: ReactNode;
}

export default function TagRoot({ children, size, className, ...rest }: TagRootProps) {
    return (
        <div className={styles({ size, className })} {...rest}>
            {children}
        </div>
    );
}
