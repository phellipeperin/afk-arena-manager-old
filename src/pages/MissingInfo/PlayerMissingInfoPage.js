import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';

import filterService from '../../application/services/filterService';

import PageHeader from '../../components/PageHeader/PageHeader';
import SubHeader from '../../components/SubHeader/SubHeader';
import Filter from '../../components/Filter/Filter';
import Compare from '../../components/Compare/Compare';
import MissingInfoContainer from '../../components/MissingInfo/MissingInfoContainer';

export default function PlayerMissingInfoPage() {
    const history = useHistory();
    const [onCompare, setOnCompare] = useState(false);
    const [heroList, setHeroList] = useState([[]]);
    const [filteredHeroList, setFilteredHeroList] = useState([[]]);
    const [filterKey, setFilterKey] = useState(100);

    useEffect(() => {
        setFilterKey(filterKey + 1);
    }, [heroList]);

    const changeFilter = (filterState) => {
        const newFilteredList = [];
        heroList.forEach((list) => {
            newFilteredList.push(filterService.filterAndSortHeroList(list, filterState));
        });
        setFilteredHeroList(newFilteredList);
    };

    const goToHeroesPage = () => {
        history.push('/player/hero-list');
    };

    const goToStatisticsPage = () => {
        history.push('/player/statistics');
    };

    const switchCompare = () => {
        setOnCompare(!onCompare);
    };

    return (
        <>
            <PageHeader title='Player Missing Info' />

            <SubHeader text='Filters' />
            <Filter
                key={filterKey}
                onlyMainData
                callback={changeFilter}
            />
            <div className='mb-2'>
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
                    onClick={goToHeroesPage}
                >
                    <PeopleAltOutlinedIcon
                        fontSize='inherit'
                        className='mr-1'
                    />
                    See Heroes
                </Button>
                <Button
                    disableElevation
                    color='secondary'
                    className='mt-2'
                    onClick={goToStatisticsPage}
                >
                    <EqualizerOutlinedIcon
                        fontSize='inherit'
                        className='mr-1'
                    />
                    See Statistics
                </Button>
            </div>

            <Compare
                active={onCompare}
                setHeroList={setHeroList}
            />

            <MissingInfoContainer
                onCompare={onCompare}
                heroList={filteredHeroList}
            />
        </>
    );
}
