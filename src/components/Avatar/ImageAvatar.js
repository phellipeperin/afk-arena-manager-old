import React from 'react';
import { Avatar } from '@material-ui/core';

import './image-avatar.scss';

export default function ImageAvatar({ imgSrc = '', classList = '', fallbackText = '', variant = 'circular', transparentBg = false, replace = false }) {
    return (
        <>
            {replace ? (
                <>
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            className='w-100'
                            alt={fallbackText}
                        />
                    ) : (
                        <Avatar
                            variant={variant}
                            className={`mx-auto ${classList} ${imgSrc && transparentBg ? 'transparent-bg' : ''}`}
                        >
                            <span>{fallbackText}</span>
                        </Avatar>
                    )}
                </>
            ) : (
                <Avatar
                    variant={variant}
                    className={`mx-auto ${classList} ${imgSrc && transparentBg ? 'transparent-bg' : ''}`}
                >
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            className='w-100'
                            alt={fallbackText}
                        />
                    ) : (
                        <span>{fallbackText}</span>
                    )}
                </Avatar>
            )}
        </>
    );
}
