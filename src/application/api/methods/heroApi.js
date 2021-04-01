import { getCollectionData, getDocumentData, addDocumentData, setDocumentData } from '../api';

const getHeroes = async () => getCollectionData('heroes');
const getHero = async (id) => getDocumentData('heroes', id);
const addHero = async (id, data) => addDocumentData('heroes', data);
const updateHero = async (id, data) => setDocumentData('heroes', id, data);

export { getHeroes, getHero, addHero, updateHero };
