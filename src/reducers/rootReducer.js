import { combineReducers } from 'redux'
import navigationReducer from './navigationReducer'
import manifestReducer from './manifestReducer'


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
    //     return{
    //         ...state, beverages: action.payload

    //     }
    case "delete_item":
        return {
             ...state, beverages: action.payload   
        }
    case "addItem":
        return{
            ...state, beverages: [...state.beverages, action.payload]
        }
    
    default:
        return state
}

}
const rootReducer = combineReducers({userReducer, navigationReducer, manifestReducer})

export default rootReducer