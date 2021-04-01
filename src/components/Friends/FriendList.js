import React from 'react';
import { Grid } from '@material-ui/core';

import SubHeader from '../SubHeader/SubHeader';
import NoResults from '../NoResults/NoResults';

import FriendItem from './FriendItem';

export default function FriendList({ friendList, remove }) {
    return (
        <>
            <SubHeader text='Friends List' />

            <Grid
                container
                spacing={2}
            >
                {friendList.length ? (
                    <>
                        {friendList.map((friend) => (
                            <Grid
                                key={friend.id}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                            >
                                <FriendItem
                                    friend={friend}
                                    remove={remove}
                                />
                            </Grid>
                        ))}
                    </>
                ) : (
                    <Grid item xs={12}>
                        <NoResults />
                    </Grid>
                )}
            </Grid>

        </>
    );
}
