// Dependencies
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const UserAverageSessionChart = ({ dataSource }) => {

    return (
        <React.Fragment>
            <LineChart data={dataSource} width={250} height={150} >
                <XAxis type="category" dataKey="day" tickLine={false} tick={{ fontSize: 14, stroke: 'black' }} />
                <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
                <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="red" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: 'black' }} />
            </LineChart>
        </React.Fragment>
    )
}

export default UserAverageSessionChart