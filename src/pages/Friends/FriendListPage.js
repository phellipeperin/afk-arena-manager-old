import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getPlayer, updateFriends } from '../../application/api/methods/playerApi';

import feedbackService from '../../application/services/feedbackService';

import { setFriendList } from '../../application/store/modules/friend/actions';

import PageHeader from '../../components/PageHeader/PageHeader';

import FriendAdd from '../../components/Friends/FriendAdd';
import FriendList from '../../components/Friends/FriendList';

export default function FriendListPage() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user || {});
    const { friendList } = useSelector((state) => state.friend || []);

    const add = async (id) => {
        if (friendList.findIndex((elem) => elem.id === id) !== -1) {
            feedbackService.showErrorMessage('Friend already added.');
            return;
        }
        const newFriend = await getPlayer(id);
        if (!newFriend) {
            feedbackService.showErrorMessage('User not found, please check the ID.');
            return;
        }

        await updateFriendList([...friendList, { id, ...newFriend }]);
        feedbackService.showSuccessMessage('Friend added successfully.');
    };

    const remove = async (id) => {
        if (friendList.findIndex((elem) => elem.id === id) === -1) {
            feedbackService.showErrorMessage('Friend not added.');
            return;
        }

        await updateFriendList(friendList.filter((elem) => elem.id !== id));
        feedbackService.showSuccessMessage('Friend removed successfully.');
    };

    const updateFriendList = async (newList) => {
        const newFriendIDList = newList.map((elem) => elem.id);
        await updateFriends(user.uid, newFriendIDList);

        dispatch(setFriendList(newList));
    };

    return (
        <>
            <PageHeader
                center
                title='Friends'
            />

            <Grid
                container
                spacing={2}
                justify='center'
            >
                <Grid item xs={12} sm={4}>
                    <FriendAdd add={add} />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <FriendList
                        friendList={friendList}
                        remove={remove}
                    />
                </Grid>
            </Grid>
        </>
    );
}
