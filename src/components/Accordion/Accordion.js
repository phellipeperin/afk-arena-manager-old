import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

import SubHeader from '../SubHeader/SubHeader';

import './accordion.scss';

export default function CustomAccordion({ itemList = [] }) {
    return (
        <>
            {itemList.map((item) => (
                <Accordion
                    key={item.title}
                    defaultExpanded={!item.defaultClosed}
                >
                    <AccordionSummary className='pt-2'>
                        <SubHeader
                            noMarginTop
                            text={item.title}
                        />
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.component}
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}
