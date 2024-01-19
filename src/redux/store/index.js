import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumsReducer from "../reducers/albums";
import tracksReducer from "../reducers/tracks";
import favoritesReducer from "../reducers/favorites";
import searchStatusReducer from "../reducers/searchStatus";
import searchAlbumsReducer from "../reducers/searchAlbums";


const bigReducer = combineReducers({
    albums: albumsReducer,
    tracks: tracksReducer,
    favorites: favoritesReducer,
    searchStatus: searchStatusReducer,
    searchAlbums: searchAlbumsReducer,
})

const store = configureStore({
    reducer: bigReducer,
})

export default store