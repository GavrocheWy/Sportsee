// Dependencies
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// Components
import UserAverageSessionTooltip from '../Tooltips/UserAverageSessionTooltip'

const UserAverageSessionChart = ({ dataSource }) => {

    return (
        <div className="dashboard-charts__average-session">
            <ResponsiveContainer width="99%" aspect={1}>
                <LineChart data={dataSource} >
                    <XAxis type="category" dataKey="day" tickLine={false} tick={{ fontSize: 14, stroke: 'black' }} />
                    <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
                    <Tooltip content={<UserAverageSessionTooltip />} wrapperStyle={{ outline: "none" }}/>
                    <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="red" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: 'black' }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserAverageSessionChart