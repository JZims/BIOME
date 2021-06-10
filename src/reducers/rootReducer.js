let initialState = {user: "not logged in"}


let rootReducer = (state = initialState, action) => {

switch(action.type){

    case "user_login": 
        return {
            ...state, user: action.payload
        }
    case "update_item":
        return{

        }
    case "delete_item":
        return{

        }
    case "add_item":
        return{
            
        }
    default:
        return state
}



    // return state
}

export default rootReducer