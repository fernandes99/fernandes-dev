'use client';

import { Tag } from '@/components/Tag';
import { experienceList } from '@/constants/experiences';
import { UIEvent, useState } from 'react';
import { FiArrowUpRight, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

export default function SectionExperience() {
    const [showScrollShadow, setShowScrollShadow] = useState({
        left: true,
        right: false
    });

    const Line = () => (
        <div className='relative mb-4 mt-2 h-[1px] w-full bg-[#253345] before:absolute before:-top-[3px] before:left-0 before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#253345]' />
    );

    const handleExperienceScroll = (event: UIEvent<Element>) => {
        const target = event.target as HTMLUListElement;
        const isScrollEnd = target.scrollWidth - target.scrollLeft === target.clientWidth;

        setShowScrollShadow({
            left: target.scrollLeft === 0,
            right: isScrollEnd
        });
    };

    return (
        <section className='container relative mx-auto min-h-[660px] max-w-[1020px] py-32'>
            <div className='mb-6 flex items-center justify-between'>
                <h3 className='text-3xl font-semibold'>Experiência</h3>
                <div className='flex items-center gap-3'>
                    <i className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-800 text-2xl text-secondary-200 hover:bg-secondary-800-hover'>
                        <FiArrowLeft />
                    </i>
                    <i className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-800 text-2xl text-secondary-200 hover:bg-secondary-800-hover'>
                        <FiArrowRight />
                    </i>
                </div>
            </div>

            <div className='absolute flex w-[1400px]'>
                <ul className='no-scrollbar flex overflow-x-auto' onScroll={handleExperienceScroll}>
                    {experienceList.map((experience) => (
                        <li className='min-w-[500px]' key={experience.id}>
                            <span className='text-xs font-medium text-secondary-500'>
                                {experience.time_interval}
                            </span>

                            <Line />

                            <div className='pr-8'>
                                <a
                                    href={experience.link_company}
                                    className='flex w-min items-center gap-1 hover:text-secondary-200'
                                >
                                    <p className='font-medium'>MadeiraMadeira</p>
                                    <FiArrowUpRight />
                                </a>
                                <p className='mb-4 text-secondary-200'>{experience.office}</p>
                                <p className='mb-4 font-light text-secondary-200'>
                                    {experience.description}
                                </p>

                                <ul className='flex flex-wrap gap-2'>
                                    {experience.skills.map((skill) => (
                                        <li key={skill}>
                                            <Tag size='small'>{skill}</Tag>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>

                <div
                    className={`pointer-events-none absolute left-0 top-0 h-full w-64 bg-[linear-gradient(270deg,#191E2400_0%,#191E24_100%)] transition-all opacity-${
                        showScrollShadow.left ? '0' : '100'
                    }`}
                />

                <div
                    className={`pointer-events-none absolute right-0 top-0 h-full w-64 bg-[linear-gradient(270deg,#191E24_0%,#191E2400_100%)] transition-all opacity-${
                        showScrollShadow.right ? '0' : '100'
                    }`}
                />
            </div>
        </section>
    );
}
