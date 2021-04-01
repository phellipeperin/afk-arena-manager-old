import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export default function StatisticsChartPie({ data = [] }) {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
            innerRadius={0.5}
            padAngle={1.2}
            cornerRadius={3}
            colors={data.map((elem) => elem.color)}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            sliceLabelsSkipAngle={10}
        />
    );
}
