import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import heroService from '../../../../../application/services/heroService';

export default function HeroEditPlayerNumberOfCopies({ hero, update }) {
    const { faction } = hero.category;
    const min = heroService.getNumberOfCopies(faction, hero.playerInfo.ascension);
    const max = heroService.getNumberOfCopies(faction, 'ASCENDED_5');

    const optionList = () => {
        const possibleList = [];
        for (let i = min; i <= max; i++) {
            possibleList.push({ value: i, label: i });
        }
        return possibleList;
    };

    return (
        <FormControl fullWidth>
            <InputLabel id='numberOfCopies'>No of Copies</InputLabel>
            <Select
                disabled={hero.playerInfo.ascension === 'NONE'}
                labelId='numberOfCopies'
                name='numberOfCopies'
                label='Number of Copies'
                onChange={update}
                value={hero.playerInfo.numberOfCopies}
            >
                {optionList().map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
