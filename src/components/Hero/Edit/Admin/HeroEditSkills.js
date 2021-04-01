import React from 'react';
import { Paper } from '@material-ui/core';

import SubHeader from '../../../SubHeader/SubHeader';
import HeroEditSkillItem from './HeroEditSkillItem';

export default function HeroEditSkills({ data, update }) {
    const updateSkill = (event, property) => {
        const newData = { ...data[property], [event.target.name]: event.target.value };
        update({ target: { name: property, value: newData } });
    };

    return (
        <Paper className='py-5 px-3'>
            <SubHeader
                noMarginTop
                text='Skills'
            />
            <HeroEditSkillItem
                skill={data.ultimate}
                update={(e) => updateSkill(e, 'ultimate')}
                pos={0}
            />
            <HeroEditSkillItem
                skill={data.second}
                update={(e) => updateSkill(e, 'second')}
                pos={1}
            />
            <HeroEditSkillItem
                skill={data.third}
                update={(e) => updateSkill(e, 'third')}
                pos={2}
            />
            <HeroEditSkillItem
                skill={data.fourth}
                update={(e) => updateSkill(e, 'fourth')}
                pos={3}
            />
        </Paper>
    );
}
