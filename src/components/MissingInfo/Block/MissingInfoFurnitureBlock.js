import React from 'react';
import { Grid } from '@material-ui/core';

export default function MissingInfoFurnitureBlock({ data = [] }) {
    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Totals</p>
                <p className='missing-info--text'>
                    <b>{data.total}</b>
                    &nbsp;furniture pieces missing.
                </p>
                <p className='missing-info--text'>
                    -&nbsp;
                    <b>{data.large}</b>
                    &nbsp;large furniture pieces missing.
                </p>
                <p className='missing-info--text'>
                    -&nbsp;
                    <b>{data.small}</b>
                    &nbsp;small furniture pieces missing.
                </p>
                <p className='missing-info--text'>
                    -&nbsp;
                    <b>{data.hanging}</b>
                    &nbsp;hanging furniture pieces missing.
                </p>
            </Grid>
        </Grid>
    );
}
