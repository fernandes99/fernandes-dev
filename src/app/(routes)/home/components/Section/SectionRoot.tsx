import { ReactNode } from 'react';

interface SectionRootProps {
    children: ReactNode;
}

export default function SectionRoot({ children }: SectionRootProps) {
    return <div>{children}</div>;
}
