import React, { useState, useEffect } from 'react';

import filterService from '../../application/services/filterService';

import Filter from '../Filter/Filter';
import SubHeader from '../SubHeader/SubHeader';
import NoResults from '../NoResults/NoResults';

import HeroItem from './Item/HeroItem';

import './hero-list.scss';

export default function HeroList({
    heroList = [],
    onPlayerPage = false,
    onCompare = false,
    editHero,
    actionButtons,
    extraComponent,
}) {
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

    return (
        <>
            <SubHeader text='Filters' />
            <Filter
                key={filterKey}
                onlyMainData
                callback={changeFilter}
            />

            {actionButtons}

            <SubHeader text={`Result (${filteredHeroList[0].length} of ${heroList[0].length})`} />

            {extraComponent}

            {filteredHeroList[0].length ? (
                <div className='hero-list-container'>
                    {filteredHeroList[0].map((hero) => (
                        <HeroItem
                            key={hero.id}
                            hero={hero}
                            friendOneHero={heroList[1] ? heroList[1].find((elem) => elem.id === hero.id) : null}
                            friendTwoHero={heroList[2] ? heroList[2].find((elem) => elem.id === hero.id) : null}
                            edit={editHero}
                            onPlayerPage={onPlayerPage}
                            onCompare={onCompare}

                        />
                    ))}
                </div>
            ) : (
                <NoResults />
            )}
        </>
    );
}
