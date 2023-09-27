export const lightColors = {
  colors: {
    white: '#ffffff',
    textPrimary: 'rgb(105, 105, 105)',
    hoverShadow: 'rgba(0, 0, 0, 0.65)',
    border: 'transparent',
    contactHover: 'rgba(245, 245, 245, 1)',
    black: '#000000',
    hoverBtns: 'rgb(99,230,120)',
    hoverBtnContactList: '#00000051',
  },
};

export const darkColors = {
  colors: {
    textPrimary: '#ffffff',
    black: '#000000',
    hoverShadow: 'rgba(99,230,120,0.75)',
    transparent: 'transparent',
    border: 'rgb(99,230,120)',
    contactHover: 'rgba(125, 240, 132, 0.25)',
    white: '#ffffff',
    formBorder: '#1976d2',
    hoverBtns: 'rgb(99,230,120)',
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
    contactsList: {
      bg: lightColors.colors.white,
      hover: lightColors.colors.contactHover,
      hoveredBtnColor: lightColors.colors.hoverBtnContactList,
    },
    editContact: {
      text: lightColors.colors.black,
      icons: lightColors.colors.textPrimary,
      formBorder: lightColors.colors.black,
      hoverBorder: lightColors.colors.formBorder,
    },
    addContact: {
      text: lightColors.colors.textPrimary,
      icon: lightColors.colors.textPrimary,
      hover: lightColors.colors.hoverBtns,
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
    contactsList: {
      bg: darkColors.colors.black,
      hover: darkColors.colors.contactHover,
      hoveredBtnColor: lightColors.colors.white,
    },
    editContact: {
      text: darkColors.colors.white,
      icons: darkColors.colors.white,
      formBorder: darkColors.colors.formBorder,
      hoverBorder: darkColors.colors.border,
    },
    addContact: {
      text: darkColors.colors.white,
      icon: darkColors.colors.white,
      hover: darkColors.colors.hoverBtns,
    },
  },
};
