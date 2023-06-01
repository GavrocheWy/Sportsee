// Dependencies
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
// Components
import UserActivityTooltip from '../Tooltips/UserActivityTooltip'

/** Return the user activity chart defined by the user activity as data source
 * @param  {array} dataSource
 * @return {JSX}
 */

const UserActivityChart = ({ dataSource }) => {

    const [formatedDataSource, setFormatedDataSource] = useState()

    useEffect(() => {

        if (dataSource?.length) {
            const newFormattedDataSource = dataSource.map((source, index) => { return { ...source, day: index + 1 } })
            setFormatedDataSource(newFormattedDataSource)
        }

    }, [dataSource])

    if (formatedDataSource?.length) {
        return (
            <div className="dashboard-charts__activity">
                <div className="dashboard-charts__activity-head">
                    <p className="dashboard-charts__activity-head--title">Activité quotidienne</p>
                    <div className="dashboard-charts__activity-head--legend">
                        <p>Poids (kg)</p>
                        <p>Calories brûlées (kCal)</p>
                    </div>
                </div>
                <ResponsiveContainer width="99%" aspect={4}>
                    <BarChart data={formatedDataSource} barGap={8} barCategoryGap={1}>
                        <CartesianGrid vertical={false} strokeDasharray="1 1" />
                        <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14, stroke: '#9B9EAC' }} dy={15} />
                        <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14, stroke: '#9B9EAC' }} dx={15} />
                        <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
                        <Tooltip cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }} content={<UserActivityTooltip />} wrapperStyle={{ outline: "none" }} />
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default UserActivityChart

UserActivityChart.propTypes = {
    dataSource: PropTypes.array,
}