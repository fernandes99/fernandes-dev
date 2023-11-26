import { Tag } from '@/components/Tag';
import { experienceList } from '@/constants/experience';
import { FiArrowUpRight } from 'react-icons/fi';

export default function SectionExperience() {
    const Line = () => (
        <div className='relative mb-4 mt-2 h-[1px] w-full bg-[#253345] before:absolute before:-top-[3px] before:left-0 before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#253345]' />
    );

    return (
        <section className='container relative mx-auto min-h-[660px] max-w-[1020px] py-32'>
            <div>
                <h3 className='mb-6 text-3xl font-semibold'>Experiência</h3>
            </div>

            <div className='absolute flex w-[1400px]'>
                <ul className='no-scrollbar flex overflow-x-auto'>
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

                <div className='absolute right-0 top-0 h-full w-64 bg-[linear-gradient(270deg,#191E24_0%,#191E2400_100%)]' />
                <div className='absolute left-0 top-0 h-full w-64 bg-[linear-gradient(270deg,#191E2400_0%,#191E24_100%)]' />
            </div>
        </section>
    );
}
