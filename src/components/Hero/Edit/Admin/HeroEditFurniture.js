import React from 'react';
import { Grid, TextField, Paper } from '@material-ui/core';

import SubHeader from '../../../SubHeader/SubHeader';
import ImageAvatar from '../../../Avatar/ImageAvatar';

export default function HeroEditFurniture({ data, update }) {
    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Furniture'
            />
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
