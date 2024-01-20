import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumsReducer from "../reducers/albums";
import tracksReducer from "../reducers/tracks";
import favoritesReducer from "../reducers/favorites";
import searchStatusReducer from "../reducers/searchStatus";
import searchAlbumsReducer from "../reducers/searchAlbums";
import playerReducer from "../reducers/player";

import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}

const bigReducer = combineReducers({
    albums: albumsReducer,
    tracks: tracksReducer,
    favorites: favoritesReducer,
    searchStatus: searchStatusReducer,
    searchAlbums: searchAlbumsReducer,
    player: playerReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)
export default store