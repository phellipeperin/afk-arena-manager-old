import React from 'react';
import { Grid, Paper } from '@material-ui/core';

import SubHeader from '../SubHeader/SubHeader';

import './statistics.scss';

export default function StatisticsGridItem({ title = '', colSize = '6', children }) {
    return (
        <Grid item xs={12} sm={colSize} className='chart-container'>
            <Paper className='py-5 px-3 h-100'>
                {!!title && <SubHeader noMarginTop text={title} />}
                {children}
            </Paper>
        </Grid>
    );
}
