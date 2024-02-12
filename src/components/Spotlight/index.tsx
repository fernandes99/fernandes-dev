'use client';

import { useEffect, useRef } from 'react';

export function Spotlight() {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const size = 600;
    const handleOver = (event: MouseEvent) => {
        const element = spotlightRef.current!;

        element.style.left = `${event.clientX - size / 2}px`;
        element.style.top = `${event.clientY - size / 2}px`;
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
            className={`pointer-events-none fixed bg-[radial-gradient(#0063d9_0%,#0063d900_70%)] opacity-5`}
        />
    );
}
