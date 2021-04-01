import React from 'react';
import { Grid } from '@material-ui/core';

import heroService from '../../../../../application/services/heroService';

import HeroEditPlayerEquipmentItem from './HeroEditPlayerEquipmentItem';

export default function HeroEditPlayerEquipment({ hero, update }) {
    const equipTypes = heroService.getTypeOfEquipment();

    const updateEquipment = (type, property, newValue) => {
        const newEquips = { ...hero.playerInfo.equipment };
        newEquips[type][property] = newValue;
        update(newEquips);
    };

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12}>
                {equipTypes.map((elem) => (
                    <HeroEditPlayerEquipmentItem
                        key={elem}
                        type={elem}
                        heroType={hero.category.type}
                        equipment={hero.playerInfo.equipment[elem]}
                        update={updateEquipment}
                    />
                ))}
            </Grid>
        </Grid>
    );
}
