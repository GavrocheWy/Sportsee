// Dependencies
import axios from 'axios'

/**
 * Get unique user infos (mocked)
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetMockedUserInfos = async (userId) => {
    try {
        const res = await axios.get(`http://localhost:3000/user/${userId}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

/**
 * Get unique user activity (mocked)
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetMockedUserActivity = async (userId) => {
    try {
        const res = await axios.get(`http://localhost:3000/mockedData/users/${userId}/activity.json`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

/**
 * Get unique user average session (mocked)
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetMockedUserAverageSession = async (userId) => {
    try {
        const res = await axios.get(`http://localhost:3000/mockedData/users/${userId}/average-sessions.json`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

/**
 * Get unique user performance (mocked)
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetMockedUserPerformance = async (userId) => {
    try {
        const res = await axios.get(`http://localhost:3000/mockedData/users/${userId}/performance.json`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}