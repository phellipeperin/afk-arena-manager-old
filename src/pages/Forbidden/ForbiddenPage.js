import React from 'react';
import { Grid } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function ForbiddenPage() {
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
                    title='Forbidden'
                    subtitle="You don't have access to this page"
                />
            </Grid>
        </Grid>
    );
}
