/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid } from '@material-ui/core';

import SubHeader from '../../../../SubHeader/SubHeader';

import HeroEditPlayerFurnitureItem from './HeroEditPlayerFurnitureItem';

export default function HeroEditPlayerFurniture({ hero, update }) {
    const updateFurniture = (type, pos, property, newValue) => {
        const newFurniture = { ...hero.playerInfo.furniture };
        newFurniture[type][pos][property] = newValue;
        update(newFurniture);
    };

    return (
        <Grid
            container
            spacing={6}
        >
            <Grid item xs={12} sm={4}>
                <SubHeader text='Large Furniture' />
                {hero.playerInfo.furniture.large.map((furniture, index) => (
                    <HeroEditPlayerFurnitureItem
                        key={`large_${index}`}
                        type='large'
                        pos={index}
                        furniture={furniture}
                        update={updateFurniture}
                    />
                ))}
            </Grid>
            <Grid item xs={12} sm={4}>
                <SubHeader text='Small Furniture' />
                {hero.playerInfo.furniture.small.map((furniture, index) => (
                    <HeroEditPlayerFurnitureItem
                        key={`small_${index}`}
                        type='small'
                        pos={index}
                        furniture={furniture}
                        update={updateFurniture}
                    />
                ))}
            </Grid>
            <Grid item xs={12} sm={4}>
                <SubHeader text='Hanging Furniture' />
                {hero.playerInfo.furniture.hanging.map((furniture, index) => (
                    <HeroEditPlayerFurnitureItem
                        key={`hanging_${index}`}
                        type='hanging'
                        pos={index}
                        furniture={furniture}
                        update={updateFurniture}
                    />
                ))}
            </Grid>
        </Grid>
    );
}
