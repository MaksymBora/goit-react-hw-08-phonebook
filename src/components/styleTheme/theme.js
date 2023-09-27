export const lightColors = {
  colors: {
    white: '#ffffff',
    textPrimary: 'rgb(105, 105, 105)',
    hoverShadow: 'rgba(0, 0, 0, 0.65)',
    border: 'transparent',
  },
};

export const darkColors = {
  colors: {
    textPrimary: '#ffffff',
    black: '#000000',
    hoverShadow: 'rgba(99,230,120,0.75)',
    transparent: 'transparent',
    border: 'rgb(99,230,120)',
  },
};

export const lightTheme = {
  colors: {
    mainLayout: {
      bg: lightColors.colors.white,
    },
    header: {
      text: lightColors.colors.textPrimary,
      bg: lightColors.colors.white,
      btnBg: lightColors.colors.white,
      boxShadowHover: lightColors.colors.hoverShadow,
      border: lightColors.colors.border,
    },
    contacts: {
      bg: lightColors.colors.white,
    },
  },
};

export const darkTheme = {
  colors: {
    mainLayout: {
      bg: darkColors.colors.black,
    },
    header: {
      text: darkColors.colors.textPrimary,
      bg: darkColors.colors.black,
      btnBg: darkColors.colors.transparent,
      boxShadowHover: darkColors.colors.hoverShadow,
      border: darkColors.colors.border,
    },
    contacts: {
      bg: darkColors.colors.black,
    },
  },
};
