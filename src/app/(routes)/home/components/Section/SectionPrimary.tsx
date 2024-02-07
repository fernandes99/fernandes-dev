'use client';

import { Button } from '@/components/Button';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';

import ProfileImagePrincipal from '@/assets/img/profile_image_01_20220626.png';
import Image from 'next/image';

export default function SectionPrimary() {
    return (
        <section className='container mx-auto grid max-w-[1020px] grid-cols-1 gap-16 pb-12 pt-12 xl:grid-cols-2 xl:pb-24 xl:pt-32'>
            <div className='py-24'>
                <div className='mb-8'>
                    <p className='mb-2 text-sm font-light text-secondary-200'>Olá, meu nome é</p>
                    <h1 className='mb-2 text-5xl font-semibold'>
                        Roberto
                        <br />
                        Fernandes
                    </h1>
                    <h2 className='mb-4 font-semibold'>Desenvolvedor Front-End</h2>
                    <p className='mb-6 font-light text-secondary-200 sm:w-1/2 xl:w-full'>
                        Procurando aprender novas tecnologias e aprimorar minhas habilidades para
                        desenvolver soluções de alta qualidade.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        <Button
                            className='mr-2'
                            onClick={() =>
                                window.open('/docs/curriculo_roberto_fernandes_2023.pdf', '_blank')
                            }
                        >
                            Ver currículo <RxExternalLink />
                        </Button>
                        <Button
                            variant='secondary'
                            onClick={() =>
                                document
                                    .querySelector('#projetos')
                                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                        >
                            Ver projetos
                        </Button>
                    </div>
                </div>

                <div className='flex items-center gap-4 text-3xl text-secondary-500'>
                    <a
                        href='https://github.com/fernandes99/'
                        title='Acessar Github de Roberto'
                        target='_blank'
                        className='hover:text-secondary-200'
                    >
                        <FaGithub />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/roberto-brito-fernandes/'
                        title='Acessar Linkedin de Roberto'
                        target='_blank'
                        className='hover:text-secondary-200'
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href='https://web.whatsapp.com/send?phone=5583987355247'
                        title='Acessar Linkedin de Roberto'
                        target='_blank'
                        className='hover:text-secondary-200'
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            <div className='md:w-unset absolute left-[20%] top-0 -z-10 w-full overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[radial-gradient(#191E2400_0%,#191E24_60%,#191E24_100%)] md:top-[-5%] lg:top-[-8%] xl:left-[40%] xl:top-[-10%]'>
                <Image
                    className='translate-y-[0px] opacity-30 grayscale md:translate-y-[80px]'
                    src={ProfileImagePrincipal}
                    alt='Imagem de perfil de Roberto'
                    priority
                    quality={50}
                />
            </div>
        </section>
    );
}
