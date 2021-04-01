import { SET_USER, SET_USER_ROLES } from './constants';

const INITIAL_STATE = {
    user: {},
    userRoles: [],
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_USER:
        return { ...state, user: action.payload };
    case SET_USER_ROLES:
        return { ...state, userRoles: action.payload };
    default:
        return state;
    }
}
