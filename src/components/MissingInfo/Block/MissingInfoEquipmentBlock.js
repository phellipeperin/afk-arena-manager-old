import React from 'react';
import { Grid } from '@material-ui/core';

import MissingInfoEquipmentBlockDetailedRow from './Inner/MissingInfoEquipmentBlockDetailedRow';

export default function MissingInfoEquipmentBlock({ data = [] }) {
    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Totals</p>
                <p className='missing-info--text'>
                    <b>{data.total.amount}</b>
                    &nbsp;items missing.
                </p>
                <p className='missing-info--text'>
                    <b>{data.total.stars}</b>
                    &nbsp;stars missing.
                </p>
                <p className='missing-info--text'>
                    <b>{data.total.stones.t1}</b>
                    &nbsp;T1 stones missing.
                </p>
                <p className='missing-info--text'>
                    <b>{data.total.stones.t2}</b>
                    &nbsp;T2 stones missing.
                </p>
                <p className='missing-info--text'>
                    <b>{data.total.stones.t3}</b>
                    &nbsp;T3 stones missing.
                </p>
            </Grid>
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Detailed</p>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item xs={3} className='text-align-center' />
                    <Grid item xs={3} className='text-align-center'>
                        <p className='missing-info--text'>Str</p>
                    </Grid>
                    <Grid item xs={3} className='text-align-center'>
                        <p className='missing-info--text'>Dex</p>
                    </Grid>
                    <Grid item xs={3} className='text-align-center'>
                        <p className='missing-info--text'>Int</p>
                    </Grid>
                    <MissingInfoEquipmentBlockDetailedRow
                        data={data}
                        equipType='weapon'
                    />
                    <MissingInfoEquipmentBlockDetailedRow
                        data={data}
                        equipType='head'
                    />
                    <MissingInfoEquipmentBlockDetailedRow
                        data={data}
                        equipType='body'
                    />
                    <MissingInfoEquipmentBlockDetailedRow
                        data={data}
                        equipType='feet'
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}
