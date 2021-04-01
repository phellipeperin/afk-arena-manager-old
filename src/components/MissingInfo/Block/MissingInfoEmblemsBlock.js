import React from 'react';
import { Grid } from '@material-ui/core';

import ImageAvatar from '../../Avatar/ImageAvatar';

import assetsService from '../../../application/services/assetsService';

export default function MissingInfoEmblemsBlock({ data = [] }) {
    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Main</p>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('ELITE')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.elite}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('LEGENDARY')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.legendary}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.mythic}</b></p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Faction</p>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_LIGHTBEARER')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.LIGHTBEARER}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_MAULER')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.MAULER}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_WILDER')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.WILDER}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_GRAVEBORN')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.GRAVEBORN}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_CELESTIAL')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.CELESTIAL}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_HYPOGEAN')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.HYPOGEAN}</b></p>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1} className='text-align-center'>
                        <ImageAvatar
                            variant='rounded'
                            imgSrc={assetsService.getEmblem('MYTHIC_DIMENSIONAL')}
                            fallbackText='E'
                        />
                        <p className='missing-info--text'><b>{data.factions.DIMENSIONAL}</b></p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
