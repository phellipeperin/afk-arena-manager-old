/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import statisticsService from '../../application/services/statisticsService';

import StatisticsChartPie from './Block/StatisticsChartPie';

import StatisticsGridItem from './StatisticsGridItem';

import './statistics.scss';

export default function StatisticsContainer({ onCompare = false, heroList = [] }) {
    const mainColSize = onCompare ? 12 : 6;
    const subColSize = onCompare ? 4 : 12;
    const [ascensionStats, setAscensionStats] = useState([]);
    const [signatureItemStats, setSignatureItemStats] = useState([]);
    const [furnitureStats, setFurnitureStats] = useState([]);
    const [equipmentStats, setEquipmentStats] = useState([]);

    useEffect(() => {
        const newAscensionStats = [];
        const newSignatureItemStats = [];
        const newFurnitureStats = [];
        const newEquipmentStats = [];

        heroList.forEach((list) => {
            if (list && list.length) {
                newAscensionStats.push(statisticsService.getAscensionStats(list));
                newSignatureItemStats.push(statisticsService.getSignatureItemStats(list));
                newFurnitureStats.push(statisticsService.getFurnitureStats(list));
                newEquipmentStats.push(statisticsService.getEquipmentStats(list));
            }
        });

        setAscensionStats(newAscensionStats);
        setSignatureItemStats(newSignatureItemStats);
        setFurnitureStats(newFurnitureStats);
        setEquipmentStats(newEquipmentStats);
    }, [heroList]);

    return (
        <Grid
            container
            spacing={2}
            className='mt-4'
        >
            <StatisticsGridItem title='Ascension' colSize={mainColSize}>
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {ascensionStats.map((stats, index) => (
                        <Grid key={`ascension_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <StatisticsChartPie data={stats} />
                        </Grid>
                    ))}
                </Grid>
            </StatisticsGridItem>
            <StatisticsGridItem title='Signature Item' colSize={mainColSize}>
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {signatureItemStats.map((stats, index) => (
                        <Grid key={`signature_item_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <StatisticsChartPie data={stats} />
                        </Grid>
                    ))}
                </Grid>
            </StatisticsGridItem>
            <StatisticsGridItem title='Furniture' colSize={mainColSize}>
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {furnitureStats.map((stats, index) => (
                        <Grid key={`furniture_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <StatisticsChartPie data={stats} />
                        </Grid>
                    ))}
                </Grid>
            </StatisticsGridItem>
            <StatisticsGridItem title='Equipment' colSize={mainColSize}>
                <Grid
                    container
                    spacing={0}
                    className='h-100'
                >
                    {equipmentStats.map((stats, index) => (
                        <Grid key={`equipment_${index}`} item xs={12} sm={subColSize} className='h-100'>
                            <StatisticsChartPie data={stats} />
                        </Grid>
                    ))}
                </Grid>
            </StatisticsGridItem>
        </Grid>
    );
}
