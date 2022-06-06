/**
 * Constant with global variables for styles
 */
const globalStylesVariables = {
  borderRadius: '0.2rem',
  transition: '0.3s ease-in-out',
  border: '0.1rem solid',
  animation: '2s alternate infinite ease-in-out',
  boxShadow: '1px 2px 5px 0px rgb(0, 0, 0, 0.75)',
  colors: {
    primary: '#19212c',
    secondary: '#1e2f37',
    alternative: 'white',
    alternativeOpacity: 'rgba(255, 255, 255, 0.6)',
  },
  textSize: {
    extraSmall: '1.2rem',
    small: '1.6rem',
    medium: '1.8rem',
    large: '2rem',
    semiLarge: '2.2rem',
    extraLarge: '5rem',
  },
  textColors: {
    primary: 'white',
    secondary: '#949494',
    tertiary: '#2988b3',
    alternative: 'grey',
  },
  zIndex: {
    level1: 1,
    level2: 10,
    level3: 100,
    level4: 1000,
  },
};

/**
 * Sizes for media queries
 */
const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  desktopXL: 1350,
};

/**
 * Mobile size 320px
 * Tablet size 768px
 * Desktop size 1024px
 * DesktopXL size 1350px
 */
const mediaQueries = {
  mobile: `(min-width: ${sizes.mobile}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
  desktopXL: `(min-width: ${sizes.desktopXL}px)`,
};

export { globalStylesVariables, mediaQueries, sizes };
