// Components
import NutritionalCard from '../Nutritionals/NutritionalCard'
// Dependencies
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const DashboardContent = () => {

    const { user } = useContext(UserContext)

    return (
        <section>

            <div>
                <p>Graph1</p>
                <p>Graph2</p>
                <p>Graph3</p>
                <p>Graph4</p>
            </div>

            {user?.infos?.keyData &&
                <aside>
                    <NutritionalCard text={`${user.infos.keyData.calorieCount}kcal`} subText={'Calories'} />
                    <NutritionalCard text={`${user.infos.keyData.proteinCount}g`} subText={'Proteines'} />
                    <NutritionalCard text={`${user.infos.keyData.carbohydrateCount}g`} subText={'Glucides'} />
                    <NutritionalCard text={`${user.infos.keyData.lipidCount}g`} subText={'Lipides'} />
                </aside>
            }


        </section>
    )
}

export default DashboardContent