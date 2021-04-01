import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

import ImageAvatar from '../../../Avatar/ImageAvatar';

export default function HeroEditSkinItem({ skin, updateInfo, updateImages, remove }) {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12} sm={4} className='text-align-center'>
                <TextField
                    fullWidth
                    label='Name'
                    name='name'
                    value={skin.info.name}
                    onChange={updateInfo}
                />
                <Button
                    className='mt-2'
                    color='secondary'
                    onClick={remove}
                >
                    Remove
                </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={8}>
                        <TextField
                            fullWidth
                            label='Profile'
                            name='profile'
                            value={skin.images.profile}
                            onChange={updateImages}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ImageAvatar
                            variant='rounded'
                            classList='hero-profile-avatar large'
                            imgSrc={skin.images.profile}
                            fallbackText='Profile'
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={8}>
                        <TextField
                            fullWidth
                            label='Bust'
                            name='bust'
                            value={skin.images.bust}
                            onChange={updateImages}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ImageAvatar
                            transparentBg
                            variant='rounded'
                            classList='hero-bust-avatar'
                            imgSrc={skin.images.bust}
                            fallbackText='Bust'
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={8}>
                        <TextField
                            fullWidth
                            label='Art'
                            name='art'
                            value={skin.images.art}
                            onChange={updateImages}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ImageAvatar
                            replace
                            variant='rounded'
                            imgSrc={skin.images.art}
                            fallbackText='Art'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
