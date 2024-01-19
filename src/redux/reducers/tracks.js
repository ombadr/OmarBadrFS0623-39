import { GET_TRACKS } from "../actions";

const initialState = {
    tracks: []

}

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS:
            console.log('Tracks:', action.payload);
            return {
                ...state,
                tracks: action.payload
            }

        default:
            return state
    }
}

export default tracksReducer