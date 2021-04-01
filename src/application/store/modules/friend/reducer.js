import { SET_FRIEND_LIST } from './constants';

const INITIAL_STATE = {
    friendList: {},
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_FRIEND_LIST:
        return { ...state, friendList: action.payload };
    default:
        return state;
    }
}
