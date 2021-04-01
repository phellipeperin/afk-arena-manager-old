import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { priorityOptionList } from '../../../../../application/services/infoService';

export default function HeroEditPlayerPriority({ hero, update }) {
    return (
        <FormControl fullWidth>
            <InputLabel id='priority'>Priority</InputLabel>
            <Select
                labelId='priority'
                name='priority'
                label='Priority'
                onChange={update}
                value={hero.playerInfo.priority}
            >
                {priorityOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
