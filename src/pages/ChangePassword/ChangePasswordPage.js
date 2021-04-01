import React, { useState } from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSelector } from 'react-redux';

import feedbackService from '../../application/services/feedbackService';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function ChangePasswordPage() {
    const [newPassword, setNewPassword] = useState('');
    const { user } = useSelector((state) => state.user || {});

    const submit = () => {
        user.updatePassword(newPassword).then(() => {
            feedbackService.showSuccessMessage('Password updated successfully!');
            setNewPassword('');
        }).catch((error) => {
            feedbackService.showErrorMessage(error.message);
        });
    };

    return (
        <Grid
            container
            spacing={2}
            justify='center'
        >
            <Grid item xs={12} className='text-align-center'>
                <PageHeader
                    center
                    title='Change Password'
                />
            </Grid>

            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper className='py-8 px-10'>
                    <TextField
                        fullWidth
                        type='password'
                        variant='outlined'
                        label='New Password'
                        className='mt-2'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Button
                        disableElevation
                        fullWidth
                        variant='contained'
                        color='secondary'
                        size='large'
                        className='mt-4 size-18 py-2 ls-1'
                        onClick={submit}
                    >
                        <LockOutlinedIcon
                            fontSize='inherit'
                            className='mr-2'
                        />
                        Update Password
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}
