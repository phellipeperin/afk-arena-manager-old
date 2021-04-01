import { getHeroes } from '../api/methods/heroApi';

export default {
    async getAdminHeroes() {
        const heroesData = await getHeroes();
        return heroesData.map((hero) => this.checkMissingInfo(hero));
    },
    checkMissingInfo(hero) {
        const missingInfo = [];
        // Basic Info
        if (!hero.info) missingInfo.push('All Basic Info');
        else {
            if (!hero.info.name) missingInfo.push('Name');
            if (!hero.info.title) missingInfo.push('Title');
            if (!hero.info.order) missingInfo.push('Order');
            if (!hero.info.background) missingInfo.push('Background');
        }
        // Category
        if (!hero.category) missingInfo.push('All Category');
        else {
            if (!hero.category.faction) missingInfo.push('Faction');
            if (!hero.category.type) missingInfo.push('Type');
            if (!hero.category.class) missingInfo.push('Class');
            if (!hero.category.role) missingInfo.push('Role');
        }
        // Images
        if (!hero.images) missingInfo.push('All Images');
        else {
            if (!hero.images.bust) missingInfo.push('Bust Image');
            if (!hero.images.profile) missingInfo.push('Profile Image');
            if (!hero.images.banner) missingInfo.push('Banner Image');
            if (!hero.images.art) missingInfo.push('Art Image');
        }
        // Skills
        if (!hero.skills) missingInfo.push('All Skills');
        else {
            if (!hero.skills.ultimate.name) missingInfo.push('Ultimate Skill Name');
            if (!hero.skills.ultimate.icon) missingInfo.push('Ultimate Skill Image');
            if (!hero.skills.second.name) missingInfo.push('Second Skill Name');
            if (!hero.skills.second.icon) missingInfo.push('Second Skill Image');
            if (!hero.skills.third.name) missingInfo.push('Third Skill Name');
            if (!hero.skills.third.icon) missingInfo.push('Third Skill Image');
            if (!hero.skills.fourth.name) missingInfo.push('Fourth Skill Name');
            if (!hero.skills.fourth.icon) missingInfo.push('Fourth Skill Image');
        }
        // Signature Item
        if (!hero.signatureItem) missingInfo.push('Signature Item');
        else {
            if (!hero.signatureItem.name) missingInfo.push('Signature Item Name');
            if (!hero.signatureItem.image) missingInfo.push('Signature Item Image');
            if (!hero.signatureItem.skillName) missingInfo.push('Signature Item Skill Name');
            if (!hero.signatureItem.skillImage) missingInfo.push('Signature Item Skill Image');
        }
        // Furniture
        if (!hero.furniture) missingInfo.push('Furniture');
        else {
            if (!hero.furniture.skillName) missingInfo.push('Furniture Skill Name');
            if (!hero.furniture.skillImage) missingInfo.push('Furniture Skill Image');
        }
        // Skins
        if (hero.skins && hero.skins.length) {
            hero.skins.forEach((skin, index) => {
                if (!skin.info.name) missingInfo.push(`Skin #${index + 1} Name`);
                if (!skin.images.profile) missingInfo.push(`Skin #${index + 1} Profile Image`);
                if (!skin.images.bust) missingInfo.push(`Skin #${index + 1} Bust Image`);
                if (!skin.images.art) missingInfo.push(`Skin #${index + 1} Art Image`);
            });
        }

        return { ...hero, missingInfo };
    },
};
