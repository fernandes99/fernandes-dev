'use client';

import ProfileImageAbout from '@/assets/img/about_image_profile_20231126.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SectionAbout() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [preSectionOnView, setPreSectionOnView] = useState(false);

    const handleScroll = () => {
        const sectionElement = sectionRef.current!;
        const { top, bottom } = sectionElement.getBoundingClientRect();

        setPreSectionOnView(bottom >= 0 && window.innerHeight - top >= 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className={`container mx-auto grid max-w-[1020px] grid-cols-1 gap-16 py-12 transition-all duration-500 xl:grid-cols-2 xl:py-32 ${
                preSectionOnView
                    ? 'translate-y-0 opacity-100 blur-none'
                    : 'translate-y-12 opacity-0 blur-sm'
            }`}
            ref={sectionRef}
        >
            <div>
                <h3 className='mb-6 text-3xl font-semibold'>Sobre</h3>
                <p className='mb-6 font-light text-secondary-200'>
                    Olá, meu nome é Roberto, tenho 25 anos e sou um desenvolvedor front-end. Em
                    2019, eu trabalhava com design UI/UX. Foi nesse período que decidi migrar para a
                    área de desenvolvimento front-end durante meu estágio, e tenho trabalhado nesse
                    campo desde então. Minhas principais habilidades incluem TypeScript, Next,
                    React, Vue, micro front-end, entre outras.
                </p>
                <p className='mb-6 font-light text-secondary-200'>
                    Estou sempre procurando aprender novas tecnologias e aprimorar minhas
                    habilidades para desenvolver soluções de alta qualidade.
                </p>
            </div>

            <div>
                <Image
                    src={ProfileImageAbout}
                    alt='Imagem do Roberto Fernandes com símbolos por volta, referente à linguagens e frameworks front end'
                    loading='lazy'
                />
            </div>
        </section>
    );
}
