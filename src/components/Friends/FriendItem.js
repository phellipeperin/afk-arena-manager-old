import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import SubHeader from '../SubHeader/SubHeader';

import './friend-item.scss';

export default function FriendItem({ friend = {}, remove }) {
    return (
        <Paper className='px-5 py-5'>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <SubHeader
                        noMarginTop
                        text={friend.gameData.nickname}
                    />
                    <p>{friend.id}</p>
                </Grid>
                <Grid item xs={12} className='text-align-right'>
                    <Button
                        color='primary'
                        onClick={() => remove(friend.id)}
                    >
                        <DeleteIcon
                            fontSize='inherit'
                            className='mr-1'
                        />
                        Remove
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
