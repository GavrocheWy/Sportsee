// Dependencies
import React from "react";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import getDayByIndex from './helpers/getDayByIndex'
// Components
import UserAverageSessionTooltip from '../Tooltips/UserAverageSessionTooltip'

const UserAverageSessionChart = ({ dataSource }) => {

    const [formatedDataSource, setFormatedDataSource] = useState()

    useEffect(() => {

        if (dataSource?.length) {
            const newFormattedDataSource = dataSource.map((source, index) => { return { ...source, day: getDayByIndex(source.day) } })
            setFormatedDataSource(newFormattedDataSource)
        }

    }, [dataSource])

    if (formatedDataSource?.length) {
        return (
            <div className="dashboard-charts__average-session">
                <ResponsiveContainer width="99%" aspect={1}>
                    <LineChart data={formatedDataSource} >
                        <XAxis type="category" dataKey="day" tickLine={false} tick={{ fontSize: 14, stroke: 'rgba(255, 255, 255, 0.75)' }} />
                        <YAxis dataKey="sessionLength" domain={['dataMin - 10', 'dataMax + 30']} hide={true} />
                        <Tooltip content={<UserAverageSessionTooltip />} wrapperStyle={{ outline: "none" }} />
                        <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.75)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }} />
                    </LineChart>
                </ResponsiveContainer>
                <p className="dashboard-charts__text--title">Durée moyenne des sessions</p>
            </div>
        )
    }
}

export default UserAverageSessionChart