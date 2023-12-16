import React, { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { styles } from './styles';

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
