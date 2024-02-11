'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/Card';
import { projectList } from '@/constants/projects';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function SectionProject() {
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
            className={`container mx-auto max-w-[1020px] py-12 duration-500 xl:py-32 ${
                preSectionOnView
                    ? 'translate-y-0 opacity-100 blur-none'
                    : 'translate-y-12 opacity-0 blur-sm'
            }`}
            ref={sectionRef}
            id='projetos'
        >
            <h3 className='mb-6 text-3xl font-semibold'>Projetos</h3>

            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {projectList.map((project) => (
                    <li key={project.id}>
                        <Card.Root className='h-full'>
                            <Card.Image
                                pathImage={project.path_image}
                                alt={`Thumb do projeto ${project.title}`}
                                title={`Thumb do projeto ${project.title}`}
                            />
                            <Card.Head>
                                <div className='flex flex-wrap justify-between gap-4'>
                                    <a
                                        href={project.github_link || '/'}
                                        title={`Acessar repositório de ${project.title}`}
                                        target='_blank'
                                        className='flex w-fit items-center gap-2 hover:opacity-70'
                                    >
                                        <p className='text-lg font-semibold'>{project.title}</p>
                                        {!!project.github_link && (
                                            <FaGithub className='text-secondary-200' />
                                        )}
                                    </a>
                                    <a
                                        href={project.project_link}
                                        title={`Acessar projeto de ${project.title}`}
                                        target='_blank'
                                        className='flex w-fit items-center gap-1 hover:opacity-70'
                                    >
                                        <p className='text-xs font-medium text-secondary-200'>
                                            Acessar
                                        </p>
                                        <FiExternalLink className='text-secondary-200' size={14} />
                                    </a>
                                </div>
                            </Card.Head>
                            <Card.Body>
                                <p className='custom-ellipsis line-clamp-5 font-light text-secondary-200'>
                                    {project.description}
                                </p>
                            </Card.Body>
                            <Card.Footer className='mt-auto'>
                                <ul className='flex items-center gap-2'>
                                    {project.tools.map((tool) => (
                                        <li
                                            key={tool.slug}
                                            className='cursor-pointer text-2xl text-secondary-500 hover:text-secondary-200'
                                        >
                                            <a title={tool.name} href={tool.url}>
                                                {tool.icon}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Footer>
                        </Card.Root>
                    </li>
                ))}
            </ul>
        </section>
    );
}
