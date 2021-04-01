import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

import feedbackService from '../../application/services/feedbackService';

import SubHeader from '../SubHeader/SubHeader';
import ImageAvatar from '../Avatar/ImageAvatar';

export default function ProfileBasicData() {
    const [accountInfo, setAccountInfo] = useState({
        email: '',
        displayName: '',
        photoURL: '',
        userId: '',
    });
    const { user } = useSelector((state) => state.user || {});

    useEffect(() => {
        (user.providerData || []).forEach((profile) => {
            setAccountInfo({
                email: profile.email,
                displayName: profile.displayName || '',
                photoURL: profile.photoURL || '',
                userId: user.uid || '',
            });
        });
    }, [user]);

    const updateAccountInfoField = (field, newValue) => {
        setAccountInfo({ ...accountInfo, [field]: newValue });
    };

    const submitAccountInfo = () => {
        user.updateProfile(accountInfo).then(() => {
            feedbackService.showSuccessMessage('Account info updated successfully!');
        }).catch((error) => {
            feedbackService.showErrorMessage(error.message);
        });
    };

    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Basic Data'
            />
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={4}>
                    <ImageAvatar
                        classList='avatar-picture'
                        imgSrc={accountInfo.photoURL}
                        fallbackText='T'
                    />
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                disabled
                                type='email'
                                label='Email'
                                value={accountInfo.email}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                disabled
                                type='text'
                                label='User ID'
                                value={accountInfo.userId}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type='text'
                                label='Display Name'
                                value={accountInfo.displayName}
                                onChange={(e) => updateAccountInfoField('displayName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type='text'
                                label='Photo URL'
                                value={accountInfo.photoURL}
                                onChange={(e) => updateAccountInfoField('photoURL', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
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
                                Update Account Info
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
