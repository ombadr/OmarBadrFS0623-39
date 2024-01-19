import { GET_ALBUMS } from "../actions";

const initialState = {
    albums: {}
}

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS:
            const { query, albums } = action.payload
            return {
                ...state,
                albums: {
                    ...state.albums,
                    [query]: albums
                }
            }
        default:
            return state
    }
}

export default albumsReducer