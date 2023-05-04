// Dependencies
import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, ResponsiveContainer } from "recharts";

const UserPerformanceChart = ({ dataSource }) => {

    return (
        <div className="dashboard-charts__performance">
            <ResponsiveContainer width="99%" aspect={1}>
                <RadarChart cx='50%' cy='50%' outerRadius='65%' data={dataSource}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="kind" stroke='black' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserPerformanceChart