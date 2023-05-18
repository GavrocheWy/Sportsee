// Dependencies
import React from "react";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from "recharts";
import getDayByIndex from './helpers/getDayByIndex'
// Components
import UserAverageSessionTooltip from '../Tooltips/UserAverageSessionTooltip'
import UserAverageSessionDot from '../Indicators/UserAverageSessionDot'

const UserAverageSessionChart = ({ dataSource }) => {

    const [formatedDataSource, setFormatedDataSource] = useState()

    const insertDataBefore = (datas) => {

        if (!datas) return false

        const firstData = datas[0]
        const followingData = datas[1]

        console.log(datas)

        if (firstData && followingData) {
            let newDataSessionLength = firstData.sessionLength

            if (firstData.sessionLength > followingData.sessionLength) {
                newDataSessionLength += ((firstData.sessionLength - followingData.sessionLength) / 2)
            }

            if (firstData.sessionLength < followingData.sessionLength) {
                newDataSessionLength -= ((followingData.sessionLength - firstData.sessionLength) / 2)
            }

            datas.unshift({day: '', sessionLength: newDataSessionLength})
        }
    }

    const insertDataAfter = (datas) => {

        if (!datas) return false

        const lastData = datas[datas.length - 1]
        const previousData = datas[datas.length - 2]

        console.log('LAST :', lastData)
        console.log('PREV :', previousData)

        if (lastData && previousData) {
            let newDataSessionLength = lastData.sessionLength

            if (lastData.sessionLength > previousData.sessionLength) {
                newDataSessionLength += ((lastData.sessionLength - previousData.sessionLength) / 2)
            }

            if (lastData.sessionLength < previousData.sessionLength) {
                newDataSessionLength -= ((previousData.sessionLength - lastData.sessionLength) / 2)
            }

            datas.push({day: '', sessionLength: newDataSessionLength})
        }

    }

    useEffect(() => {

        if (dataSource?.length) {
            const newFormattedDataSource = dataSource.map((source, index) => { return { ...source, day: getDayByIndex(source.day) } })
            insertDataBefore(newFormattedDataSource)
            insertDataAfter(newFormattedDataSource)
            setFormatedDataSource(newFormattedDataSource)
        }

    }, [dataSource])

    if (formatedDataSource?.length) {
        return (
            <div className="dashboard-charts__average-session">
                <ResponsiveContainer width="99%" aspect={1}>
                    <LineChart data={formatedDataSource} >
                        <defs>
                            <linearGradient id="colorUv">
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <XAxis tickMargin={5} type="category" padding={{ left: -20, right: -20 }} allowDataOverflow={true} interval="preserveStartEnd" dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 16, fill: 'rgba(255, 255, 255, 0.5)' }} />
                        <YAxis className="days" dataKey="sessionLength" domain={['dataMin - 15', 'dataMax + 20']} hide={true} />
                        <Tooltip content={<UserAverageSessionTooltip />} wrapperStyle={{ outline: "none" }} cursor={false} />
                        <Line type="natural" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={3} dot={false} activeDot={<UserAverageSessionDot />} />
                        <ReferenceArea />
                    </LineChart>
                </ResponsiveContainer>
                <p className="dashboard-charts__text--title">Durée moyenne des sessions</p>
            </div>
        )
    }
}

export default UserAverageSessionChart