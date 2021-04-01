import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';

import { factionOptionList, typeOptionList, classOptionList, roleOptionList } from '../../application/services/infoService';

import FilterSelect from './FilterSelect';

export default function Filter({ onlyMainData = false, callback }) {
    const colSize = onlyMainData ? { xs: 12, sm: 6, md: 3 } : { xs: 12, sm: 4, md: 2 };
    const possibleSortOptions = [
        { id: 'ORDER_ASC', property: 'info.order', reverse: false, label: 'Game Order' },
        { id: 'NAME_ASC', property: 'info.name', reverse: false, label: 'Name (A-Z)' },
        { id: 'NAME_DESC', property: 'info.name', reverse: true, label: 'Name (Z-A)' },
        { id: 'TITLE_ASC', property: 'info.title', reverse: false, label: 'Title (A-Z)' },
        { id: 'TITLE_DESC', property: 'info.title', reverse: true, label: 'Title (Z-A)' },
        { id: 'FACTION_ASC', property: 'category.faction', reverse: false, label: 'Faction' },
        { id: 'TYPE_ASC', property: 'category.type', reverse: false, label: 'Type' },
        { id: 'CLASS_ASC', property: 'category.class', reverse: false, label: 'Class' },
        { id: 'ROLE_ASC', property: 'category.role', reverse: false, label: 'Role' },
    ];

    const [data, setData] = useState({
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
            if (!convertedData.sort) [convertedData.sort] = possibleSortOptions;
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
        const newSort = possibleSortOptions.find((elem) => elem.id === event.target.value);
        updateData({ ...data, sort: newSort });
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
            {!onlyMainData && (
                <>
                    <FilterSelect
                        label='Order By'
                        property='orderby'
                        value={data.sort.id}
                        optionList={possibleSortOptions}
                        colSize={colSize}
                        change={changeSort}
                    />
                    <Grid item xs={colSize.xs} sm={colSize.sm} md={colSize.md}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            label='Text'
                            name='text'
                            value={data.text}
                            onChange={change}
                        />
                    </Grid>
                </>
            )}
            <FilterSelect
                label='Faction'
                property='faction'
                value={data.faction}
                optionList={factionOptionList}
                colSize={colSize}
                change={change}
            />
            <FilterSelect
                label='Type'
                property='type'
                value={data.type}
                optionList={typeOptionList}
                colSize={colSize}
                change={change}
            />
            <FilterSelect
                label='Class'
                property='class'
                value={data.class}
                optionList={classOptionList}
                colSize={colSize}
                change={change}
            />
            <FilterSelect
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
