import { combineReducers } from 'redux'
import  navigationReducer  from './navigationReducer'


let initialState = {
    user: "not logged in", 
    beverages: []
}


let userReducer = (state = initialState, action) => {

switch(action.type){

    case "user_login": 
        return {
            ...state, user: action.payload
        }
    case "populate_items":
        return{
            ...state, beverages: action.payload
        }
    // case "update_item":
    //     return{s

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