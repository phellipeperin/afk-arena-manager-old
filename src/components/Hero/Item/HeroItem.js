import React from 'react';
import { Grid, Paper, Button, Divider, Chip } from '@material-ui/core';
import CreateOutlined from '@material-ui/icons/CreateOutlined';

import ImageAvatar from '../../Avatar/ImageAvatar';
import SubHeader from '../../SubHeader/SubHeader';
import HeroCategory from '../Info/HeroCategory';
import HeroAscension from '../Info/HeroAscension';
import HeroSignatureItem from '../Info/HeroSignatureItem';
import HeroFurniture from '../Info/HeroFurniture';
import HeroEquipment from '../Info/HeroEquipment';

import './hero-item.scss';

export default function HeroItem({ hero = {}, friendOneHero, friendTwoHero, edit, onPlayerPage = false, onCompare = false }) {
    const isPlayerHeroAvailable = (playerInfo) => onPlayerPage && playerInfo && playerInfo.ascension !== 'NONE';

    const getPlayerExtraClasses = () => {
        let classes = '';

        if (hero.playerInfo.ascension === 'NONE') classes += 'not-acquired';

        return classes;
    };

    const basicInfoContainerStruct = () => (
        <div className={`hero-container--info ${onCompare ? 'on-compare' : ''}`}>
            <ImageAvatar
                variant='rounded'
                classList='hero-profile-avatar'
                imgSrc={hero.images.profile}
                fallbackText='Profile'
            />
            <p className='hero-name'>{hero.info.name}</p>
            <p className='hero-title'>{hero.info.title}</p>
            <HeroCategory hero={hero} />
        </div>
    );

    const missingInfoStruct = () => (
        <>
            {(!onPlayerPage && hero.missingInfo && !!hero.missingInfo.length) && (
                <>
                    <SubHeader
                        noMarginTop
                        text='Missing Information'
                    />
                    {hero.missingInfo.map((info) => (
                        <p key={info}>{info}</p>
                    ))}
                    <Divider className='my-2' />
                </>
            )}
        </>
    );

    const playerInfoStruct = (playerInfo) => (
        <>
            {isPlayerHeroAvailable(playerInfo) && (
                <>
                    <Grid
                        container
                        spacing={1}
                    >
                        <Grid item xs={4}>
                            <HeroAscension playerInfo={playerInfo} />
                        </Grid>
                        <Grid item xs={4}>
                            <HeroSignatureItem playerInfo={playerInfo} />
                        </Grid>
                        <Grid item xs={4}>
                            <HeroFurniture playerInfo={playerInfo} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className='my-2'>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <HeroEquipment
                            hero={hero}
                            playerInfo={playerInfo}
                        />
                    </Grid>
                    <Grid item xs={12} className='my-2'>
                        <Divider />
                    </Grid>
                </>
            )}
        </>
    );

    if (onCompare) {
        return (
            <Grid
                container
                spacing={0}
                className='my-2'
            >
                <Grid item xs={12}>
                    <Paper
                        elevation={1}
                        className='py-4 px-4'
                    >
                        <Grid
                            container
                            spacing={1}
                        >
                            <Grid item xs={12} sm={3}>
                                {basicInfoContainerStruct()}
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className='hero-container--status on-compare'>
                                    {playerInfoStruct(hero.playerInfo)}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className='hero-container--status on-compare'>
                                    {friendOneHero && playerInfoStruct(friendOneHero.playerInfo)}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className='hero-container--status on-compare'>
                                    {friendTwoHero && playerInfoStruct(friendTwoHero.playerInfo)}
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

    return (
        <Paper
            elevation={1}
            className={`hero-container ${onPlayerPage && getPlayerExtraClasses()}`}
        >
            {basicInfoContainerStruct()}
            <div className='hero-container--status'>
                {isPlayerHeroAvailable(hero.playerInfo) && (
                    <>
                        {hero.category.faction !== 'DIMENSIONAL' && !hero.playerInfo.onCrystal && (
                            <div className='w-100 text-align-center mb-2'>
                                <Chip
                                    size='small'
                                    label='Not on Crystal'
                                />
                            </div>
                        )}
                    </>
                )}

                {missingInfoStruct()}
                {playerInfoStruct(hero.playerInfo)}

                <div className='w-100 text-align-right'>
                    <Button
                        color='secondary'
                        onClick={() => edit(hero.id)}
                    >
                        <CreateOutlined
                            fontSize='inherit'
                            className='mr-1'
                        />
                        Edit
                    </Button>
                </div>
            </div>
        </Paper>
    );
}
