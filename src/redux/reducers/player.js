import { ADD_TO_PLAYER } from "../actions";

const initialState = {
    player: []
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PLAYER:
            return {
                ...state,
                player: [action.payload]
            }
        default:
            return state
    }
}

export default playerReducer;