import { SET_SEARCH_STATUS } from "../actions"

const initialState = {
    isSearch: false
}

const searchStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_STATUS:
            return {
                ...state,
                isSearch: action.payload
            }
        default:
            return state
    }
}

export default searchStatusReducer