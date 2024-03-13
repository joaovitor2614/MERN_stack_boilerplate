

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
}

export default (state=initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'LOAD_USER':
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                loading: false
            }
        case 'SAVE_TOKEN':
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:  false,
            }
        case 'AUTH_ERROR':
        case 'LOGOUT':
        localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        
        default:
            return state
        
    }
}