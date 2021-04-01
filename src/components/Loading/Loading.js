import React from 'react';
import { CircularProgress } from '@material-ui/core';

import './loading.scss';

export default function Loading() {
    return (
        <div className='loading-container'>
            <CircularProgress
                size={80}
                thickness={2}
            />
        </div>
    );
}
