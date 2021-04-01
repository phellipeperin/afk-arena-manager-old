import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button, Paper } from '@material-ui/core';

import { signIn, createUser } from '../../application/api/methods/loginApi';

import feedbackService from '../../application/services/feedbackService';

import PageHeader from '../../components/PageHeader/PageHeader';

export default function AuthPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onCreate, setOnCreate] = useState(false);

    const submit = () => {
        if (onCreate) signUp();
        else login();
    };

    const login = async () => {
        signIn(email, password).then(() => {
            history.push('/player/hero-list');
        }).catch((error) => {
            feedbackService.showErrorMessage(error.message);
        });
    };

    const signUp = async () => {
        createUser(email, password).then(() => {
            feedbackService.showSuccessMessage('Account created successfully!');
            history.push('/player/hero-list');
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
                    title={onCreate ? 'Sign-Up' : 'Login'}
                    subtitle={onCreate ? 'It\'s fast. Really.' : 'Glad to see you here :)'}
                />
            </Grid>
            <Grid item xs={12} sm={4} className='text-align-center'>
                <Paper className='py-8 px-10'>
                    <TextField
                        fullWidth
                        type='email'
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        type='password'
                        label='Password'
                        className='mt-2'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        disableElevation
                        fullWidth
                        variant='contained'
                        color={onCreate ? 'primary' : 'secondary'}
                        size='large'
                        className='mt-4 size-18 py-2 ls-1'
                        onClick={submit}
                    >
                        {onCreate ? 'Sign-Up' : 'Login'}
                    </Button>
                    <Button
                        fullWidth
                        className='mt-2'
                        onClick={() => setOnCreate(!onCreate)}
                    >
                        {!onCreate ? 'Create an Account' : 'Go to Login'}
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}
