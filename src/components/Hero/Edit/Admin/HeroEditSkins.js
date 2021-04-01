import React from 'react';
import { Grid, Button, Paper, Divider } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import SubHeader from '../../../SubHeader/SubHeader';
import NoResults from '../../../NoResults/NoResults';
import HeroEditSkinItem from './HeroEditSkinItem';

export default function HeroEditSkins({ data, update }) {
    const addSkin = () => {
        update([...data, getDefaultSkinStruct()]);
    };

    const updateInfo = (event, index) => {
        const newData = [...data];
        newData[index].info = { ...newData[index].info, [event.target.name]: event.target.value };
        update(newData);
    };

    const updateImages = (event, index) => {
        const newData = [...data];
        newData[index].images = { ...newData[index].images, [event.target.name]: event.target.value };
        update(newData);
    };

    const remove = (index) => {
        update([...data.slice(0, index), ...data.slice(index + 1)]);
    };

    const getDefaultSkinStruct = () => ({
        info: { name: '' },
        images: { profile: '', bust: '', art: '' },
    });

    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Skins'
            />
            {data && data.length ? (
                data.map((skin, index) => (
                    <React.Fragment key={skin.name || index}>
                        {!!index && (<Divider className='my-5' />)}
                        <HeroEditSkinItem
                            skin={skin}
                            updateInfo={(e) => updateInfo(e, index)}
                            updateImages={(e) => updateImages(e, index)}
                            remove={() => remove(index)}
                        />
                    </React.Fragment>
                ))
            ) : (
                <NoResults
                    small
                    title='No Skins'
                    subtitle='You can add one though :)'
                />
            )}
            <Grid
                container
                spacing={2}
                justify='center'
                className='mt-4'
            >
                <Grid item xs={12} sm={4}>
                    <Button
                        fullWidth
                        variant='contained'
                        size='large'
                        color='secondary'
                        onClick={addSkin}
                    >
                        <AddCircleOutlineOutlinedIcon
                            fontSize='inherit'
                            className='mr-1'
                        />
                        Add Skin
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
