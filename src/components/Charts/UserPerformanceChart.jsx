// Dependencies
import React from "react";
import { useState, useEffect } from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import translateKindInFrench from './helpers/translateKindInFrench'

const UserPerformanceChart = ({ dataSource, kindSet }) => {

    const [formatedDataSource, setFormatedDataSource] = useState()

    useEffect(() => {

        if (dataSource?.length && kindSet) {
            const newFormattedDataSource = dataSource.map(source => { return { ...source, kind: translateKindInFrench(kindSet[source.kind]) } })
            setFormatedDataSource(newFormattedDataSource)
        }

    }, [dataSource, kindSet])

    if (formatedDataSource) {
        return (
            <div className="dashboard-charts__performance">
                <ResponsiveContainer width="99%" aspect={1}>
                    <RadarChart fontSize='18' cx='50%' cy='50%' outerRadius='65%' data={formatedDataSource}>
                        <PolarGrid fontSize='18' gridType="polygon" />
                        <PolarAngleAxis fontSize='18' dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                        <Radar fontSize='18' dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default UserPerformanceChart