// Dependencies
import axios from 'axios'

/**
 * Get user informations (mocked)
 *
 * @param {string} userId
 * @returns {object}
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
 * Get user activity (mocked)
 *
 * @param {string} userId
 * @returns {object}
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
 * Get user average session (mocked)
 *
 * @param {string} userId
 * @returns {object}
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
 * Get user performance (mocked)
 *
 * @param {string} userId
 * @returns {object}
 */

export const GetMockedUserPerformance = async (userId) => {
    try {
        const res = await axios.get(`http://localhost:3000/mockedData/users/${userId}/performance.json`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}