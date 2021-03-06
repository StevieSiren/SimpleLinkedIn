import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../utils/setAuthToken';

import axios from 'axios';
import jwt_decode from 'jwt-decode';

// Register the user
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
            .then(res => history.push('/login'))
            .catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
};

// Login and get user token
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            
            localStorage.setItem('jwtToken', token); // localStorage only saves strings
            setAuthToken(token);

            // Decode token to get user data
            const decodedToken = jwt_decode(token);
            dispatch(setCurrentUser(decodedToken));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
        // .catch(err => console.log(err));
};


// Set Logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}


// Logout
export const logoutUser = () => dispatch => {
    // Remove token from localStorage and auth header
    localStorage.removeItem('jwtToken');
    setAuthToken(false);

    dispatch(setCurrentUser({}));

    
}