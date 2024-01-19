import { GET_TRACKS } from "../actions";

const initialState = {
    content: []
}

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default tracksReducer