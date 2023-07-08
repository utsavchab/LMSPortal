import { 
	STUDENT_LOGIN_REQUEST,
	STUDENT_LOGIN_SUCCESS,
	STUDENT_LOGIN_FAIL,
	STUDENT_LOGOUT,
	STUDENT_REGISTER_REQUEST,
	STUDENT_REGISTER_SUCCESS,
	STUDENT_REGISTER_FAIL } from '../constants/studentConstants.js'

import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: STUDENT_LOGIN_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}
		
		const { data } = await axios.post(`${process.env.REACT_APP_BASE}/api/student/login`, 
			{ email, password, config })

		dispatch({
			type: STUDENT_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('studentInfo', JSON.stringify(data))

	}

	catch (error) {
        if(error.status == 401){
            dispatch ({
                type: STUDENT_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : "Invalid Credentials",
            })

        }else{
            dispatch ({
                type: STUDENT_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : "Student Not Registered",
            })

        }
		
	}
}

export const studentLogout = () => (dispatch) => {
	localStorage.removeItem('studentInfo')
	dispatch({
		type: STUDENT_LOGOUT
	})
}

export const register = (name, email, password, mobile, address) => async (dispatch) => {
	try {
		dispatch({
			type: STUDENT_REGISTER_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		const { data } = await axios.post(`${process.env.REACT_APP_BASE}/api/student/register`, 
			{ name, email, password, mobile, address }, config)

	        dispatch({
			type: STUDENT_REGISTER_SUCCESS,
			payload: data
		})

		dispatch({
			type: STUDENT_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('studentInfo', JSON.stringify(data))

	}

	catch (error) {
		dispatch ({
			type: STUDENT_REGISTER_FAIL,
			payload: error.response && error.response.data.message ? 
			error.response.data.message :
			"Student Already Exists,\n Please use login tab below to LOGIN.",
		})
	}
}