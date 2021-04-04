import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export default function FilterSelect({ value, label = '', property, multiple = false, disabled = false, optionList, colSize, change }) {
    return (
        <Grid item xs={colSize.xs} sm={colSize.sm} md={colSize.md}>
            <FormControl fullWidth>
                <InputLabel id={property}>{label}</InputLabel>
                <Select
                    multiple={multiple}
                    labelId={property}
                    disabled={disabled}
                    name={property}
                    label={label}
                    value={value}
                    onChange={change}
                >
                    {optionList.map((item) => (
                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}
