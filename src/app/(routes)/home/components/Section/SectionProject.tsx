'use client';

import { Card } from '@/components/Card';
import { projectList } from '@/constants/projects';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

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
        >
            <div className='mb-6 flex justify-between'>
                <h3 className='text-3xl font-semibold'>Projetos</h3>
                <div className='flex items-center gap-3'>
                    <i className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-800 text-2xl text-secondary-200 hover:bg-secondary-800-hover'>
                        <FiArrowLeft />
                    </i>
                    <i className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-800 text-2xl text-secondary-200 hover:bg-secondary-800-hover'>
                        <FiArrowRight />
                    </i>
                </div>
            </div>

            <ul className='grid grid-cols-3 gap-4'>
                {projectList.map((project) => (
                    <li key={project.id}>
                        <Card.Root>
                            <Card.Image pathImage={project.path_image} />
                            <Card.Head>
                                <h5 className='text-lg font-semibold'>{project.title}</h5>
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
