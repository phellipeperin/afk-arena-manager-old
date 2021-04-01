import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { ascensionOptionList } from '../../../../../application/services/infoService';

export default function HeroEditPlayerAscension({ hero, update }) {
    return (
        <FormControl fullWidth>
            <InputLabel id='ascension'>Ascension</InputLabel>
            <Select
                labelId='ascension'
                name='ascension'
                label='Ascension'
                onChange={update}
                value={hero.playerInfo.ascension}
            >
                {ascensionOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
