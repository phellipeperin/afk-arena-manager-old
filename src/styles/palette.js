export default {
    getPaletteFromColors(colors) {
        return {
            ...this.getMainColors(colors),
            ...this.getGeneralColors(colors),
            ...this.getStateColors(colors),
        };
    },

    getMainColors(colors) {
        return {
            primary: { main: colors.primary },
            secondary: { main: colors.secondary },
        };
    },

    getGeneralColors(colors) {
        return {
            text: { main: colors.text },
            background: { main: colors.background },
        };
    },

    getStateColors(colors) {
        return {
            success: { main: colors.success },
            info: { main: colors.info },
            warning: { main: colors.warning },
            error: { main: colors.error },
        };
    },
};
