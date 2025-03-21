const mobileMax = '600px';
const portraitTabletMin = '601px';
const portraitTabletMax = '768px';
const tabletMin = '769px';
const tabletMax = '992px';
const laptopMin = '993px';
const laptopMax = '1360px';
const desktopMin = '1361px';
const desktopMax = '1920px';
const superMin = '1921px';

const values: { [key: string]: string } = {
  super: `@media (min-width: ${superMin})`,
  'desktop-min': `@media (min-width: ${desktopMin})`,
  'desktop-max': `@media (max-width: ${desktopMax})`,
  'laptop-min': `@media (min-width: ${laptopMin})`,
  'laptop-max': `@media (max-width: ${laptopMax})`,
  'tablet-min': `@media (min-width: ${tabletMin})`,
  'tablet-max': `@media (max-width: ${tabletMax})`,
  tablet: `@media (min-width: ${tabletMin}) and (max-width: ${tabletMax})`,
  'portrait-tablet-min': `@media (min-width: ${portraitTabletMin})`,
  'portrait-tablet-max': `@media (max-width: ${portraitTabletMax})`,
  mobile: `@media (max-width: ${mobileMax})`,
};

export const mediaQuery = (match: mediaQueryType) => {
  return values[match] || match;
};

export const isMobile = (): boolean =>
  typeof window !== 'undefined' && window.innerWidth < parseInt(mobileMax, 10);

export const isTablet = (): boolean =>
  typeof window !== 'undefined' && window.innerWidth < parseInt(tabletMax, 10);

type mediaQueryType =
  | 'super'
  | 'desktop-min'
  | 'desktop-max'
  | 'laptop-min'
  | 'laptop-max'
  | 'tablet-min'
  | 'tablet-max'
  | 'tablet'
  | 'mobile';
