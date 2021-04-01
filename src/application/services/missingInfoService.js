/* eslint-disable max-len */
import heroService from './heroService';

const getEquipmentDetailsNeeded = (equipment) => {
    if (!equipment.acquired) {
        return { amount: 1, stars: 5, stones: { t1: 1, t2: 1 } };
    }
    return {
        amount: 0,
        stars: 5 - equipment.stars,
        stones: {
            t1: equipment.tier < 1 ? 1 : 0,
            t2: equipment.tier < 2 ? 1 : 0,
        },
    };
};

const getEmblemsNeeded = (faction, currentSiLevel, maxSiLevel) => {
    const current = heroService.getNumberOfEmblems(faction, currentSiLevel);
    const desired = heroService.getNumberOfEmblems(faction, maxSiLevel);
    return {
        elite: desired.elite - current.elite,
        legendary: desired.legendary - current.legendary,
        mythic: desired.mythic - current.mythic,
    };
};

const getSacrificesNeeded = (faction, currentAscension, maxAscension) => {
    const current = heroService.getNumberOfElitePlusSac(faction, currentAscension);
    const desired = heroService.getNumberOfElitePlusSac(faction, maxAscension);
    const amount = desired - current;
    return amount < 0 ? 0 : amount;
};

const getMissingCopies = (faction, numberOfCopies, maxAscension) => {
    const desired = heroService.getNumberOfCopies(faction, maxAscension);
    const amount = desired - numberOfCopies;
    return amount < 0 ? 0 : amount;
};

const getDefaultMissingCopiesStruct = (key, label, limit) => ({ key, label, limit, data: { totalMissingCopies: 0, normalMissingCopies: 0, specialMissingCopies: 0, sacrifices: 0, heroes: [] } });
const getDefaultMissingEmblemStruct = (key, label, limit, calcOnlyUnlocked) => ({ key, label, limit, calcOnlyUnlocked, data: { elite: 0, legendary: 0, mythic: 0, factions: { LIGHTBEARER: 0, MAULER: 0, WILDER: 0, GRAVEBORN: 0, CELESTIAL: 0, HYPOGEAN: 0, DIMENSIONAL: 0 } } });
const getDefaultMissingEquipmentStruct = (key, label) => ({ key, label, data: { total: getDefaultMissingEquipmentTypeItemStruct(), types: { DEX: getDefaultMissingEquipmentTypeStruct(), STR: getDefaultMissingEquipmentTypeStruct(), INT: getDefaultMissingEquipmentTypeStruct() } } });
const getDefaultMissingFurnitureStruct = (key, label, limit, calcOnlyUnlocked) => ({ key, label, limit, calcOnlyUnlocked, data: { total: 0, large: 0, small: 0, hanging: 0 } });
const getDefaultMissingEquipmentTypeStruct = () => ({ weapon: getDefaultMissingEquipmentTypeItemStruct(), head: getDefaultMissingEquipmentTypeItemStruct(), body: getDefaultMissingEquipmentTypeItemStruct(), feet: getDefaultMissingEquipmentTypeItemStruct() });
const getDefaultMissingEquipmentTypeItemStruct = () => ({ amount: 0, stars: 0, stones: { t1: 0, t2: 0 } });

