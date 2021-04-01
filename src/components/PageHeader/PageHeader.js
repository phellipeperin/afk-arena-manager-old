import React from 'react';

import './page-header.scss';

export default function PageHeader({ title, subtitle, center = false }) {
    return (
        <header className={center ? 'text-align-center' : 'text-align-left'}>
            <h1 className='size-36 fw-300 my-1 mb-0'>{title}</h1>
            {subtitle && (<p className='size-14'>{subtitle}</p>)}
            <div className={`page-header-divider my-2 ${center ? 'mx-auto' : ''}`} />
        </header>
    );
}
