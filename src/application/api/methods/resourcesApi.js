import { getDocumentData } from '../api';

const getRoadMap = async () => getDocumentData('resources', 'roadmap');
const getVersions = async () => getDocumentData('resources', 'versions');

export { getRoadMap, getVersions };
