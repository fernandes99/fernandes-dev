import { tv } from 'tailwind-variants';

export const styles = tv({
    base: 'flex items-center gap-2 rounded-md px-5 py-2 font-medium',
    variants: {
        variant: {
            primary:
                'bg-primary-500 shadow-lg shadow-primary-500/40 hover:bg-primary-500-hover hover:shadow-md hover:shadow-primary-500/20',
            secondary: 'bg-secondary-800 hover:bg-secondary-800-hover'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
});
