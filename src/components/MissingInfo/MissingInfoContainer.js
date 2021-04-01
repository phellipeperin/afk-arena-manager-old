/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import missingInfoService from '../../application/services/missingInfoService';

import MissingInfoGridItem from './MissingInfoGridItem';
import MissingInfoCopiesBlock from './Block/MissingInfoCopiesBlock';
import MissingInfoEmblemsBlock from './Block/MissingInfoEmblemsBlock';
import MissingInfoEquipmentBlock from './Block/MissingInfoEquipmentBlock';
import MissingInfoFurnitureBlock from './Block/MissingInfoFurnitureBlock';

export default function MissingInfoContainer({ onCompare = false, heroList = [] }) {
    const mainColSize = onCompare ? 12 : 6;
    const subColSize = onCompare ? 4 : 12;
    const [stats, setStats] = useState([]);
    const [possibleTabs, setPossibleTabs] = useState({ copies: [], emblems: [], equipment: [], furniture: [] });
    const [selectedTabs, setSelectedTabs] = useState({ copies: 0, emblems: 0, equipment: 0, furniture: 0 });

    useEffect(() => {
        const newStats = [];

        heroList.forEach((list) => {
            if (list && list.length) {
                newStats.push(missingInfoService.getAllMissingInfo(list));
            }
        });

        if (newStats.length) {
            setPossibleTabs({
                copies: newStats[0].copies.map((elem) => ({ key: elem.key, label: elem.label })),
                emblems: newStats[0].emblems.map((elem) => ({ key: elem.key, label: elem.label })),
                equipment: newStats[0].equipment.map((elem) => ({ key: elem.key, label: elem.label })),
                furniture: newStats[0].furniture.map((elem) => ({ key: elem.key, label: elem.label })),
            });
        }

        setStats(newStats);
    }, [heroList]);

    const updateTabs = (key, value) => {
        setSelectedTabs({ ...selectedTabs, [key]: value });
    };

    if (!stats || !stats.length) return null;
    return (
        <Grid
            container
            spacing={2}
            className='mt-4'
        >
            <MissingInfoGridItem
                title='Copies'
                colSize={mainColSize}
                tabs={possibleTabs.copies}
                currentTab={selectedTabs.copies}
                updateTabs={(value) => updateTabs('copies', value)}
            >
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {stats.map((statsItem, index) => (
                        <Grid key={`copies_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <MissingInfoCopiesBlock data={statsItem.copies[selectedTabs.copies].data} />
                        </Grid>
                    ))}
                </Grid>
            </MissingInfoGridItem>
            <MissingInfoGridItem
                title='Equipment'
                colSize={mainColSize}
                tabs={possibleTabs.equipment}
                currentTab={selectedTabs.equipment}
                updateTabs={(value) => updateTabs('equipment', value)}
            >
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {stats.map((statsItem, index) => (
                        <Grid key={`equipment_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <MissingInfoEquipmentBlock data={statsItem.equipment[selectedTabs.equipment].data} />
                        </Grid>
                    ))}
                </Grid>
            </MissingInfoGridItem>
            <MissingInfoGridItem
                title='Emblems'
                colSize={mainColSize}
                tabs={possibleTabs.emblems}
                currentTab={selectedTabs.emblems}
                updateTabs={(value) => updateTabs('emblems', value)}
            >
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {stats.map((statsItem, index) => (
                        <Grid key={`emblems_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <MissingInfoEmblemsBlock data={statsItem.emblems[selectedTabs.emblems].data} />
                        </Grid>
                    ))}
                </Grid>
            </MissingInfoGridItem>
            <MissingInfoGridItem
                title='Furniture'
                colSize={mainColSize}
                tabs={possibleTabs.furniture}
                currentTab={selectedTabs.furniture}
                updateTabs={(value) => updateTabs('furniture', value)}
            >
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {stats.map((statsItem, index) => (
                        <Grid key={`furniture_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <MissingInfoFurnitureBlock data={statsItem.furniture[selectedTabs.furniture].data} />
                        </Grid>
                    ))}
                </Grid>
            </MissingInfoGridItem>
        </Grid>
    );
}
