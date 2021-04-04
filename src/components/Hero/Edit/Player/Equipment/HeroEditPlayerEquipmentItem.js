import React from 'react';
import { Grid, FormControl, FormControlLabel, FormLabel, FormGroup, Select, Checkbox, InputLabel, MenuItem } from '@material-ui/core';

import ImageAvatar from '../../../../Avatar/ImageAvatar';

import assetsService from '../../../../../application/services/assetsService';
import { factionOptionList } from '../../../../../application/services/infoService';

export default function HeroEditPlayerEquipmentItem({ equipment, update, heroType = '', type = '' }) {
    const tierOptionList = [
        { value: 0, text: 'T0' },
        { value: 1, text: 'T1' },
        { value: 2, text: 'T2' },
        // { value: 3, text: 'T3' },
    ];
    const starOptionList = [
        { value: 0, text: 'Base' },
        { value: 1, text: '1 Star' },
        { value: 2, text: '2 Stars' },
        { value: 3, text: '3 Stars' },
        { value: 4, text: '4 Stars' },
        { value: 5, text: '5 Stars' },
    ];

    const updateAcquired = (event) => { updateItem('acquired', event.target.checked); };
    const updateFaction = (event) => { updateItem('faction', event.target.value); };
    const updateTier = (event) => { updateItem('tier', event.target.value); };
    const updateStars = (event) => { updateItem('stars', event.target.value); };

    const updateItem = (property, newValue) => { update(type, property, newValue); };

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12} sm={2}>
                <ImageAvatar
                    variant='rounded'
                    classList='hero-skill-avatar'
                    imgSrc={assetsService.getEquipment(heroType, type, equipment.acquired, equipment.tier)}
                />
            </Grid>
            <Grid item xs={12} sm={2}>
                <FormControl
                    className='align-center'
                    component='fieldset'
                >
                    <FormLabel component='legend'>Acquired</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={equipment.acquired} onChange={updateAcquired} />} />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                    <InputLabel id='tier'>Tier</InputLabel>
                    <Select
                        labelId='tier'
                        name='tier'
                        label='Tier'
                        disabled={!equipment.acquired}
                        onChange={updateTier}
                        value={equipment.tier}
                    >
                        {tierOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                    <InputLabel id='stars'>Stars</InputLabel>
                    <Select
                        labelId='stars'
                        name='start'
                        label='Stars'
                        disabled={!equipment.acquired || equipment.tier === 3}
                        onChange={updateStars}
                        value={equipment.stars}
                    >
                        {starOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <InputLabel id='faction'>Faction</InputLabel>
                    <Select
                        labelId='faction'
                        name='faction'
                        label='Faction'
                        disabled={!equipment.acquired || equipment.tier === 3}
                        onChange={updateFaction}
                        value={equipment.faction || 'NONE'}
                    >
                        <MenuItem value='NONE'>None</MenuItem>
                        {factionOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}
