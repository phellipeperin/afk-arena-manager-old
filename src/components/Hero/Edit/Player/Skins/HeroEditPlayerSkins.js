/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

import ImageAvatar from '../../../../Avatar/ImageAvatar';

import './hero-edit-player-skins.scss';

export default function HeroEditPlayerSkins({ hero, update }) {
    const updateSkin = (event, pos) => {
        let newSkins = [...hero.playerInfo.acquiredSkinList];
        if (event.target.checked) {
            newSkins.push(pos);
        } else {
            newSkins = newSkins.filter((elem) => elem !== pos);
        }
        update(newSkins);
    };

    return (
        <Grid
            container
            spacing={2}
            justify='center'
        >
            <Grid item xs={12} sm={6} sm={3} className='text-align-center'>
                <ImageAvatar
                    variant='rounded'
                    classList='hero-profile-avatar large mb-2'
                    imgSrc={hero.images.profile}
                    fallbackText='Profile'
                />
                <FormControl
                    component='fieldset'
                    className='form-control-hero-skin'
                >
                    <FormLabel component='legend'>Default</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={hero.playerInfo.ascension !== 'NONE'} disabled />} />
                    </FormGroup>
                </FormControl>
            </Grid>
            {hero.skins.map((skin, index) => (
                <Grid key={index} item xs={12} sm={6} sm={3} className='text-align-center'>
                    <ImageAvatar
                        variant='rounded'
                        classList='hero-profile-avatar large mb-2'
                        imgSrc={skin.images.profile}
                        fallbackText='Profile'
                    />
                    <FormControl
                        component='fieldset'
                        className='form-control-hero-skin'
                    >
                        <FormLabel component='legend'>{skin.info.name}</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={hero.playerInfo.acquiredSkinList.includes(index)} onChange={(e) => updateSkin(e, index)} disabled={hero.playerInfo.ascension === 'NONE'} />
                                }
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    );
}
