import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, Paper } from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import PageHeader from '../../components/PageHeader/PageHeader';
import SubHeader from '../../components/SubHeader/SubHeader';
import Loading from '../../components/Loading/Loading';

import HeroEditPlayerGeneralData from '../../components/Hero/Edit/Player/GeneralData/HeroEditPlayerGeneralData';
import HeroEditPlayerEquipment from '../../components/Hero/Edit/Player/Equipment/HeroEditPlayerEquipment';
import HeroEditPlayerFurniture from '../../components/Hero/Edit/Player/Furniture/HeroEditPlayerFurniture';
import HeroEditPlayerSkins from '../../components/Hero/Edit/Player/Skins/HeroEditPlayerSkins';

import feedbackService from '../../application/services/feedbackService';
import heroService from '../../application/services/heroService';

import { setPlayerHeroes } from '../../application/store/modules/hero/actions';

import { setPlayerHero } from '../../application/api/methods/playerHeroApi';

export default function PlayerHeroEditPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [hero, setHero] = useState({});
    const { user } = useSelector((state) => state.user || {});
    const { playerHeroes } = useSelector((state) => state.hero || {});

    useEffect(() => {
        if (id && user && user.uid) {
            setHero({ id, ...playerHeroes[user.uid].find((elem) => elem.id === id) });
        }
    }, [user]);

    // Update
    const updateHeroAscension = (event) => { updateHeroPlayerInfo(event.target.value, 'ascension'); };
    const updateHeroSignatureItem = (event) => { updateHeroPlayerInfo(event.target.value, 'signatureItem'); };
    const updateHeroCrystal = (event) => { updateHeroPlayerInfo(event.target.checked, 'onCrystal'); };
    const updateHeroNumberOfCopies = (event) => { updateHeroPlayerInfo(event.target.value, 'numberOfCopies'); };
    const updateHeroPriority = (event) => { updateHeroPlayerInfo(event.target.value, 'priority'); };

    const updateHeroEquipment = (newValue) => { updateHeroPlayerInfo(newValue, 'equipment'); };
    const updateHeroFurniture = (newValue) => { updateHeroPlayerInfo(newValue, 'furniture'); };
    const updateHeroSignatureSkins = (newValue) => { updateHeroPlayerInfo(newValue, 'acquiredSkinList'); };

    const updateHeroPlayerInfo = (newValue, property) => {
        setHero({ ...hero, playerInfo: { ...hero.playerInfo, [property]: newValue } });
    };

    const update = async () => {
        setPlayerHero(user.uid, id, hero.playerInfo).then(() => {
            const newPlayerHeroes = playerHeroes[user.uid].filter((elem) => elem.id !== id);
            newPlayerHeroes.push(hero);
            dispatch(setPlayerHeroes(user.uid, newPlayerHeroes));
            feedbackService.showSuccessMessage('Hero updated successfully!');
            goBack();
        }).catch((error) => {
            feedbackService.showErrorMessage(error);
        });
    };

    // Auxiliar
    const goBack = () => {
        history.push('/player/hero-list');
    };

    if (!hero || !hero.id) return <Loading />;
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <PageHeader
                        title={hero.info.name}
                        subtitle={hero.info.title}
                    />
                    <Button
                        disableElevation
                        variant='contained'
                        color='secondary'
                        size='large'
                        className='mr-2'
                        onClick={update}
                    >
                        <CheckCircleOutlinedIcon
                            fontSize='inherit'
                            className='mr-1'
                        />
                        Update
                    </Button>
                    <Button
                        disableElevation
                        variant='text'
                        onClick={goBack}
                    >
                        <ArrowBackOutlinedIcon
                            fontSize='inherit'
                            className='mr-1'
                        />
                        Back
                    </Button>

                </Grid>

                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12} sm={4}>
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid item xs={12}>
                                    <Paper className='py-5 px-3'>
                                        <SubHeader noMarginTop text='General Data' />
                                        <HeroEditPlayerGeneralData
                                            hero={hero}
                                            updateAscension={updateHeroAscension}
                                            updateSignature={updateHeroSignatureItem}
                                            updateCrystal={updateHeroCrystal}
                                            updateNumberOfCopies={updateHeroNumberOfCopies}
                                            updatePriority={updateHeroPriority}
                                        />
                                    </Paper>
                                </Grid>
                                {hero.skins && !!hero.skins.length && (
                                    <Grid item xs={12}>
                                        <Paper className='py-5 px-3'>
                                            <SubHeader noMarginTop text='Skins' />
                                            <HeroEditPlayerSkins
                                                hero={hero}
                                                update={updateHeroSignatureSkins}
                                            />
                                        </Paper>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid item xs={12}>
                                    <Paper className='py-5 px-3'>
                                        <SubHeader noMarginTop text='Equipment' />
                                        <HeroEditPlayerEquipment
                                            hero={hero}
                                            update={updateHeroEquipment}
                                        />
                                    </Paper>
                                </Grid>
                                {heroService.isFurnitureAvailable(hero.playerInfo.ascension) && (
                                    <Grid item xs={12}>
                                        <Paper className='py-5 px-3'>
                                            <SubHeader noMarginTop text='Furniture' />
                                            <HeroEditPlayerFurniture
                                                hero={hero}
                                                update={updateHeroFurniture}
                                            />
                                        </Paper>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
