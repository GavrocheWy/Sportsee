// Dependencies
import { createContext, useEffect, useContext, useState } from "react";
import ErrorContext from './ErrorContext'
import { GetUserInfos, GetUserActivity, GetUserAverageSession, GetUserPerformance } from '../api/datas'
import { GetMockedUserInfos, GetMockedUserActivity, GetMockedUserAverageSession, GetMockedUserPerformance } from '../api/mockedDatas'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState(localStorage.getItem('userId') || '')
    const {setError} = useContext(ErrorContext)
    const [user, setUser] = useState()

    /** Set "serverIsOn" value to true when the server request is valid, used to test the server before loading
    * @return {Boolean}
    */

    useEffect(() => {

        const getUser = async () => {

            if (!userId) {
                return;
            }

            let userInfos = {}
            let userActiviy = {}
            let userAverageSession = {}
            let userPerformance = {}

            if (process.env.REACT_APP_ENV === 'PROD') {
                userInfos = await GetUserInfos(userId)
                userActiviy = await GetUserActivity(userId)
                userAverageSession = await GetUserAverageSession(userId)
                userPerformance = await GetUserPerformance(userId)
            } else if (process.env.REACT_APP_ENV === 'DEV') {
                userInfos = await GetMockedUserInfos(userId)
                userActiviy = await GetMockedUserActivity(userId)
                userAverageSession = await GetMockedUserAverageSession(userId)
                userPerformance = await GetMockedUserPerformance(userId)
            } else {
                console.log("The REACT_APP_ENV environment variable is not correctly defined.")
                return;
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

                setError("Les données n'ont pas pu être récupérées car le serveur ne répond pas. Veuillez passer la variable d'environnement à \"DEV\" pour utiliser les données mockées et redémarrez l'application.")

            }
        }

        if (userId) {

            getUser()

        }

    }, [userId, setError])

    return (
        <UserContext.Provider value={{ user, setUser, userId, setUserId }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext;