// Dependencies
import axios from 'axios'

/**
 * Get user informations
 *
 * @param {string} userId
 * @returns {object}
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
 * Get user activity
 *
 * @param {string} userId
 * @returns {object}
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
 * Get user average session
 *
 * @param {string} userId
 * @returns {object}
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
 * Get user performance
 *
 * @param {string} userId
 * @returns {object}
 */

export const GetUserPerformance = async (userId) => {
    try {
		const res = await axios.get(`http://localhost:3100/user/${userId}/performance`);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
}