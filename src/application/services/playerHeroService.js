import { getPlayerHeroes, setPlayerHero } from '../api/methods/playerHeroApi';

// This exists to format old patterns to new one
// That's why we need explicit checks like === true
function formatPlayerHeroData(adminHero, playerHero) {
    function formatPlayerEquipment(equip, heroFaction) {
        const newEquip = { ...equip };
        if (newEquip.faction === undefined || newEquip.faction === false) {
            newEquip.faction = 'NONE';
        }
        if (newEquip.faction === true) {
            newEquip.faction = heroFaction;
        }
        return newEquip;
    }

    const newData = { ...playerHero };
    // Equipment
    newData.equipment.weapon = formatPlayerEquipment(newData.equipment.weapon, adminHero.category.faction);
    newData.equipment.head = formatPlayerEquipment(newData.equipment.head, adminHero.category.faction);
    newData.equipment.body = formatPlayerEquipment(newData.equipment.body, adminHero.category.faction);
    newData.equipment.feet = formatPlayerEquipment(newData.equipment.feet, adminHero.category.faction);

    // Skins
    if (!newData.acquiredSkinList) {
        newData.acquiredSkinList = [];
    }

    // Crystal
    if (newData.onCrystal === undefined) {
        newData.onCrystal = false;
    }

    // Priprity
    if (!newData.priority) {
        newData.priority = 'MEDIUM';
    }

    // Number of Copies
    if (newData.numberOfCopies === undefined) {
        newData.numberOfCopies = 0;
    }

    return newData;
}

function getPlayerHeroBaseStruct(heroId) {
    function getPlayerHeroEquipBaseStruct() { return { acquired: false, stars: 0, tier: 0 }; }
    function getPlayerHeroFurnitureBaseStruct() { return { acquired: false, plus: 0 }; }

    return {
        heroId,
        ascension: 'NONE',
        signatureItem: -1,
        copies: 0,
        priority: 'NORMAL',
        equipment: {
            weapon: getPlayerHeroEquipBaseStruct(),
            head: getPlayerHeroEquipBaseStruct(),
            body: getPlayerHeroEquipBaseStruct(),
            feet: getPlayerHeroEquipBaseStruct(),
        },
        furniture: {
            large: [getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct()],
            small: [getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct()],
            hanging: [getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct()],
        },
        acquiredSkinList: [],
    };
}

function mergeAdminAndPlayerHeroList(adminHeroList, playerHeroList) {
    return adminHeroList.map((adminElem) => {
        const playerElem = formatPlayerHeroData(adminElem, playerHeroList.find((elem) => elem.heroId === adminElem.id));
        return {
            ...adminElem,
            playerInfo: playerElem,
        };
    });
}

export default {
    async getPlayerHeroes(userID, adminHeroList = []) {
        const databasePlayerHeroList = await getPlayerHeroes(userID);
        const playerHeroList = [];

        adminHeroList.forEach(async (adminHero) => {
            const index = databasePlayerHeroList.findIndex((elem) => elem.heroId === adminHero.id);
            if (index === -1) {
                const baseStruct = getPlayerHeroBaseStruct(adminHero.id);
                playerHeroList.push(baseStruct);
                await setPlayerHero(userID, adminHero.id, baseStruct);
            } else {
                playerHeroList.push(databasePlayerHeroList[index]);
            }
        });

        return mergeAdminAndPlayerHeroList(adminHeroList, playerHeroList);
    },
};
