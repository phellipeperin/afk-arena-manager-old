import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

import feedbackService from '../../application/services/feedbackService';

import { getPlayer, updateGameData } from '../../application/api/methods/playerApi';

import SubHeader from '../SubHeader/SubHeader';

export default function ProfilePlayerData() {
    const [info, setInfo] = useState({
        nickname: '',
        playerId: '',
        playerLevel: '',
        crystalLevel: '',
    });
    const { user } = useSelector((state) => state.user || {});

    useEffect(() => {
        if (user && user.uid) {
            (async () => {
                const player = await getPlayer(user.uid);
                setInfo(player.gameData);
            })();
        }
    }, [user]);

    const updateInfo = (field, newValue) => {
        setInfo({ ...info, [field]: newValue });
    };

    const submitAccountInfo = () => {
        updateGameData(user.uid, info).then(() => {
            feedbackService.showSuccessMessage('Data updated successfully!');
        }).catch((error) => {
            feedbackService.showErrorMessage(error.message);
        });
    };

    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Game Data'
            />
            <Grid
                container
                spacing={2}
                justify='center'
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Nickname'
                        value={info.nickname}
                        onChange={(e) => updateInfo('nickname', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Player ID'
                        value={info.playerId}
                        onChange={(e) => updateInfo('playerId', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Crystal Level'
                        value={info.crystalLevel}
                        onChange={(e) => updateInfo('crystalLevel', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Player Level'
                        value={info.playerLevel}
                        onChange={(e) => updateInfo('playerLevel', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        disableElevation
                        fullWidth
                        variant='contained'
                        color='secondary'
                        size='large'
                        className='mt-4 size-14 py-2 ls-1'
                        onClick={submitAccountInfo}
                    >
                        <CheckCircleOutlinedIcon
                            fontSize='inherit'
                            className='mr-2'
                        />
                        Update Game Data Info
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
