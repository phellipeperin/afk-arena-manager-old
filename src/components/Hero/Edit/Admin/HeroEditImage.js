import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';

import SubHeader from '../../../SubHeader/SubHeader';
import ImageAvatar from '../../../Avatar/ImageAvatar';

export default function HeroEditImage({ data, update }) {
    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Images'
            />
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={4}>
                    <ImageAvatar
                        classList='hero-profile-avatar large'
                        variant='rounded'
                        imgSrc={data.profile}
                        fallbackText='Profile'
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        label='Profile'
                        name='profile'
                        value={data.profile}
                        onChange={update}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={4}>
                    <ImageAvatar
                        transparentBg
                        classList='hero-bust-avatar'
                        variant='rounded'
                        imgSrc={data.bust}
                        fallbackText='Bust'
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        label='Bust'
                        name='bust'
                        value={data.bust}
                        onChange={update}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={4}>
                    <ImageAvatar
                        transparentBg
                        classList='hero-banner-avatar my-2'
                        variant='rounded'
                        imgSrc={data.banner}
                        fallbackText='Banner'
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        label='Banner'
                        name='banner'
                        value={data.banner}
                        onChange={update}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={4}>
                    <ImageAvatar
                        replace
                        variant='rounded'
                        imgSrc={data.art}
                        fallbackText='Art'
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        label='Art'
                        name='art'
                        value={data.art}
                        onChange={update}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}