export default {
    getAllMissingInfo(heroList) {
        let copies = [getDefaultMissingCopiesStruct('ASCENDED_0', 'Ascended', 'ASCENDED_0'), getDefaultMissingCopiesStruct('ASCENDED_5', 'Ascended 5*', 'ASCENDED_5')];
        let emblems = [getDefaultMissingEmblemStruct('30_ALL', 'Max +30 All', 30, false), getDefaultMissingEmblemStruct('30_UNLOCKED', 'Max +30 Unlocked', 30, true), getDefaultMissingEmblemStruct('40_ALL', 'Max +40 All', 40, false), getDefaultMissingEmblemStruct('40_UNLOCKED', 'Max +40 Unlocked', 40, true)];
        let equipment = [getDefaultMissingEquipmentStruct('ALL', 'All')];
        let furniture = [getDefaultMissingFurnitureStruct('ACQUIRE_ALL', 'Acquire All', 0, false), getDefaultMissingFurnitureStruct('ACQUIRE_UNLOCKED', 'Acquire Unlocked', 0, true), getDefaultMissingFurnitureStruct('MAX_ALL', 'Max All', 3, false), getDefaultMissingFurnitureStruct('MAX_UNLOCKED', 'Max Unlocked', 3, true)];

        const equipTypeList = heroService.getTypeOfEquipment();
        const furnitureTypeList = ['large', 'small', 'hanging'];

        heroList.forEach((hero) => {
            const { faction, type } = hero.category;
            const { ascension, numberOfCopies, signatureItem, equipment: playerEquipment, furniture: playerFurniture } = hero.playerInfo;

            copies = copies.map((copyElem) => {
                const newCopyElem = { ...copyElem };
                const noCopiesMissing = getMissingCopies(faction, numberOfCopies, newCopyElem.key);

                newCopyElem.data.totalMissingCopies += noCopiesMissing;
                if (heroService.isNormalFaction(faction)) {
                    newCopyElem.data.normalMissingCopies += noCopiesMissing;
                    newCopyElem.data.sacrifices += getSacrificesNeeded(faction, ascension, newCopyElem.key);
                } else {
                    newCopyElem.data.specialMissingCopies += noCopiesMissing;
                }
                if (noCopiesMissing) {
                    newCopyElem.data.heroes.push({ hero, amount: noCopiesMissing });
                }

                return newCopyElem;
            });

            emblems = emblems.map((emblemElem) => {
                const newEmblemElem = { ...emblemElem };
                if (!newEmblemElem.calcOnlyUnlocked || heroService.isSignatureItemAvailable(ascension)) {
                    const emblemsNeeded = getEmblemsNeeded(faction, signatureItem, newEmblemElem.limit);
                    newEmblemElem.data.elite += emblemsNeeded.elite;
                    newEmblemElem.data.legendary += emblemsNeeded.legendary;
                    newEmblemElem.data.mythic += emblemsNeeded.mythic;
                    newEmblemElem.data.factions[faction] += emblemsNeeded.mythic;
                }
                return newEmblemElem;
            });

            equipment = equipment.map((equipmentElem) => {
                const newEquipmentElem = { ...equipmentElem };

                equipTypeList.forEach((equipType) => {
                    const missingEquipDetail = getEquipmentDetailsNeeded(playerEquipment[equipType]);
                    newEquipmentElem.data.total.amount += missingEquipDetail.amount;
                    newEquipmentElem.data.total.stars += missingEquipDetail.stars;
                    newEquipmentElem.data.total.stones.t1 += missingEquipDetail.stones.t1;
                    newEquipmentElem.data.total.stones.t2 += missingEquipDetail.stones.t2;

                    newEquipmentElem.data.types[type][equipType].amount += missingEquipDetail.amount;
                    newEquipmentElem.data.types[type][equipType].stars += missingEquipDetail.stars;
                    newEquipmentElem.data.types[type][equipType].stones.t1 += missingEquipDetail.stones.t1;
                    newEquipmentElem.data.types[type][equipType].stones.t2 += missingEquipDetail.stones.t2;
                });

                return newEquipmentElem;
            });

            furniture = furniture.map((furnitureElem) => {
                const newFurnitureElem = { ...furnitureElem };

                if (!furnitureElem.calcOnlyUnlocked || heroService.isFurnitureAvailable(ascension)) {
                    furnitureTypeList.forEach((furnitureType) => {
                        playerFurniture[furnitureType].forEach((elem) => {
                            let amount = 1 + furnitureElem.limit;
                            if (elem.acquired) {
                                const newAmount = furnitureElem.limit - elem.plus;
                                amount = newAmount < 0 ? 0 : newAmount;
                            }

                            newFurnitureElem.data.total += amount;
                            newFurnitureElem.data[furnitureType] += amount;
                        });
                    });
                }

                return newFurnitureElem;
            });
        });

        return {
            copies,
            emblems,
            equipment,
            furniture,
        };
    },
};
