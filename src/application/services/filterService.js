import objectService from './objectService';

export default {
    filterAndSortHeroList(heroList, filterState) {
        const text = filterState.text.toLowerCase();
        const filteredList = heroList.filter((hero) => {
            const equalsText = !text || (hero.info.name.toLowerCase().includes(text) || hero.info.title.toLowerCase().includes(text));
            const equalsFaction = !filterState.faction || !filterState.faction.length || filterState.faction.includes(hero.category.faction);
            const equalsType = !filterState.type || !filterState.type.length || filterState.type.includes(hero.category.type);
            const equalsClass = !filterState.class || !filterState.class.length || filterState.class.includes(hero.category.class);
            const equalsRole = !filterState.role || !filterState.role.length || filterState.role.includes(hero.category.role);
            return equalsText && equalsFaction && equalsType && equalsClass && equalsRole;
        });

        filteredList.sort((a, b) => {
            if (!filterState.sort.property || filterState.sort.property === '-') return 0;
            const aValue = objectService.getNestedPropertyValue(a, filterState.sort.property);
            const bValue = objectService.getNestedPropertyValue(b, filterState.sort.property);
            if (aValue < bValue) return filterState.sort.reverse ? 1 : -1;
            if (aValue > bValue) return filterState.sort.reverse ? -1 : 1;
            return 0;
        });

        return filteredList;
    },
};
