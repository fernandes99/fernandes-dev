'use client';

import { useEffect, useRef } from 'react';

export function Spotlight() {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const size = 600;
    const handleOver = (event: MouseEvent) => {
        const element = spotlightRef.current!;
        const x = event.clientX - size / 2;
        const y = event.clientY - size / 2;

        element.style.transform = `translate(${x}px, ${y}px)`;
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleOver);
        return () => window.removeEventListener('mousemove', handleOver);
    }, []);

    return (
        <div
            ref={spotlightRef}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
            className={`pointer-events-none fixed left-0 top-0 bg-[radial-gradient(#0063d9_0%,#0063d900_70%)] opacity-5`}
        />
    );
}
