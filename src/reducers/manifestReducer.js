const initialState = {
    itemsToChange: [],
    itemCount: 0
    
}

const manifestReducer = (state= initialState, action) => {

    switch (action.type) {

        case "update_item":
            //updates the quantity attribute of the existing item
            return { ...state, itemsToChange: action.payload }
        case "add_new":
             //add new object to the array
            return { ...state, itemsToChange: [...state.itemsToChange, action.payload]}
        default:
            return state
    }
}

export default manifestReducer