import React from 'react';
import { Grid, Paper } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function CreditsPage() {
    return (
        <Grid
            container
            spacing={2}
            justify='center'
        >
            <Grid item xs={12} className='text-align-center'>
                <PageHeader
                    center
                    title='Credits'
                    subtitle='Who to blame'
                />
            </Grid>
            <Grid item xs={12} sm={4} className='text-align-center'>
                <Paper className='py-8 px-10'>
                    <p className='size-22 font-weight-medium'>Tito, Jeff, Caio</p>
                    <p className='size-16'>For all the help with the system itself and putting info into it!</p>

                    <p className='size-22 font-weight-medium mt-10'>AFK Arena Fandom</p>
                    <p className='size-16'>For providing great assets and info.</p>

                    <p className='size-22 font-weight-medium mt-10'>Lilith</p>
                    <p className='size-16'>For the game development :)</p>
                </Paper>
            </Grid>
        </Grid>
    );
}
