import React from 'react';

import ChartBar from './ChartBar';

const Chart=(props)=>{
    return (
        <div className="chart">
        <ChartBar></ChartBar>
        <ChartBar></ChartBar>
        <ChartBar></ChartBar>
        <ChartBar></ChartBar>
        <ChartBar></ChartBar>
        </div>
    );
}

export default Chart;