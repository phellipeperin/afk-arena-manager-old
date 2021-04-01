import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import PageHeader from '../../components/PageHeader/PageHeader';
import SubHeader from '../../components/SubHeader/SubHeader';
import Accordion from '../../components/Accordion/Accordion';

import { getRoadMap, getVersions } from '../../application/api/methods/resourcesApi';

export default function RoadMapPage() {
    const [accordionItemList, setAccordionItemList] = useState([]);

    useEffect(() => {
        (async () => {
            const roadMapData = await getRoadMap();
            const versionsData = await getVersions();

            const versionsKeys = Object.keys(versionsData);
            // eslint-disable-next-line no-nested-ternary
            const versions = versionsKeys.map((elem) => versionsData[elem]).sort((a, b) => ((a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0)));

            setAccordionItemList([
                {
                    title: 'Next Steps',
                    component: (
                        <div className='block'>
                            <SubHeader
                                noMarginTop
                                text='High Priority'
                            />
                            {roadMapData.HIGH.map((feat) => getFeatText(feat))}

                            <SubHeader text='Medium Priority' />
                            {roadMapData.MEDIUM.map((feat) => getFeatText(feat))}

                            <SubHeader text='Low Priority' />
                            {roadMapData.LOW.map((feat) => getFeatText(feat))}
                        </div>
                    ),
                },
                ...versions.map((elem) => ({
                    title: `${elem.name} - ${elem.date}`,
                    component: (
                        <div
                            key={elem.name}
                            className='block'
                        >
                            {elem.released.map((feat) => getFeatText(feat))}
                        </div>
                    ),
                    defaultClosed: true,
                })),
            ]);
        })();
    }, []);

    const getFeatText = (text) => (
        <p
            key={text}
            className='size-16'
        >
            -&nbsp;
            {text}
        </p>
    );

    return (
        <Grid
            container
            spacing={2}
            justify='center'
            className='py-4 px-6'
        >
            <Grid item xs={12} className='text-align-center'>
                <PageHeader
                    center
                    title='Road Map'
                    subtitle='What we plan on doing next and what is already done'
                />

            </Grid>
            <Grid item xs={12}>
                <Accordion itemList={accordionItemList} />
            </Grid>
        </Grid>
    );
}
