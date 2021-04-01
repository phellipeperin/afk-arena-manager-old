import React from 'react';
import { Grid } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileBasicData from '../../components/Profile/ProfileBasicData';
import ProfilePlayerData from '../../components/Profile/ProfilePlayerData';

import './profile.scss';

export default function ProfilePage() {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12}>
                <PageHeader title='Profile' />
            </Grid>

            <Grid item xs={12} sm={6}>
                <ProfileBasicData />
            </Grid>

            <Grid item xs={12} sm={6}>
                <ProfilePlayerData />
            </Grid>
        </Grid>
    );
}
