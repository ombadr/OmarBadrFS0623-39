export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_TRACKS = 'GET_TRACKS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_SEARCH_STATUS = 'SET_SEARCH_STATUS';
export const GET_ALBUMS_FROM_SEARCH = 'GET_ALBUMS_FROM_SEARCH';

const searchUrl = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

export const getAlbumsAction = (query) => {
    return async (dispatch) => {
        try {
            const response = await fetch(searchUrl + query)
            if (response.ok) {
                const { data } = await response.json()
                const firstFourAlbums = data.slice(0, 4)
                dispatch({
                    type: GET_ALBUMS,
                    payload: { query, albums: firstFourAlbums }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAlbumsFromSearchAction = (query) => {
    return async (dispatch) => {
        try {
            let search = 'search'
            const response = await fetch(searchUrl + query)
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_ALBUMS_FROM_SEARCH,
                    payload: { search, albums: data }
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const getTracksAction = (albumId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://api.deezer.com/album/${albumId}/tracks`
            )
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_TRACKS,
                    payload: data,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const addFavoriteAction = (favorite) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const removeFavoriteAction = (favorite) => {
    return {
        type: REMOVE_FAVORITE,
        payload: favorite
    }
}

export const setSearchStatusAction = (status) => {
    return {
        type: SET_SEARCH_STATUS,
        payload: status
    }
}