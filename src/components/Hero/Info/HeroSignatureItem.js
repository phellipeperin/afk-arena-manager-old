import React from 'react';

import './hero-signature-item.scss';

export default function HeroSignatureItem({ playerInfo = {} }) {
    return (
        <div className='hero-signature-container'>
            {playerInfo.signatureItem !== -1 && (
                <div className={`hero-signature
                    ${playerInfo.signatureItem >= 0 && playerInfo.signatureItem < 10 ? 'elite' : ''}
                    ${playerInfo.signatureItem >= 10 && playerInfo.signatureItem < 20 ? 'legendary' : ''}
                    ${playerInfo.signatureItem >= 20 ? 'mythic' : ''}
                    ${playerInfo.signatureItem >= 30 ? 'ascended' : ''}
                    `}
                >
                    {playerInfo.signatureItem}
                </div>
            )}
        </div>
    );
}
