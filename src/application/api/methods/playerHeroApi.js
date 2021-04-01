import { getSubCollectionData, getSubCollectionDocumentData, setSubCollectionDocumentData } from '../api';

const getPlayerHeroes = async (id) => getSubCollectionData('players', id, 'heroes');
const getPlayerHero = async (id, heroId) => getSubCollectionDocumentData('players', id, 'heroes', heroId);
const setPlayerHero = async (id, heroId, data) => setSubCollectionDocumentData('players', id, 'heroes', heroId, data);

export { getPlayerHeroes, getPlayerHero, setPlayerHero };
