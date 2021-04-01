import { getPlayer, setPlayer } from '../api/methods/playerApi';

import adminHeroService from './adminHeroService';
import playerHeroService from './playerHeroService';
import friendService from './friendService';

const createBaseConfig = () => ({
    roles: ['PLAYER'],
});

const createBaseApplicationData = () => ({
    guild: {
        id: '',
        name: '',
    },
});

const createBaseGameData = () => ({
    nickname: '',
    playerId: '',
    playerLevel: 0,
    crystalLevel: 0,
});

const createBaseFriends = () => [];

export default {
    async getAppState(user) {
        const appState = {
            user,
            userConfig: {},
            playerHeroes: [],
            adminHeroes: [],
            userFriends: [],
        };
        if (user && user.uid) {
            appState.adminHeroes = await adminHeroService.getAdminHeroes();
            const playerData = await getPlayer(user.uid);
            if (!playerData) {
                const config = createBaseConfig();
                const applicationData = createBaseApplicationData();
                const gameData = createBaseGameData();
                const friends = createBaseFriends();

                const player = { config, applicationData, gameData, friends };
                await setPlayer(user.uid, player);
                appState.userConfig = config;
            } else {
                appState.userConfig = playerData.config;
                appState.userFriends = await friendService.getUserFriends(playerData);
            }
            appState.playerHeroes = await playerHeroService.getPlayerHeroes(user.uid, appState.adminHeroes);
        }
        return appState;
    },
};
