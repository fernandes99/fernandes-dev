import ProfileImageAbout from '@/assets/img/about-image-profile-20231126.png';
import Image from 'next/image';

export default function SectionAbout() {
    return (
        <section className='container mx-auto grid max-w-[1020px] grid-cols-2 gap-16 py-32'>
            <div>
                <h3 className='mb-6 text-3xl font-semibold'>Sobre</h3>
                <p className='mb-6 font-light text-secondary-200'>
                    Olá, meu nome é Roberto, tenho 24 anos e sou um desenvolvedor front-end. Com
                    experiência em UI/UX design, em 2019 migrei para a área de desenvolvimento
                    front-end durante meu estágio, e tenho trabalhado nesta área desde então. Minhas
                    principais habilidades incluem React, Next, Vue, Typescript, Micro Front-End e
                    entre outras.
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
                />
            </div>
        </section>
    );
}
