import React from 'react';
import { Grid, Paper, Tabs, Tab } from '@material-ui/core';

import SubHeader from '../SubHeader/SubHeader';

import './missing-info-grid-item.scss';

export default function MissingInfoGridItem({ title = '', colSize = '6', tabs = [], currentTab = '', updateTabs, children }) {
    return (
        <Grid item xs={12} sm={colSize}>
            <Paper className='py-5 px-3 h-100 missing-info-grid-item'>
                {!!title && <SubHeader noMarginTop text={title} />}
                <Tabs
                    indicatorColor='secondary'
                    textColor='secondary'
                    value={currentTab}
                    onChange={(event, newValue) => updateTabs(newValue)}
                >
                    {tabs.map((elem) => (
                        <Tab
                            key={elem.key}
                            label={elem.label}
                        />
                    ))}
                </Tabs>
                {children}
            </Paper>
        </Grid>
    );
}
