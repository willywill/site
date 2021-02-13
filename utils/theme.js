import flow from 'lodash/fp/flow';
import split from 'lodash/fp/split';
import map from 'lodash/fp/map';
import replace from 'lodash/fp/replace';

/**
 * Colors - Primary, Secondary, Success, Danger, Warning, Info, Light, Dark
 */
export const PRIMARY_COLOR = 'hsl(214, 100%, 57%)';
export const PRIMARY_COLOR_TRANSLUCENT = 'hsla(214, 100%, 57%, 0.4)';
export const SECONDARY_COLOR = 'hsl(230, 70%, 97%)';
export const PRIMARY_HOVER_COLOR = '#1b5eb6'; // TODO: Convert to HSL
export const HIGHLIGHT_COLOR = 'rgba(27, 94, 182, 0.2)'; // TODO: Convert to HSLA
export const SUBTITLE_COLOR = '#71879a'; // TODO: Convert to HSLA
export const DARK_TITLE_COLOR = '#425269'; // TODO: Convert to HSL
export const EXTRA_DARK = '#222b38';

// Extras, not validated
export const SUCCESS_COLOR = 'hsl(143, 73%, 58%)';
export const DANGER_COLOR = 'hsl(24, 73%, 58%)';
export const WARNING_COLOR = 'hsl(40, 73%, 58%)';
export const INFO_COLOR = 'hsl(215, 71%, 51%)';
export const LIGHT_COLOR = 'hsl(198, 17%, 70%)';
export const DARK_COLOR = 'hsl(230, 27%, 17%)';
export const WHITE = 'hsl(0, 0%, 100%)';

/**
 * Fonts
 */
export const PRIMARY_FONT = "'Roboto', sans-serif";
export const SECONDARY_FONT = "'Rubik', sans-serif";

/**
 * Font Sizes
 */
export const SMALL_SIZE = '0.75em';
export const MEDIUM_SIZE = '1.75em';
export const LARGE_SIZE = '2.75em';
export const EXTRA_LARGE_SIZE = '3.25em';

/**
 * Utils
 */
export const easingFunction = 'cubic-bezier(0.22, 0.61, 0.36, 1)';

const splitHSL = flow(
  split(', '),
  map(replace(/hsl|\(|\)|%/g, '')),
  map(Number),
);

export const shiftHSL = ({ hue = 0, saturation = 0, lightness = 0 }, hsl) => {
  const [h, s, l] = splitHSL(hsl);
  return `hsl(${h + hue}, ${s + saturation}%, ${l + lightness}%)`;
};

export const breakpoints = {
  mobileSmall: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  desktopSmall: '1024px', // SD
  desktopMedium: '1650px', // HD+
  desktopLarge: '1920px', // FHD
  desktopExtraLarge: '2560px', // QHD
  desktop4K: '3300px',
};

// Allows tapping into the specific breakpoints and modifying the values
export const mediaQuery = (defaultValue, {
  mobileSmall,
  mobileLarge,
  tablet,
  desktopSmall,
  desktopMedium,
  desktopLarge,
  desktopExtraLarge,
  desktop4K,
}) => ([
  defaultValue, // Offset?
  mobileSmall || defaultValue,
  mobileLarge || defaultValue,
  tablet || defaultValue,
  desktopSmall || defaultValue,
  desktopMedium || defaultValue,
  desktopLarge || defaultValue,
  desktopExtraLarge || defaultValue,
  desktop4K || defaultValue,
]);

const indexByBreakpoint = {
  mobileSmall: 1,
  mobileLarge: 2,
  tablet: 3,
  desktopSmall: 4, // SD
  desktopMedium: 5, // HD+
  desktopLarge: 6, // FHD
  desktopExtraLarge: 7, // QHD
  desktop4K: 8,
};

// Same as standard method, but takes a single value and makes everything less than
// that breakpoint the same value passed
export const mediaQueryLessThan = (defaultValue, breakpointKey, lessThanValue) => {
  const lessThanIndex = indexByBreakpoint[breakpointKey];

  const allDefaults = [
    defaultValue, // Offset?
    defaultValue,
    defaultValue,
    defaultValue,
    defaultValue,
    defaultValue,
    defaultValue,
    defaultValue,
    defaultValue,
  ];

  if (!lessThanIndex || !lessThanValue) {
    return allDefaults;
  }

  return allDefaults.map((def, index) => {
    if (index <= lessThanIndex) return lessThanValue;
    return def;
  });
};

const standardColors = {
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  success: SUCCESS_COLOR,
  danger: DANGER_COLOR,
  warning: WARNING_COLOR,
  info: INFO_COLOR,
  light: LIGHT_COLOR,
  dark: DARK_COLOR,
};

export const getStandardColors = (colorProp) => standardColors[colorProp] || PRIMARY_COLOR;
