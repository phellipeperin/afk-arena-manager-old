import { SET_FRIEND_LIST } from './constants';

export function setFriendList(payload) {
    return {
        type: SET_FRIEND_LIST,
        payload,
    };
}
