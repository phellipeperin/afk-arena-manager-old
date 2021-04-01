import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';
import HeroList from '../../components/Hero/HeroList';

export default function AdminHeroListPage() {
    const history = useHistory();
    const { adminHeroes } = useSelector((state) => state.hero || {});

    const createNew = () => {
        history.push('/admin/hero-add');
    };

    const editHero = (heroID) => {
        history.push(`/admin/hero-edit/${heroID}`);
    };

    return (
        <>
            <PageHeader title='Manage Heroes Database' />
            <Button
                disableElevation
                variant='contained'
                color='secondary'
                size='large'
                onClick={createNew}
            >
                Create New Hero
            </Button>
            <HeroList
                heroList={[adminHeroes]}
                editHero={editHero}
            />
        </>
    );
}
