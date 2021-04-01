import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import playerHeroService from '../../application/services/playerHeroService';

import { setPlayerHeroes } from '../../application/store/modules/hero/actions';

import SubHeader from '../SubHeader/SubHeader';

export default function Compare({ active = false, hasBufferGrid = false, setHeroList }) {
    const dispatch = useDispatch();
    const columnSize = hasBufferGrid ? 3 : 4;
    const [selectedFriendList, setSelectedFriendList] = useState(['', '']);
    const { user } = useSelector((state) => state.user || {});
    const { adminHeroes, playerHeroes } = useSelector((state) => state.hero || {});
    const { friendList } = useSelector((state) => state.friend || {});

    useEffect(() => {
        if (user && user.uid) {
            setHeroList([
                playerHeroes[user.uid],
                playerHeroes[selectedFriendList[0]] || [],
                playerHeroes[selectedFriendList[1]] || [],
            ]);
        }
    }, [user, selectedFriendList, playerHeroes]);

    const update = async (index, value) => {
        const newList = JSON.parse(JSON.stringify(selectedFriendList));
        newList[index] = value;
        setSelectedFriendList(newList);

        if (!playerHeroes[value]) {
            const friendHeroes = await playerHeroService.getPlayerHeroes(value, adminHeroes);
            dispatch(setPlayerHeroes(value, friendHeroes));
        }
    };

    if (!active) return null;
    return (
        <Paper
            elevation={0}
            className='px-5 py-5 mb-2'
        >
            <Grid
                container
                spacing={2}
            >
                {hasBufferGrid && <Grid item xs={12} sm={3} />}
                <Grid item xs={12} sm={columnSize}>
                    <SubHeader
                        noMarginTop
                        center
                        text='You'
                    />
                </Grid>
                <Grid item xs={12} sm={columnSize}>
                    <FormControl fullWidth>
                        <InputLabel id='friend1'>Friend 1</InputLabel>
                        <Select
                            labelId='friend1'
                            name='friend1'
                            label='Friend 1'
                            onChange={(e) => update(0, e.target.value)}
                            value={selectedFriendList[0]}
                        >
                            {!!selectedFriendList[0] && (<MenuItem value=''>Unselect</MenuItem>)}
                            {friendList.map((elem) => <MenuItem key={elem.id} value={elem.id}>{elem.gameData.nickname}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={columnSize}>
                    <FormControl fullWidth>
                        <InputLabel id='friend2'>Friend 2</InputLabel>
                        <Select
                            labelId='friend2'
                            name='friend2'
                            label='Friend 2'
                            onChange={(e) => update(1, e.target.value)}
                            value={selectedFriendList[1]}
                        >
                            {!!selectedFriendList[1] && (<MenuItem value=''>Unselect</MenuItem>)}
                            {friendList.map((elem) => <MenuItem key={elem.id} value={elem.id}>{elem.gameData.nickname}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
}
