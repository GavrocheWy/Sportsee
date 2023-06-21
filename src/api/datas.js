// Dependencies
import axios from 'axios'

/**
 * Get user informations
 * @param {string} userId
 * @returns {object}
 */

export const GetUserInfos = async (userId) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`);
		return res.data.data;
	} catch (err) {
		return;
	}
}

/**
 * Get user activity
 * @param {string} userId
 * @returns {object}
 */

export const GetUserActivity = async (userId) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/activity`);
		return res.data.data;
	} catch (err) {
		return;
	}
}

/**
 * Get user average session
 * @param {string} userId
 * @returns {object}
 */

export const GetUserAverageSession = async (userId) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/average-sessions`);
		return res.data.data;
	} catch (err) {
		return;
	}
}

/**
 * Get user performance
 * @param {string} userId
 * @returns {object}
 */

export const GetUserPerformance = async (userId) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/performance`);
		return res.data.data;
	} catch (err) {
		return;
	}
}