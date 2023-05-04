// Dependencies
import React from "react";
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const UserScoreChart = ({ dataSource }) => {

    const [scoreData, setScoreData] = useState([])

    useEffect(() => {

        if (dataSource) {
            setScoreData([
                { value: dataSource, color: 'red' },
                { value: (1 - dataSource), color: 'white' }
            ])
        }

    }, [dataSource])

    return (
        scoreData?.length &&
        <div className="dashboard-charts__score">
            <ResponsiveContainer width="99%" aspect={1}>
                <PieChart>
                    <Pie data={scoreData} dataKey="value" innerRadius={85} outerRadius={100} startAngle={90} endAngle={450}>
                        {scoreData.map((entry, index) => (
                            <Cell key={`cell-${index}`} cornerRadius={10} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserScoreChart