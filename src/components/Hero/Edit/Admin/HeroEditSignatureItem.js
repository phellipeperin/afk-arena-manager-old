import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';

import SubHeader from '../../../SubHeader/SubHeader';
import ImageAvatar from '../../../Avatar/ImageAvatar';

export default function HeroEditSignatureItem({ data, update }) {
    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Signature Item'
            />
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={2}>
                    <ImageAvatar
                        transparentBg
                        variant='rounded'
                        classList='hero-signature-avatar'
                        imgSrc={data.image}
                        fallbackText='Signature'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label='Name'
                        name='name'
                        value={data.name}
                        onChange={update}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label='Image'
                        name='image'
                        value={data.image}
                        onChange={update}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={2}>
                    <ImageAvatar
                        transparentBg
                        variant='square'
                        classList='hero-signature-skill-avatar'
                        imgSrc={data.skillImage}
                        fallbackText='Skill'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label='Skill Name'
                        name='skillName'
                        value={data.skillName}
                        onChange={update}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label='Skill Image'
                        name='skillImage'
                        value={data.skillImage}
                        onChange={update}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}
