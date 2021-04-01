import React from 'react';
import { Grid } from '@material-ui/core';

import MissingInfoEquipmentBlockDetailedRowItem from './MissingInfoEquipmentBlockDetailedRowItem';

export default function MissingInfoEquipmentBlockDetailedRow({ data = [], equipType = '' }) {
    return (
        <>
            <Grid item xs={3} className='text-align-center'>
                <p className='missing-info--text'>{equipType}</p>
            </Grid>
            <Grid item xs={3} className='text-align-center'>
                <MissingInfoEquipmentBlockDetailedRowItem
                    data={data}
                    equipType={equipType}
                    type='STR'
                />
            </Grid>
            <Grid item xs={3} className='text-align-center'>
                <MissingInfoEquipmentBlockDetailedRowItem
                    data={data}
                    equipType={equipType}
                    type='DEX'
                />
            </Grid>
            <Grid item xs={3} className='text-align-center'>
                <MissingInfoEquipmentBlockDetailedRowItem
                    data={data}
                    equipType={equipType}
                    type='INT'
                />
            </Grid>
        </>
    );
}
