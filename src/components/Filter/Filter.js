import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';

import { factionOptionList, typeOptionList, classOptionList, roleOptionList } from '../../application/services/infoService';

import FilterSelect from './FilterSelect';

export default function Filter({ disableSort = false, callback }) {
    const colSize = { xs: 12, sm: 4, md: 2 };
    const possibleSortOptions = [
        { value: 'ORDER_ASC', property: 'info.order', reverse: false, text: 'Game Order' },
        { value: 'NAME_ASC', property: 'info.name', reverse: false, text: 'Name (A-Z)' },
        { value: 'NAME_DESC', property: 'info.name', reverse: true, text: 'Name (Z-A)' },
        { value: 'TITLE_ASC', property: 'info.title', reverse: false, text: 'Title (A-Z)' },
        { value: 'TITLE_DESC', property: 'info.title', reverse: true, text: 'Title (Z-A)' },
        { value: 'FACTION_ASC', property: 'category.faction', reverse: false, text: 'Faction' },
        { value: 'TYPE_ASC', property: 'category.type', reverse: false, text: 'Type' },
        { value: 'CLASS_ASC', property: 'category.class', reverse: false, text: 'Class' },
        { value: 'ROLE_ASC', property: 'category.role', reverse: false, text: 'Role' },
    ];

    const [data, setData] = useState({
        selectedSortValue: '',
        sort: possibleSortOptions[0],
        text: '',
        faction: [],
        type: [],
        class: [],
        role: [],
    });

    useEffect(() => {
        const persistentData = window.localStorage.getItem('search');
        if (persistentData) {
            const convertedData = JSON.parse(persistentData);
            if (!convertedData.sort) {
                [convertedData.sort] = possibleSortOptions;
                convertedData.selectedSortValue = convertedData.sort.value;
            } else {
                convertedData.selectedSortValue = convertedData.sort.value;
            }
            if (typeof convertedData.faction === 'string') convertedData.faction = [];
            if (typeof convertedData.type === 'string') convertedData.type = [];
            if (typeof convertedData.class === 'string') convertedData.class = [];
            if (typeof convertedData.role === 'string') convertedData.role = [];
            setData(convertedData);
        }
    }, []);

    useEffect(() => {
        if (callback) callback(data);
    }, [data]);

    const change = (event) => {
        updateData({ ...data, [event.target.name]: event.target.value });
    };

    const changeSort = (event) => {
        const newSort = possibleSortOptions.find((elem) => elem.value === event.target.value);
        updateData({ ...data, selectedSortValue: event.target.value, sort: newSort });
    };

    const updateData = (newData) => {
        setData(newData);
        window.localStorage.setItem('search', JSON.stringify(newData));
    };

    return (
        <Grid
            container
            spacing={2}
        >
            <FilterSelect
                label='Order By'
                property='orderby'
                disabled={disableSort}
                value={data.selectedSortValue}
                optionList={possibleSortOptions}
                colSize={colSize}
                change={changeSort}
            />
            <Grid item xs={colSize.xs} sm={colSize.sm} md={colSize.md}>
                <TextField
                    fullWidth
                    label='Text'
                    name='text'
                    value={data.text}
                    onChange={change}
                />
            </Grid>
            <FilterSelect
                multiple
                label='Faction'
                property='faction'
                value={data.faction}
                optionList={factionOptionList}
                colSize={colSize}
                change={change}
            />
            <FilterSelect
                multiple
                label='Type'
                property='type'
                value={data.type}
                optionList={typeOptionList}
                colSize={colSize}
                change={change}
            />
            <FilterSelect
                multiple
                label='Class'
                property='class'
                value={data.class}
                optionList={classOptionList}
                colSize={colSize}
                change={change}
            />
            <FilterSelect
                multiple
                label='Role'
                property='role'
                value={data.role}
                optionList={roleOptionList}
                colSize={colSize}
                change={change}
            />
        </Grid>
    );
}
