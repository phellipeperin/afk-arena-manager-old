import React, { useState } from 'react';
import { Button, Menu, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import SubHeader from '../SubHeader/SubHeader';

import './main-header-menu.scss';

export default function MainHeader({ text, list = [] }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const doItemAction = (action, actionParam) => {
        action(actionParam);
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                color='inherit'
                size='large'
                className='mr-4 fw-600 ls-1'
                onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                {text}
            </Button>
            <Menu
                keepMounted
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                className='main-header-menu'
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
            >
                {list.map((elem, index) => (
                    <div key={elem.label}>
                        {elem.label && (
                            <SubHeader
                                noMarginTop={!index}
                                text={elem.label}
                            />
                        )}
                        <List component='nav'>
                            {elem.itemList.map((item) => (
                                <ListItem
                                    key={item.label}
                                    button
                                    disabled={item.disabled}
                                    onClick={() => doItemAction(item.action, item.actionParam)}
                                >
                                    {item.icon && (
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                    )}
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                ))}
            </Menu>
        </>
    );
}
