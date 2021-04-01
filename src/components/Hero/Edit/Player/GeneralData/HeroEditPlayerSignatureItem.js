import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import heroService from '../../../../../application/services/heroService';

export default function HeroEditPlayerSignatureItem({ hero, update }) {
    const max = heroService.getMaxSignatureItemLevel(hero.category.faction);
    const isDisabled = !heroService.isSignatureItemAvailable(hero.playerInfo.ascension);

    const signatureOptionList = () => {
        const possibleList = [{ value: -1, label: 'Not Unlocked' }, { value: 0, label: 'Base' }];
        for (let i = 1; i <= max; i++) {
            possibleList.push({ value: i, label: `+${i}` });
        }
        return possibleList;
    };

    return (
        <FormControl fullWidth>
            <InputLabel id='signatureItem'>Signature Item</InputLabel>
            <Select
                labelId='signatureItem'
                name='signatureItem'
                label='Signature Item'
                disabled={isDisabled}
                onChange={update}
                value={hero.playerInfo.signatureItem}
            >
                {signatureOptionList().map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
