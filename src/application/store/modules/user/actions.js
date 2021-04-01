import { SET_USER, SET_USER_ROLES } from './constants';

export function setUser(payload) {
    return {
        type: SET_USER,
        payload,
    };
}

export function setUserRoles(payload) {
    return {
        type: SET_USER_ROLES,
        payload,
    };
}
