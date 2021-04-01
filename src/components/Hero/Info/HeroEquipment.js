import React from 'react';
import { Grid } from '@material-ui/core';

import HeroEquipmentItem from './HeroEquipmentItem';

export default function HeroEquipment({ hero = {}, playerInfo = {} }) {
    return (
        <Grid
            container
            spacing={2}
            justify='space-evenly'
        >
            <Grid item xs={3}>
                <HeroEquipmentItem
                    hero={hero}
                    playerInfo={playerInfo}
                    type='weapon'
                />
            </Grid>
            <Grid item xs={3}>
                <HeroEquipmentItem
                    hero={hero}
                    playerInfo={playerInfo}
                    type='head'
                />
            </Grid>
            <Grid item xs={3}>
                <HeroEquipmentItem
                    hero={hero}
                    playerInfo={playerInfo}
                    type='body'
                />
            </Grid>
            <Grid item xs={3}>
                <HeroEquipmentItem
                    hero={hero}
                    playerInfo={playerInfo}
                    type='feet'
                />
            </Grid>
        </Grid>
    );
}
