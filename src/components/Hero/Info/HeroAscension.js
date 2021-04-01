import React from 'react';
import { Chip } from '@material-ui/core';

import assetsService from '../../../application/services/assetsService';

import ImageAvatar from '../../Avatar/ImageAvatar';

import './hero-ascension.scss';

export default function HeroAscension({ playerInfo = {} }) {
    const getAscensionColor = (ascension) => {
        if (ascension.includes('ELITE')) return 'elite';
        if (ascension.includes('LEGENDARY')) return 'legendary';
        if (ascension.includes('MYTHIC')) return 'mythic';
        if (ascension.includes('ASCENDED')) return 'ascended';
        return '';
    };

    const getAscensionExtraInfo = () => {
        const { ascension } = playerInfo;

        if (ascension.includes('_PLUS')) {
            const extraClass = getAscensionColor(ascension);
            return (<div className={`ascension-plus-sign ${extraClass}`}><span>+</span></div>);
        }

        const stars = [];
        let numberOfStars = 0;
        if (ascension === 'ASCENDED_1') numberOfStars = 1;
        if (ascension === 'ASCENDED_2') numberOfStars = 2;
        if (ascension === 'ASCENDED_3') numberOfStars = 3;
        if (ascension === 'ASCENDED_4') numberOfStars = 4;
        if (ascension === 'ASCENDED_5') numberOfStars = 5;

        for (let i = 0; i < numberOfStars; i++) {
            stars.push(<div key={i} className='ascension-star' />);
        }

        return (<div className='ascension-star-container'>{stars}</div>);
    };

    return (
        <div className='ascension-container'>
            {playerInfo.ascension && playerInfo.ascension !== 'NONE' ? (
                <>
                    <ImageAvatar
                        transparentBg
                        classList='ascension-icon'
                        imgSrc={assetsService.getHeroAscension(playerInfo.ascension)}
                    />
                    {getAscensionExtraInfo()}
                </>
            ) : (
                <Chip label='Not Acquired!' />
            )}
        </div>
    );
}
