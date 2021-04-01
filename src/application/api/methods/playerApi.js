import { getDocumentData, setDocumentData, getCollectionDataFilteredById } from '../api';

const getPlayer = async (id) => getDocumentData('players', id);
const setPlayer = async (id, data) => setDocumentData('players', id, data);
const updateGameData = async (id, data) => setDocumentData('players', id, { gameData: data });
const updateFriends = async (id, list) => setDocumentData('players', id, { friends: list });
const loadFriends = async (idList) => getCollectionDataFilteredById('players', idList);

export { getPlayer, setPlayer, updateGameData, updateFriends, loadFriends };
