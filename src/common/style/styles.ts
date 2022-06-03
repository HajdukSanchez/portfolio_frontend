/**
 * Constant with global variables for styles
 */
const globalStylesVariables = {
  borderRadius: '0.8rem',
  transition: '0.3s ease-in-out',
  colors: {
    primary: '#16213E',
    secondary: '#0F3460',
    alternative: '#E94560',
  },
  text: {
    title: '2.4rem',
    subtitle: '2rem',
    text: '1.6rem',
    colors: {
      primary: 'rgba(255, 255, 255, 0.8)',
      secondary: '#E94560',
    },
  },
};

/**
 * Sizes for media queries
 */
const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

/**
 * Mobile size 320px
 * Tablet size 768px
 * Desktop size 1024px
 */
const mediaQueries = {
  mobile: `(min-width: ${sizes.mobile}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

export { globalStylesVariables, mediaQueries, sizes };
