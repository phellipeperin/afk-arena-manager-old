import React from 'react';
import { Grid } from '@material-ui/core';
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';

import './no-results.scss';

export default function NoResults({ title = 'No Results', subtitle = 'Maybe if you change the filters?', small = false }) {
    return (
        <Grid
            container
            spacing={2}
            justify='center'
        >
            <Grid item xs={12}>
                <div className='no-results'>
                    <SentimentVeryDissatisfiedOutlinedIcon
                        fontSize='default'
                        className='mb-1'
                    />
                    <h1 className={`${small ? 'size-24' : 'size-36'} fw-200 text-uppercase my-1 mb-0`}>{title}</h1>
                    {subtitle && (<p className={`${small ? 'size-11' : 'size-14'}`}>{subtitle}</p>)}
                </div>
            </Grid>
        </Grid>
    );
}
