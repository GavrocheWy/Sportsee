// Dependencies
import React from "react";
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

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
        <PieChart width={250} height={250}>
            <Pie data={scoreData} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90} endAngle={450}>
                {scoreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} cornerRadius={10} fill={entry.color} />
                ))}
            </Pie>
        </PieChart>
    )
}

export default UserScoreChart