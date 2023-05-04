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
// Assets
import CaloriesIcon from '../../assets/icons/icon-calories.svg'
import CarbsIcon from '../../assets/icons/icon-carbs.svg'
import LipidsIcon from '../../assets/icons/icon-lipids.svg'
import ProteinsIcon from '../../assets/icons/icon-proteins.svg'

const DashboardContent = () => {

    const { user } = useContext(UserContext)

    console.log(user)

    return (
        <section className='dashboard-content'>

            {user &&

                <React.Fragment>

                    <div className='dashboard-charts'>
                        <UserActivityChart dataSource={user.activity.sessions} />
                        <UserAverageSessionChart dataSource={user.averageSession.sessions} />
                        <UserPerformanceChart dataSource={user.performance.data} />
                        <UserScoreChart dataSource={user.infos.score} />
                    </div>

                    {user?.infos?.keyData &&
                        <aside className='nutritional-cards'>
                            <NutritionalCard icon={CaloriesIcon} text={`${user.infos.keyData.calorieCount}kCal`} subText={'Calories'} />
                            <NutritionalCard icon={CarbsIcon} text={`${user.infos.keyData.proteinCount}g`} subText={'Proteines'} />
                            <NutritionalCard icon={LipidsIcon} text={`${user.infos.keyData.carbohydrateCount}g`} subText={'Glucides'} />
                            <NutritionalCard icon={ProteinsIcon} text={`${user.infos.keyData.lipidCount}g`} subText={'Lipides'} />
                        </aside>
                    }

                </React.Fragment>

            }


        </section>
    )
}

export default DashboardContent