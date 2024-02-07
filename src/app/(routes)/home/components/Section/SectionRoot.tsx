import { ReactNode } from 'react';

interface SectionRootProps {
    children: ReactNode;
}

export default function SectionRoot({ children }: SectionRootProps) {
    return <div className='md:overflow-[unset] overflow-hidden px-6 xl:px-0'>{children}</div>;
}
