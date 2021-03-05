const initState = {
    authError : null
}


const AuthReducer = (state= initState, action) => {
    switch(action.type) {
        case 'LOG_IN_SUCCESS' :
            console.log('Log In Success');
            return {
                ...state,
                authError : null
            }
        case 'LOG_IN_ERROR' :
            console.log('Log In error');
            return {
                ...state,
                authError : 'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign Out success');
            return{
                ...state
            }
        case 'SIGNUP_SUCCESS' :
            console.log('sign up successfuly');
            return{
                ...state,
                authError : null
            }
        case 'SIGNUP_ERROR' : 
        console.log('sign up failed');
        return {
            ...state,
            authError : action.err.message
        }
        
        default : return state
    }
    
    
}

export default AuthReducer