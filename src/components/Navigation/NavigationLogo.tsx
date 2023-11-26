import React, { ReactElement } from 'react';

interface NavigationLogoProps {
    symbol: ReactElement;
}

export default function NavigationLogo({ symbol }: NavigationLogoProps) {
    return <div className='mr-auto h-5/6'>{symbol}</div>;
}
