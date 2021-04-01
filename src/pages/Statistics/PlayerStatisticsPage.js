import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import LocationSearchIcon from '@material-ui/icons/LocationSearchingOutlined';

import filterService from '../../application/services/filterService';

import PageHeader from '../../components/PageHeader/PageHeader';
import SubHeader from '../../components/SubHeader/SubHeader';
import Filter from '../../components/Filter/Filter';
import Compare from '../../components/Compare/Compare';
import StatisticsContainer from '../../components/Statistics/StatisticsContainer';

export default function PlayerStatisticsPage() {
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

    const goToMissingInfoPage = () => {
        history.push('/player/missing-info');
    };

    const switchCompare = () => {
        setOnCompare(!onCompare);
    };

    return (
        <>
            <PageHeader title='Player Statistics' />

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
                    onClick={goToMissingInfoPage}
                >
                    <LocationSearchIcon
                        fontSize='inherit'
                        className='mr-1'
                    />
                    See Missing Info
                </Button>
            </div>

            <Compare
                active={onCompare}
                setHeroList={setHeroList}
            />

            <StatisticsContainer
                onCompare={onCompare}
                heroList={filteredHeroList}
            />
        </>
    );
}
