import React from 'react';

import assetsService from '../../../application/services/assetsService';

export default function HeroCategory({ hero = {} }) {
    return (
        <div className='mt-2'>
            <img
                src={assetsService.getHeroFaction(hero.category.faction)}
                alt='faction'
                className='hero-symbol'
            />
            <img
                src={assetsService.getHeroType(hero.category.type)}
                alt='type'
                className='hero-symbol'
            />
            <img
                src={assetsService.getHeroClass(hero.category.class)}
                alt='class'
                className='hero-symbol'
            />
            <img
                src={assetsService.getHeroRole(hero.category.role)}
                alt='role'
                className='hero-symbol'
            />
        </div>
    );
}
