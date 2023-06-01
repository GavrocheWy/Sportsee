// Dependencies
import { createContext, useEffect, useState } from "react";
import { GetUserInfos, GetUserActivity, GetUserAverageSession, GetUserPerformance } from '../api/datas'
// import { GetMockedUserInfos, GetMockedUserActivity, GetMockedUserAverageSession, GetMockedUserPerformance } from '../api/mockedDatas'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState(localStorage.getItem('userId') || '')
    const [user, setUser] = useState()

    useEffect(() => {

        const getUser = async () => {
            const userInfos = await GetUserInfos(userId)
            const userActiviy = await GetUserActivity(userId)
            const userAverageSession = await GetUserAverageSession(userId)
            const userPerformance = await GetUserPerformance(userId)

            if (userInfos && userActiviy && userAverageSession && userPerformance) {

                const newUser = {
                    infos: userInfos,
                    activity: userActiviy,
                    averageSession: userAverageSession,
                    performance: userPerformance
                }

                setUser(newUser)
                localStorage.setItem('userId', userId)

            } else {

                console.log('An error append')

            }
        }

        if (userId) {

            getUser()

        }

    }, [userId])

    return (
        <UserContext.Provider value={{ user, setUser, userId, setUserId }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;