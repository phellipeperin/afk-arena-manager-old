const getEliteEmblemsByLevel = (level) => {
    if (level === -1) return 0;
    if (level === 0) return 20;
    if (level === 1) return 30;
    if (level === 2) return 40;
    if (level === 3) return 50;
    if (level === 4) return 60;
    if (level === 5) return 75;
    if (level === 6) return 95;
    if (level === 7) return 115;
    if (level === 8) return 140;
    if (level === 9) return 170;
    if (level >= 10) return 220;
    return 0;
};
const getLegendaryEmblemsByLevel = (level) => {
    if (level <= 10) return 0;
    if (level === 11) return 10;
    if (level === 12) return 20;
    if (level === 13) return 35;
    if (level === 14) return 50;
    if (level === 15) return 70;
    if (level === 16) return 95;
    if (level === 17) return 120;
    if (level === 18) return 150;
    if (level === 19) return 190;
    if (level >= 20) return 240;
    return 0;
};
const getMythicEmblemsByLevel = (level) => {
    if (level <= 20) return 0;
    if (level === 21) return 10;
    if (level === 22) return 30;
    if (level === 23) return 50;
    if (level === 24) return 70;
    if (level === 25) return 100;
    if (level === 26) return 130;
    if (level === 27) return 170;
    if (level === 28) return 210;
    if (level === 29) return 250;
    if (level === 30) return 300;
    if (level === 31) return 350;
    if (level === 32) return 400;
    if (level === 33) return 450;
    if (level === 34) return 510;
    if (level === 35) return 580;
    if (level === 36) return 660;
    if (level === 37) return 750;
    if (level === 38) return 870;
    if (level === 39) return 1050;
    if (level === 40) return 1350;
    return 0;
};

export default {
    isSignatureItemAvailable(ascension) {
        return ascension.includes('MYTHIC') || ascension.includes('ASCENDED');
    },
    isFurnitureAvailable(ascension) {
        return ascension.includes('ASCENDED');
    },
    isNormalFaction(faction) {
        return (faction === 'LIGHTBEARER' || faction === 'MAULER' || faction === 'WILDER' || faction === 'GRAVEBORN');
    },
    getTypeOfEquipment() {
        return ['weapon', 'head', 'body', 'feet'];
    },
    getMaxSignatureItemLevel(faction) {
        if (faction === 'CELESTIAL' || faction === 'HYPOGEAN' || faction === 'DIMENSIONAL') return 40;
        return 30;
    },
    getNumberOfEmblems(faction, level) {
        const max = this.getMaxSignatureItemLevel(faction);
        const rightLevel = max < level ? max : level;
        return {
            elite: getEliteEmblemsByLevel(rightLevel),
            legendary: getLegendaryEmblemsByLevel(rightLevel),
            mythic: getMythicEmblemsByLevel(rightLevel),
        };
    },
    getNumberOfCopies(faction, ascension) {
        if (faction === 'DIMENSIONAL') return 0;
        if (faction === 'CELESTIAL' || faction === 'HYPOGEAN') {
            if (ascension === 'NONE') return 0;
            if (ascension === 'ELITE') return 1;
            if (ascension === 'ELITE_PLUS') return 2;
            if (ascension === 'LEGENDARY') return 4;
            if (ascension === 'LEGENDARY_PLUS') return 6;
            if (ascension === 'MYTHIC') return 8;
            if (ascension === 'MYTHIC_PLUS') return 10;
            if (ascension === 'ASCENDED_0') return 14;
            if (ascension === 'ASCENDED_1') return 16;
            if (ascension === 'ASCENDED_2') return 18;
            if (ascension === 'ASCENDED_3') return 20;
            if (ascension === 'ASCENDED_4') return 22;
            if (ascension === 'ASCENDED_5') return 24;
        }
        if (ascension === 'NONE') return 0;
        if (ascension === 'ELITE') return 1;
        if (ascension === 'ELITE_PLUS') return 2;
        if (ascension === 'LEGENDARY') return 2;
        if (ascension === 'LEGENDARY_PLUS') return 4;
        if (ascension === 'MYTHIC') return 4;
        if (ascension === 'MYTHIC_PLUS') return 4;
        if (ascension === 'ASCENDED_0') return 8;
        if (ascension === 'ASCENDED_1') return 10;
        if (ascension === 'ASCENDED_2') return 12;
        if (ascension === 'ASCENDED_3') return 14;
        if (ascension === 'ASCENDED_4') return 16;
        if (ascension === 'ASCENDED_5') return 18;
        return 0;
    },
    getNumberOfElitePlusSac(faction, ascension) {
        if (faction === 'CELESTIAL' || faction === 'HYPOGEAN' || faction === 'DIMENSIONAL') return 0;
        if (ascension === 'NONE') return 0;
        if (ascension === 'ELITE') return 0;
        if (ascension === 'ELITE_PLUS') return 0;
        if (ascension === 'LEGENDARY') return 2;
        if (ascension === 'LEGENDARY_PLUS') return 2;
        if (ascension === 'MYTHIC') return 6;
        if (ascension === 'MYTHIC_PLUS') return 10;
        if (ascension.includes('ASCENDED')) return 10;
        return 0;
    },
};
