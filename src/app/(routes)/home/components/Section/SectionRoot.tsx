import { ReactNode } from 'react';

interface SectionRootProps {
    children: ReactNode;
}

export default function SectionRoot({ children }: SectionRootProps) {
    return <div className='px-6 xl:px-0'>{children}</div>;
}
