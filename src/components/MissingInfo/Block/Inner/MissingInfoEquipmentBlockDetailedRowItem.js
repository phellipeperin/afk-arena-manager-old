import React from 'react';

export default function MissingInfoEquipmentBlockDetailedRowItem({ data = [], type = '', equipType = '' }) {
    return (
        <>
            <p className='missing-info--text'>
                <b>{data.types[type][equipType].amount}</b>
                &nbsp;items.
            </p>
            <p className='missing-info--text'>
                <b>{data.total.stars}</b>
                &nbsp;stars.
            </p>
            <p className='missing-info--text'>
                <b>{data.total.stones.t1}</b>
                &nbsp;T1 stones.
            </p>
            <p className='missing-info--text'>
                <b>{data.total.stones.t2}</b>
                &nbsp;T2 stones.
            </p>
        </>
    );
}
