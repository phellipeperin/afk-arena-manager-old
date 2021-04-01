import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Paper } from '@material-ui/core';

import SubHeader from '../../../SubHeader/SubHeader';
import ImageAvatar from '../../../Avatar/ImageAvatar';

import assetsService from '../../../../application/services/assetsService';
import { factionOptionList, typeOptionList, classOptionList, roleOptionList } from '../../../../application/services/infoService';

export default function HeroEditCategory({ data, update }) {
    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Category'
            />
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={3}>
                    <ImageAvatar
                        classList='my-3'
                        imgSrc={assetsService.getHeroFaction(data.faction)}
                        fallbackText='F'
                    />
                    <FormControl fullWidth>
                        <InputLabel id='faction'>Faction</InputLabel>
                        <Select
                            labelId='faction'
                            name='faction'
                            label='Faction'
                            onChange={update}
                            value={data.faction}
                        >
                            {factionOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ImageAvatar
                        classList='my-3'
                        imgSrc={assetsService.getHeroType(data.type)}
                        fallbackText='T'
                    />
                    <FormControl fullWidth>
                        <InputLabel id='type'>Type</InputLabel>
                        <Select
                            labelId='type'
                            name='type'
                            label='Type'
                            onChange={update}
                            value={data.type}
                        >
                            {typeOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ImageAvatar
                        classList='my-3'
                        imgSrc={assetsService.getHeroClass(data.class)}
                        fallbackText='C'
                    />
                    <FormControl fullWidth>
                        <InputLabel id='role'>Class</InputLabel>
                        <Select
                            labelId='class'
                            name='class'
                            label='Class'
                            onChange={update}
                            value={data.class}
                        >
                            {classOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ImageAvatar
                        classList='my-3'
                        imgSrc={assetsService.getHeroRole(data.role)}
                        fallbackText='R'
                    />
                    <FormControl fullWidth>
                        <InputLabel id='role'>Role</InputLabel>
                        <Select
                            labelId='role'
                            name='role'
                            label='Role'
                            onChange={update}
                            value={data.role}
                        >
                            {roleOptionList.map((elem) => <MenuItem key={elem.value} value={elem.value}>{elem.text}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
}
