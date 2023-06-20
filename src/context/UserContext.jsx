// Dependencies
import { createContext, useEffect, useState } from "react";
import { GetUserInfos, GetUserActivity, GetUserAverageSession, GetUserPerformance } from '../api/datas'
import { GetMockedUserInfos, GetMockedUserActivity, GetMockedUserAverageSession, GetMockedUserPerformance } from '../api/mockedDatas'
import axios from 'axios'
// import { GetMockedUserInfos, GetMockedUserActivity, GetMockedUserAverageSession, GetMockedUserPerformance } from '../api/mockedDatas'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState(localStorage.getItem('userId') || '')
    const [user, setUser] = useState()
    const [serverIsOn, setServerIsOn] = useState(undefined)

    const checkIfServerIsOn = async (userId) => {
        if (userId) {
            try {
                const res = await axios.get(`http://localhost:3100/user/${userId}`);
                res && setServerIsOn(true)
            } catch (err) {
                setServerIsOn(false)
            }
        }
    }

    checkIfServerIsOn(userId)

    useEffect(() => {

        const getUser = async () => {

            if (serverIsOn === undefined) {
                return;
            }

            let userInfos = {}
            let userActiviy = {}
            let userAverageSession = {}
            let userPerformance = {}

            if (serverIsOn) {
                userInfos = await GetUserInfos(userId)
                userActiviy = await GetUserActivity(userId)
                userAverageSession = await GetUserAverageSession(userId)
                userPerformance = await GetUserPerformance(userId)
            } else {
                userInfos = await GetMockedUserInfos(userId)
                userActiviy = await GetMockedUserActivity(userId)
                userAverageSession = await GetMockedUserAverageSession(userId)
                userPerformance = await GetMockedUserPerformance(userId)
            }

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

    }, [userId, serverIsOn])

    return (
        <UserContext.Provider value={{ user, setUser, userId, setUserId }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;