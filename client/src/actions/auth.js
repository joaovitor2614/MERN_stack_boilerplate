import axios from 'axios'
import api from '../utils/api'
import { toast } from 'react-toastify'

export const AUTHENTICATION_TYPE_REGISTER = 'REGISTER'
export const AUTHENTICATION__TYPE_LOGIN = 'LOGIN'

const showToast = (message, type='success') => {
    toast[type](message, {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

// LOAD AND STORE USER INFO
export const loadUser = () => async dispatch => {
    try {
        const res = await api.get('/auth');
        dispatch({
            type: 'LOAD_USER',
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: 'AUTH_ERROR'
        })
        
    }
}
// AUTHENTICATE USER AND STORAGE USER INFO
export const authenticate = (data, authType, navigate) => async dispatch => {

    try {
        const endpoint = authType === AUTHENTICATION_TYPE_REGISTER ? '/users' : 'auth';

        const res = await api.post(endpoint, data);
        const token = res.data
        dispatch({
            type: 'SAVE_TOKEN',
            payload: token
        })
        
        dispatch(loadUser());
        navigate("/")
        const AUTH_TYPE_TOAST = authType.toLowerCase()
        showToast(`✔️  ${AUTH_TYPE_TOAST} efetuado com sucesso`);
        
    } catch(err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => console.log(error))
        }
        dispatch({
            type: 'AUTH_ERROR'
        })
    }
 
}



export const logout = () => dispatch => {
    dispatch({
        type: 'LOGOUT'
    })
    showToast('Logout efetuado com sucesso')
}