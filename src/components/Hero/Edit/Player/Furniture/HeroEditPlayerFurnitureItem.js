import React from 'react';
import { Grid, FormControl, FormControlLabel, FormLabel, FormGroup, Select, Checkbox, InputLabel, MenuItem } from '@material-ui/core';

export default function HeroEditPlayerFurnitureItem({ furniture, update, type = '', pos }) {
    const plusOptionList = [
        { value: 0, text: 'Base' },
        { value: 1, text: '+1' },
        { value: 2, text: '+2' },
        { value: 3, text: 'Max' },
    ];

    const updateAcquired = (event) => { updateItem('acquired', event.target.checked); };
    const updatePlus = (event) => { updateItem('plus', event.target.value); };

    const updateItem = (property, newValue) => { update(type, pos, property, newValue); };

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12} sm={4}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Acquired</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={furniture.acquired} onChange={updateAcquired} />} />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
                <FormControl fullWidth>
                    <InputLabel id='tier'>Plus</InputLabel>
                    <Select
                        labelId='tier'
                        name='tier'
                        label='Tier'
                        disabled={!furniture.acquired}
                        onChange={updatePlus}
                        value={furniture.plus}
                    >
                        {plusOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}
