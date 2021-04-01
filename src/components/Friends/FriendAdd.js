import React, { useState } from 'react';
import { Grid, TextField, Paper, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import SubHeader from '../SubHeader/SubHeader';

export default function FriendAdd({ add }) {
    const [friendID, setFriendID] = useState('');

    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Add Friend'
            />
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Friend ID'
                        value={friendID}
                        onChange={(e) => setFriendID(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        disableElevation
                        fullWidth
                        disabled={!friendID}
                        variant='contained'
                        color='secondary'
                        size='large'
                        onClick={() => add(friendID)}
                    >
                        <AddIcon
                            fontSize='inherit'
                            className='mr-2'
                        />
                        Add Friend
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
