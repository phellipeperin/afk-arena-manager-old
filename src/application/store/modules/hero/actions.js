import { SET_ADMIN_HEROES, SET_PLAYER_HEROES } from './constants';

export function setAdminHeroes(payload) {
    return {
        type: SET_ADMIN_HEROES,
        payload,
    };
}

export function setPlayerHeroes(userID, payload) {
    return {
        type: SET_PLAYER_HEROES,
        payload,
        id: userID,
    };
}
