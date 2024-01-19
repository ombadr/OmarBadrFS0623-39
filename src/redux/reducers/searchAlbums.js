import { GET_ALBUMS_FROM_SEARCH } from "../actions";

const initialState = {
    searchAlbums: {}
}

const searchAlbumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS_FROM_SEARCH:
            const { search, albums } = action.payload
            return {
                ...state,
                searchAlbums: {
                    ...state.searchAlbums,
                    search: albums
                }
            }
        default:
            return state
    }
}

export default searchAlbumsReducer