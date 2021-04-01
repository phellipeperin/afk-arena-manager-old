import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import ImageAvatar from '../../../Avatar/ImageAvatar';

export default function HeroEditSkillItem({ skill, update, pos }) {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12} sm={2}>
                <ImageAvatar
                    classList='hero-skill-avatar'
                    imgSrc={skill.icon}
                    fallbackText={pos ? pos + 1 : 'U'}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label={pos ? `Skill #${pos + 1} Name` : 'Ultimate Skill Name'}
                    name='name'
                    value={skill.name}
                    onChange={update}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label={pos ? `Skill #${pos + 1} Image` : 'Ultimate Skill Image'}
                    name='icon'
                    value={skill.icon}
                    onChange={update}
                />
            </Grid>
        </Grid>
    );
}
