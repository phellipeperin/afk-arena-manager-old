/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid } from '@material-ui/core';

import HeroEditPlayerAscension from './HeroEditPlayerAscension';
import HeroEditPlayerSignatureItem from './HeroEditPlayerSignatureItem';
import HeroEditPlayerPriority from './HeroEditPlayerPriority';
import HeroEditPlayerNumberOfCopies from './HeroEditPlayerNumberOfCopies';
import HeroEditPlayerCrystal from './HeroEditPlayerCrystal';

export default function HeroEditPlayerGeneralData({ hero, updateAscension, updateSignature, updateCrystal, updateNumberOfCopies, updatePriority }) {
    return (
        <Grid
            container
            spacing={2}
            justify='center'
        >
            <Grid item xs={12}>
                <HeroEditPlayerAscension
                    hero={hero}
                    update={updateAscension}
                />
            </Grid>
            <Grid item xs={12}>
                <HeroEditPlayerSignatureItem
                    hero={hero}
                    update={updateSignature}
                />
            </Grid>
            <Grid item xs={12}>
                <HeroEditPlayerPriority
                    hero={hero}
                    update={updatePriority}
                />
            </Grid>
            {hero.category.faction !== 'DIMENSIONAL' && (
                <>
                    <Grid item xs={12} sm={6}>
                        <HeroEditPlayerNumberOfCopies
                            hero={hero}
                            update={updateNumberOfCopies}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <HeroEditPlayerCrystal
                            hero={hero}
                            update={updateCrystal}
                        />
                    </Grid>
                </>
            )}
        </Grid>
    );
}
