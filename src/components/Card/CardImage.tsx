import Image, { StaticImageData } from 'next/image';
import React, { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

const styles = tv({
    base: 'relative flex max-h-48 items-center justify-center overflow-hidden opacity-90 after:absolute after:bottom-0 after:left-0 after:h-2/3 after:w-full after:bg-[linear-gradient(180deg,#191E2400_0%,#191E24_100%)]'
});

interface CardRootProps extends ComponentProps<'div'> {
    pathImage: StaticImageData;
    alt?: string;
}

export default function CardImage({ className, alt, pathImage, ...rest }: CardRootProps) {
    return (
        <div className={styles({ className })} {...rest}>
            <Image src={pathImage} alt={alt} loading='lazy' quality={100} />
        </div>
    );
}
