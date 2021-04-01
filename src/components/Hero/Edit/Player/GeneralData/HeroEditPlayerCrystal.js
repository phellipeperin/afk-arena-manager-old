import React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

export default function HeroEditPlayerAscension({ hero, update }) {
    return (
        <FormControl
            className='align-center'
            component='fieldset'
        >
            <FormLabel component='legend'>Crystal</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox disabled={hero.playerInfo.ascension === 'NONE'} checked={hero.playerInfo.onCrystal} onChange={update} />} />
            </FormGroup>
        </FormControl>
    );
}
