/* eslint-disable react/no-array-index-key */
import React from 'react';

import heroService from '../../../application/services/heroService';

import HeroFurnitureItem from './HeroFurnitureItem';

import './hero-furniture.scss';

export default function HeroFurniture({ playerInfo = {} }) {
    return (
        <div className='hero-furniture-container'>
            {heroService.isFurnitureAvailable(playerInfo.ascension) && (
                <>
                    <div className='hero-furniture-set'>
                        {playerInfo.furniture.large.map((furniture, index) => (
                            <HeroFurnitureItem
                                key={index}
                                furniture={furniture}
                            />
                        ))}
                    </div>
                    <div className='hero-furniture-set'>
                        {playerInfo.furniture.small.map((furniture, index) => (
                            <HeroFurnitureItem
                                key={index}
                                furniture={furniture}
                            />
                        ))}
                    </div>
                    <div className='hero-furniture-set'>
                        {playerInfo.furniture.hanging.map((furniture, index) => (
                            <HeroFurnitureItem
                                key={index}
                                furniture={furniture}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
