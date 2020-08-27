import types from './auth.types';
import axios from 'axios';

export const userRegister=(data)=>{
    return (dispatch) => {
        dispatch({type:types.REGISTER_START})
        axios.post('/api/register/' , data).then(res=>{
            dispatch({type:types.REGISTER_SUCCESS , payload: res.data})
        }).catch(error=>{
            dispatch({type:types.REGISTER_FAIL , payload: error.response.data})
        })
    }
}

export const userLogin=(data)=>{
    return (dispatch) => {
        dispatch({type:types.LOGIN_START})
        axios.post('/api/login/' , data).then(res=>{
            dispatch({type:types.LOGIN_SUCCESS , payload: res.data})
        }).catch(error=>{
            dispatch({type:types.LOGIN_FAIL , payload: error.response.data})
        })
    }
}
export const userLogout=()=>{
    return (dispatch,getState) => {
        const state = getState();
        const {token} = state.auth;
        const config = {
            headers: {'Authorization': `Token ${token}`},
        };
        dispatch({type:types.LOGOUT_START})
        axios.post('/api/logout/' , null , config).then(res=>{
            dispatch({type:types.LOGOUT_SUCCESS})
        }).catch(error=>{
            dispatch({type:types.LOGOUT_FAIL , payload: error.response.data})
        })
    }
}