import React from 'react';
import { Grid, Paper } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function AboutPage() {
    return (
        <Grid
            container
            spacing={2}
            justify='center'
        >
            <Grid item xs={12} className='text-align-center'>
                <PageHeader
                    center
                    title='About'
                    subtitle='Why we did this project'
                />
            </Grid>
            <Grid item xs={12} sm={4} className='text-align-center'>
                <Paper className='py-8 px-10'>
                    <p className='size-18'>This project was released with the intention of better managing the heroes of the game AFK Arena.</p>
                    <p className='size-18'>
                        Me and some friends play this game for some time now, so I decided to put my development knowledge into practice and build this simple system,
                        if you want to check the code, its available&nbsp;
                        <a
                            href='https://github.com/phellipeperin/afk-arena-v2'
                            rel='noreferrer'
                            target='_blank'
                        >
                            here
                        </a>
                    </p>
                    <p className='size-18'>
                        Of course, although I did the whole code by myself, these same friends of mine helped with the colors, layout, finding bugs and filling info
                        all across the system. So a big thanks for them!
                    </p>
                    <p className='size-18'>
                        I hope you enjoy our system and that it may be useful to you. If you have any suggestions, found any problems or just want to say something,
                        please reach me in&nbsp;
                        <a
                            href='mailto:phellipe.perin@gmail.com'
                            rel='noreferrer'
                            target='_blank'
                        >
                            phellipe.perin@gmail.com
                        </a>
                    </p>
                </Paper>
            </Grid>
        </Grid>
    );
}
