'use client';

import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';

import React, { useEffect } from 'react';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

const HiglightCode = ({ content }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div
            className='flex flex-col gap-4 text-secondary-100'
            dangerouslySetInnerHTML={{
                __html: content
            }}
        />
    );
};

export default HiglightCode;
