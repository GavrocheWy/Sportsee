// Dependencies
import axios from 'axios'

/**
 * Get unique user infos
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetUserInfos = async (userId) => {
    try {
		const res = await axios.get(`http://localhost:3100/user/${userId}`);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
}

/**
 * Get unique user activity
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetUserActivity = async (userId) => {
    try {
		const res = await axios.get(`http://localhost:3100/user/${userId}/activity`);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
}

/**
 * Get unique user average session
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetUserAverageSession = async (userId) => {
    try {
		const res = await axios.get(`http://localhost:3100/user/${userId}/average-sessions`);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
}

/**
 * Get unique user performance
 *
 * @param {string} id User id
 * @returns {object} Data
 */

export const GetUserPerformance = async (userId) => {
    try {
		const res = await axios.get(`http://localhost:3100/user/${userId}/performance`);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
}