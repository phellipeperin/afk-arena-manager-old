import React from 'react';
import { Grid } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function NotFoundPage() {
    return (
        <Grid
            container
            spacing={2}
            justify='center'
            className='py-4 px-6'
        >
            <Grid item xs={12} className='text-align-center'>
                <PageHeader
                    center
                    title='404 - Not Found'
                    subtitle='Ops, nothing here'
                />
            </Grid>
        </Grid>
    );
}
