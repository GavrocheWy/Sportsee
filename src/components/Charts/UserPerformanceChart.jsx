// Dependencies
import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from "recharts";

const UserPerformanceChart = ({ dataSource }) => {

    return (
        <RadarChart width={250} height={150} cx='50%' cy='50%' outerRadius='65%' data={dataSource}>
            <PolarGrid gridType="polygon" />
            <PolarAngleAxis dataKey="kind" stroke='black' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
            <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
        </RadarChart>
    )
}

export default UserPerformanceChart