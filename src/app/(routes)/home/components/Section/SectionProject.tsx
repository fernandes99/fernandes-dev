'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/Card';
import { projectList } from '@/constants/projects';
import { FiExternalLink } from 'react-icons/fi';

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
            className={`container mx-auto max-w-[1020px] py-32 duration-500 ${
                preSectionOnView
                    ? 'translate-y-0 opacity-100 blur-none'
                    : 'translate-y-12 opacity-0 blur-sm'
            }`}
            ref={sectionRef}
            id='projetos'
        >
            <h3 className='mb-6 text-3xl font-semibold'>Projetos</h3>

            <ul className='grid grid-cols-3 gap-4'>
                {projectList.map((project) => (
                    <li key={project.id}>
                        <Card.Root>
                            <Card.Image pathImage={project.path_image} />
                            <Card.Head>
                                <a
                                    href={project.github_link}
                                    title={`Acessar o projeto ${project.title}`}
                                    target='_blank'
                                    className='flex w-fit items-center gap-2 hover:opacity-70'
                                >
                                    <h5 className='text-lg font-semibold'>{project.title}</h5>
                                    <FiExternalLink className='mb-[3px] text-secondary-200' />
                                </a>
                            </Card.Head>
                            <Card.Body>
                                <p className='font-light text-secondary-200'>
                                    {project.description}
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                <ul className='flex items-center gap-2'>
                                    {project.tools.map((tool) => (
                                        <a
                                            key={tool.slug}
                                            className='cursor-pointer text-2xl text-secondary-500 hover:text-secondary-200'
                                            title={tool.name}
                                            href={tool.url}
                                        >
                                            {tool.icon}
                                        </a>
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
