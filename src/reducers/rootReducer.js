import { combineReducers } from 'redux'
import  navigationReducer  from './navigationReducer'


let initialState = {
    user: "not logged in"
}


let userReducer = (state = initialState, action) => {

switch(action.type){

    case "user_login": 
        return {
            ...state, user: action.payload
        }
    // case "update_item":
    //     return{

    //     }
    // case "delete_item":
    //     return{

    //     }
    // case "add_item":
    //     return{
            
    //     }
    default:
        return state
}

}
const rootReducer = combineReducers({userReducer, navigationReducer})

export default rootReducer