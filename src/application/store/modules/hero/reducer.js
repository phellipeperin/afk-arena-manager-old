import { SET_ADMIN_HEROES, SET_PLAYER_HEROES } from './constants';

const INITIAL_STATE = {
    adminHeroes: [],
    playerHeroes: {},
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_ADMIN_HEROES:
        return { ...state, adminHeroes: action.payload };
    case SET_PLAYER_HEROES:
        return { ...state, playerHeroes: { ...state.playerHeroes, [action.id]: action.payload } };
    default:
        return state;
    }
}
