import React from 'react';
import { Grid } from '@material-ui/core';

export default function MissingInfoCopiesBlock({ data = [] }) {
    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Copies and Sacrifices</p>
                <p className='missing-info--text'>
                    <b>{data.totalMissingCopies}</b>
                    &nbsp;copies missing.
                    (
                    <b>{data.normalMissingCopies}</b>
                    &nbsp;normal and&nbsp;
                    <b>{data.specialMissingCopies}</b>
                    &nbsp;celepogean)
                </p>
                <p className='missing-info--text'>
                    You will need&nbsp;
                    <b>{data.sacrifices}</b>
                    &nbsp;elite+ sacrifices. That is&nbsp;
                    <b>{data.sacrifices * 18}</b>
                    &nbsp;rare heroes as sacrifices.
                </p>
            </Grid>
            <Grid item xs={12}>
                <p className='missing-info--subheader'>Heroes Amount</p>
                <Grid
                    container
                    spacing={0}
                >
                    {data.heroes.map((item) => (
                        <Grid key={item.hero.id} item xs={6} sm={4}>
                            <p className='missing-info--content'>
                                -&nbsp;
                                {item.amount}
                                &nbsp;
                                {item.hero.info.name}
                            </p>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
