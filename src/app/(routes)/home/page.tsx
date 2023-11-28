'use client';

import { useEffect, useRef, useState } from 'react';
import { Section } from './components/section';

export default function HomePage() {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const spotSize = 400;
    const handleOver = (event: MouseEvent) => {
        const element = spotlightRef.current!;

        element.style.left = `${event.clientX - spotSize / 2}px`;
        element.style.top = `${event.clientY - spotSize / 2}px`;
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleOver);
        return () => window.removeEventListener('mousemove', handleOver);
    }, []);

    return (
        <main className='max-w-[2560px]'>
            <Section.Root>
                <Section.Primary />
                <Section.About />
                <Section.Experience />
                <Section.Project />
            </Section.Root>

            <div
                ref={spotlightRef}
                className={`fixed h-[400px] w-[400px] bg-[radial-gradient(#7640F5_0%,#7640F500_70%)] opacity-5`}
            />
        </main>
    );
}
