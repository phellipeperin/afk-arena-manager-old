import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';

import SubHeader from '../../../SubHeader/SubHeader';

export default function HeroEditInfo({ data, update }) {
    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Basic Data'
            />
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label='Name'
                        name='name'
                        value={data.name}
                        onChange={update}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label='Title'
                        name='title'
                        value={data.title}
                        onChange={update}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label='Order'
                        name='order'
                        value={data.order}
                        onChange={update}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows='10'
                        rowsMax='10'
                        label='Background'
                        name='background'
                        value={data.background}
                        onChange={update}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}
