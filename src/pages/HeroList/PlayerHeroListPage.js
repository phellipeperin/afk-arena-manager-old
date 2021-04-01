import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import LocationSearchIcon from '@material-ui/icons/LocationSearchingOutlined';

import PageHeader from '../../components/PageHeader/PageHeader';
import Compare from '../../components/Compare/Compare';
import HeroList from '../../components/Hero/HeroList';

export default function PlayerHeroListPage() {
    const history = useHistory();
    const [onCompare, setOnCompare] = useState(false);
    const [heroList, setHeroList] = useState([[]]);

    const editHero = (heroID) => {
        history.push(`/player/hero-edit/${heroID}`);
    };

    const goToStatistics = () => {
        history.push('/player/statistics');
    };

    const goToMissingInfoPage = () => {
        history.push('/player/missing-info');
    };

    const switchCompare = () => {
        setOnCompare(!onCompare);
    };

    return (
        <>
            <PageHeader title='Hero List' />
            <HeroList
                onPlayerPage
                onCompare={onCompare}
                heroList={heroList}
                editHero={editHero}
                actionButtons={(
                    <>
                        <Button
                            disableElevation
                            variant='contained'
                            color={onCompare ? 'primary' : 'secondary'}
                            className='mt-2 mr-2'
                            onClick={switchCompare}
                        >
                            <CompareArrowsOutlinedIcon
                                fontSize='inherit'
                                className='mr-1'
                            />
                            {onCompare ? 'Cancel Compare' : 'Compare with Friends'}
                        </Button>
                        <Button
                            disableElevation
                            color='secondary'
                            className='mt-2 mr-2'
                            onClick={goToStatistics}
                        >
                            <EqualizerOutlinedIcon
                                fontSize='inherit'
                                className='mr-1'
                            />
                            See Statistics
                        </Button>
                        <Button
                            disableElevation
                            color='secondary'
                            className='mt-2'
                            onClick={goToMissingInfoPage}
                        >
                            <LocationSearchIcon
                                fontSize='inherit'
                                className='mr-1'
                            />
                            See Missing Info
                        </Button>
                    </>
                )}
                extraComponent={(
                    <Compare
                        hasBufferGrid
                        active={onCompare}
                        setHeroList={setHeroList}
                    />
                )}
            />
        </>
    );
}
