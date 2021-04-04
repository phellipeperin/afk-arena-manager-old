import React from 'react';

import ImageAvatar from '../../Avatar/ImageAvatar';

import assetsService from '../../../application/services/assetsService';

import './hero-equipment-item.scss';

export default function HeroEquipmentItem({ hero = {}, playerInfo = {}, type = '' }) {
    const equip = playerInfo.equipment[type];
    const imgSrc = assetsService.getEquipment(hero.category.type, type, equip.acquired, equip.tier);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < equip.stars; i++) {
            stars.push(<div key={i} className='star equip-star' />);
        }
        return stars;
    };

    return (
        <div className='equip-container'>
            <ImageAvatar
                variant='rounded'
                classList='hero-equip-image'
                imgSrc={imgSrc}
            />
            {equip.acquired && (
                <div className='equip-info-container'>
                    <div className='info-container'>
                        {equip.tier !== 3 && equip.faction && equip.faction !== 'NONE' && (
                            <img
                                src={assetsService.getHeroFaction(equip.faction)}
                                alt='faction'
                                className='equip-item-faction'
                            />
                        )}
                        {equip.tier === 3 && (
                            <img
                                src={hero.images.profile}
                                alt='hero'
                                className='equip-item-faction'
                            />
                        )}
                        <div className='equip-item-tier'>
                            T
                            {equip.tier}
                        </div>
                    </div>
                    {!!equip.stars && equip.tier !== 3 && (
                        <div className='star-container'>
                            {renderStars()}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
