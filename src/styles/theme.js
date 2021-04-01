/* eslint-disable */
import { createMuiTheme } from '@material-ui/core/styles';
import paletteBuilder from './palette';
import override from './override';

import breakpoints from './assets/base/breakpoints.scss';
import colors from './assets/base/colors.scss';

import './theme.scss';

const themeName = 'AFK Arena Theme';
const palette = paletteBuilder.getPaletteFromColors(colors);

const themeBreakpoints = {
    values: {
        xs: breakpoints.xs,
        sm: breakpoints.sm,
        md: breakpoints.md,
        lg: breakpoints.lg,
        xl: breakpoints.xl,
    },
};

const typography =  {
    "fontFamily": '"Quicksand", sans-serif',
    "fontSize": 12,
}

const zIndex = {
    appBar: 1250,
};

export default createMuiTheme({ themeName, typography, palette, breakpoints, zIndex, override });
