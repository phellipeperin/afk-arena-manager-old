import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import PageHeader from '../../components/PageHeader/PageHeader';
import HeroEditCategory from '../../components/Hero/Edit/Admin/HeroEditCategory';
import HeroEditImage from '../../components/Hero/Edit/Admin/HeroEditImage';
import HeroEditInfo from '../../components/Hero/Edit/Admin/HeroEditInfo';
import HeroEditSignatureItem from '../../components/Hero/Edit/Admin/HeroEditSignatureItem';
import HeroEditFurniture from '../../components/Hero/Edit/Admin/HeroEditFurniture';
import HeroEditSkills from '../../components/Hero/Edit/Admin/HeroEditSkills';
import HeroEditSkins from '../../components/Hero/Edit/Admin/HeroEditSkins';

import adminHeroService from '../../application/services/adminHeroService';
import feedbackService from '../../application/services/feedbackService';

import { setAdminHeroes } from '../../application/store/modules/hero/actions';

import { addHero, updateHero } from '../../application/api/methods/heroApi';

export default function AdminHeroEditPage() {
    const baseHero = {
        info: { name: '', title: '', background: '', order: '' },
        category: { faction: '', type: '', class: '', role: '' },
        images: { profile: '', banner: '', art: '', bust: '' },
        signatureItem: { name: '', image: '', skillName: '', skillImage: '' },
        furniture: { skillName: '', skillImage: '' },
        skills: { ultimate: { icon: '', name: '' }, second: { icon: '', name: '' }, third: { icon: '', name: '' }, fourth: { icon: '', name: '' } },
        skins: [],
    };

    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isNew] = useState(!id);
    const [hero, setHero] = useState(baseHero);
    const { adminHeroes } = useSelector((state) => state.hero || {});

    useEffect(() => {
        if (id) {
            setHero({ ...baseHero, ...(adminHeroes.find((elem) => elem.id === id) || {}) });
        }
    }, []);

    const updateHeroInfo = (event) => { updateHeroData(event, 'info'); };
    const updateHeroImages = (event) => { updateHeroData(event, 'images'); };
    const updateHeroCategory = (event) => { updateHeroData(event, 'category'); };
    const updateHeroSignatureItem = (event) => { updateHeroData(event, 'signatureItem'); };
    const updateHeroFurniture = (event) => { updateHeroData(event, 'furniture'); };
    const updateHeroSkills = (event) => { updateHeroData(event, 'skills'); };
    const updateHeroSkins = (newSkins) => { setHero({ ...hero, skins: newSkins }); };
    const updateHeroData = (event, property) => { setHero({ ...hero, [property]: { ...hero[property], [event.target.name]: event.target.value } }); };

    const saveOrUpdate = () => {
        if (id) {
            updateHero(id, hero).then(() => {
                const newAdminHeroes = adminHeroes.filter((elem) => elem.id !== id);
                newAdminHeroes.push({ id, ...adminHeroService.checkMissingInfo(hero) });
                dispatch(setAdminHeroes(newAdminHeroes));
                feedbackService.showSuccessMessage('Hero updated successfully!');
                goBack();
            }).catch((error) => {
                feedbackService.showErrorMessage(error);
            });
        } else {
            addHero(hero).then(() => {
                // TODO get the id from firebase and update admin heroes
                feedbackService.showSuccessMessage('Hero saved successfully!');
                goBack();
            }).catch((error) => {
                feedbackService.showErrorMessage(error);
            });
        }
    };

    const goBack = () => {
        history.push('/admin/hero-list');
    };

    return (
        <>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <PageHeader
                        title={isNew ? 'New Hero' : `Edit Hero - ${hero.info.name}`}
                        subtitle={isNew ? 'Create a new hero' : ''}
                    />
                    <Button
                        disableElevation
                        variant='contained'
                        color='secondary'
                        size='large'
                        className='mr-2'
                        onClick={saveOrUpdate}
                    >
                        <CheckCircleOutlinedIcon
                            fontSize='inherit'
                            className='mr-1'
                        />
                        {isNew ? 'Save' : 'Update'}
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
                <Grid item xs={12} sm={6}>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <HeroEditInfo
                                data={hero.info}
                                update={updateHeroInfo}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <HeroEditCategory
                                data={hero.category}
                                update={updateHeroCategory}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <HeroEditImage
                                data={hero.images}
                                update={updateHeroImages}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <HeroEditSkills
                                data={hero.skills}
                                update={updateHeroSkills}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <HeroEditSignatureItem
                                data={hero.signatureItem}
                                update={updateHeroSignatureItem}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <HeroEditFurniture
                                data={hero.furniture}
                                update={updateHeroFurniture}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <HeroEditSkins
                                data={hero.skins}
                                update={updateHeroSkins}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
