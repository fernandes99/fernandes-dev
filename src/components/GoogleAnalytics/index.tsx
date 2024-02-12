'use client';

import { initializeGA } from '@/utils/analytics';
import { useEffect } from 'react';

declare global {
    interface Window {
        GA_INITIALIZED?: boolean;
    }
}

export default function GoogleAnalytics() {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initializeGA();
            window.GA_INITIALIZED = true;
        }
    }, []);

    return <></>;
}
