import React, { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const styles = tv({
    base: 'flex items-center gap-2 rounded-md px-5 py-2 font-medium',
    variants: {
        variant: {
            primary:
                'hover:bg-primary-500-hover bg-primary-500 shadow-lg shadow-primary-500/40 hover:shadow-md hover:shadow-primary-500/20',
            secondary: 'hover:bg-secondary-800-hover bg-secondary-800'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
});

interface ButtonRootProps extends ComponentProps<'button'>, VariantProps<typeof styles> {
    children: ReactNode;
}

export default function ButtonRoot({ children, className, variant, ...rest }: ButtonRootProps) {
    return (
        <button className={styles({ variant, className })} {...rest}>
            {children}
        </button>
    );
}
