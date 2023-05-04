// Components
import NutritionalCard from '../Nutritionals/NutritionalCard'
import UserActivityChart from '../Charts/UserActivityChart'
import UserAverageSessionChart from '../Charts/UserAverageSessionChart'
import UserPerformanceChart from '../Charts/UserPerformanceChart'
import UserScoreChart from '../Charts/UserScoreChart'
// Dependencies
import { useContext } from 'react'
import React from 'react'
import UserContext from '../../context/UserContext'

const DashboardContent = () => {

    const { user } = useContext(UserContext)

    console.log(user)

    return (
        <section>

            {user &&

                <React.Fragment>

                    <div>
                        <UserActivityChart dataSource={user.activity.sessions} />
                        <UserAverageSessionChart dataSource={user.averageSession.sessions} />
                        <UserPerformanceChart dataSource={user.performance.data} />
                        <UserScoreChart dataSource={user.infos.score} />
                    </div>

                    {user?.infos?.keyData &&
                        <aside>
                            <NutritionalCard text={`${user.infos.keyData.calorieCount}kcal`} subText={'Calories'} />
                            <NutritionalCard text={`${user.infos.keyData.proteinCount}g`} subText={'Proteines'} />
                            <NutritionalCard text={`${user.infos.keyData.carbohydrateCount}g`} subText={'Glucides'} />
                            <NutritionalCard text={`${user.infos.keyData.lipidCount}g`} subText={'Lipides'} />
                        </aside>
                    }

                </React.Fragment>

            }


        </section>
    )
}

export default DashboardContent