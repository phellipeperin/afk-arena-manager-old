import React from 'react';

export default function SubHeader({ text = '', noMarginTop = false, center = false }) {
    return (
        <p className={`subheader size-12 ${noMarginTop ? 'mt-0' : 'mt-8'} mb-2 ${center ? 'text-align-center' : 'text-align-left'} text-uppercase fw-600 ls-1 text-secondary`}>{text}</p>
    );
}
