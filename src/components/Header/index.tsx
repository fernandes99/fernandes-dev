'use client';

import { navData } from '@/constants/navigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export default function Header() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <nav
                className={`z-10 w-full bg-blend-soft-light backdrop-blur-sm ${pathname === '/' ? 'fixed' : 'absolute'}`}
            >
                <div className='container mx-auto flex h-16 max-w-[1020px] items-center justify-between px-4 py-2'>
                    <div className='flex h-16 items-center'>
                        <a
                            href='/'
                            title='Voltar para a home'
                            className='flex items-center text-2xl'
                        >
                            <span>Fernandes</span>
                            <span className='font-semibold text-primary-500 drop-shadow-[0px_2px_8px_rgba(70,33,159,1)]'>
                                Dev
                            </span>
                        </a>
                    </div>

                    {isMobile ? (
                        <>
                            <button
                                className='rounded-lg border border-secondary-800 p-2'
                                onClick={handleShowMenu}
                            >
                                <HiOutlineMenuAlt3 size={24} className={'text-secondary-200'} />
                            </button>
                            {showMenu && (
                                <div className='fixed left-0 top-0 h-screen w-full bg-secondary-800/70'>
                                    <button
                                        className='absolute right-2 top-2 rounded-lg border border-secondary-500/50 p-2'
                                        onClick={handleShowMenu}
                                    >
                                        <IoClose size={24} className={'text-secondary-100'} />
                                    </button>
                                    <div className='h-full w-4/5 bg-white p-4'>
                                        <ul className='flex flex-col gap-6'>
                                            {navData.list.map((item) => (
                                                <li
                                                    key={item.title}
                                                    className='rounded-md px-3 py-1 text-secondary-800 hover:bg-black/20'
                                                >
                                                    <a {...item}>{item.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <ul className='flex items-center gap-6 opacity-0 md:opacity-100'>
                            {navData.list.map((item) => (
                                <li
                                    key={item.title}
                                    className='rounded-md px-3 py-1 hover:bg-black/20'
                                >
                                    <a {...item}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}
