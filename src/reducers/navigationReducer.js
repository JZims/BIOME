const initialState= {
    isLoggedIn: false, 
    isLoggingIn: false
}

const navigationReducer= (state = initialState, action ) => {

    switch(action.type){
 
        case "login":
            return {
                ...state, isLoggedIn: action.payload
        }
        case "logout":
            return {
                ...state, isLoggedIn: action.payload
            }
        case "persist":
            return {
                ...state, isLoggingIn: action.payload
            }
        default:
            return state

    }
}
export default navigationReducer