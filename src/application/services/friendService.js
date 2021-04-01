import { loadFriends } from '../api/methods/playerApi';

export default {
    async getUserFriends(playerData) {
        const { friends } = playerData;
        if (friends && friends.length) {
            return loadFriends(friends);
        }
        return [];
    },
};
