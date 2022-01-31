import { ThemeTransitions, transitions } from './components/transition';

export interface Colors {
  primary: string;
  focus: string;
  focusInverse: string;
  foundation: string;
  foundation02: string;
  foundation03: string;
  foundation04: string;
  pop: string;
  pop02: string;
  pop03: string;
  pop04: string;
  pop05: string;
  pop06: string;
  success: string;
  success02: string;
  successInverse: string;
  danger: string;
  dangerInverse: string;
  neutral: string;
  neutral02: string;
  neutral03: string;
  neutral04: string;
  neutral05: string;
  neutral06: string;
  neutral07: string;
  neutral08: string;
  disabledText: string;
  disabledInverseText: string;
  toggleBoxShadow: string;
  shade: string;
  shade02: string;
  tint: string;
  tint02: string;
  tint03: string;
  tint04: string;
  tone: string;
  tone02: string;
  border: string;
  borderInverse: string;
}

export interface Breakpoints {
  xs: string;
  small: string;
  medium: string;
  large: string;
  xl: string;
}

const breakpoints = {
  xs: '0',
  small: '600px',
  medium: '768px',
  large: '1024px',
  xl: '1200px',
};

export interface IconSizes {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

// export interface SpacingScale {
//   spacing-01: string;
//   spacing-02: string;
//   spacing-03: string;
//   spacing-04: string;
//   spacing-05: string;
//   spacing-06: string;
//   spacing-07: string;
//   spacing-08: string;
//   spacing-09: string;
//   spacing10: string;
//   spacing11: string;
//   spacing12: string;
//   spacing13: string;
//   spacing14: string;
// }

export interface TypographyExpressiveSizes {
  headingXLarge: any;
  headingLarge: any;
  headingMedium: any;
  headingSmall: any;
  headingXSmall: any;
  headingXXSmall: any;
  bodyLarge: any;
  bodyMedium: any;
  bodySmall: any;
  bodyXSmall: any;
}

export interface TypeScaleSize {
  fontSize: string;
  lineHeight: string;
}

export interface TypeScale {
  size01: TypeScaleSize;
  size02: TypeScaleSize;
  size03: TypeScaleSize;
  size04: TypeScaleSize;
  size05: TypeScaleSize;
  size06: TypeScaleSize;
  size07: TypeScaleSize;
  size08: TypeScaleSize;
  size09: TypeScaleSize;
  size10: TypeScaleSize;
  size11: TypeScaleSize;
  size12: TypeScaleSize;
  size13: TypeScaleSize;
}

export interface VisualStyle {
  mobile: TypeScaleSize;
  desktop: TypeScaleSize;
  fontWeight?: number;
}

export interface TypographyVisualStyles {
  headingXLarge: VisualStyle;
  headingLarge: VisualStyle;
  headingMedium: VisualStyle;
  headingSmall: VisualStyle;
  headingXSmall: VisualStyle;
  heading2XSmall: VisualStyle;
  bodyLarge: VisualStyle;
  bodyMedium: VisualStyle;
  bodySmall: VisualStyle;
  bodyXSmall: VisualStyle;
}

interface AppBar {
  backgroundColor: string;
  height: string;
  padding: string;
  textColor: string;
  compact: {
    height: string;
    padding: string;
  };
  inverse: {
    backgroundColor: string;
    textColor: string;
  };
}
export interface Modal {
  width: {
    small: string;
    medium: string;
    large: string;
  };
}

interface Drawer {
  default: {
    maxWidth: string;
    minHeight: string;
    borderRadius: string;
    margin: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
    position: string;
  };
  right: {
    left: string;
    height: string;
    width: string;
  };
  left: {
    right: string;
    height: string;
    width: string;
  };
  top: {
    bottom: string;
    height: string;
  };
  bottom: {
    top: string;
    height: string;
  };
}

interface Combobox {
  menu: {
    maxHeight: string;
  };
}

interface Dropdown {
  content: {
    maxHeight: string;
  };
}

interface Dropdown {
  content: {
    maxHeight: string;
  };
}

interface Select {
  menu: {
    maxHeight: string;
  };
}

interface Tabs {
  approxTabSize: {
    horizontal: number;
    vertical: number;
  };
}

export interface Tooltip {
  arrowSize: string;
  arrowSizeDoubled: string;
  backgroundColor: string;
  fontWeight: number | string;
  maxWidth: string;
  textColor: string;
  typeScale: TypeScaleSize;
  zIndex: number;
  inverse: any;
}

export interface ThemeInterface {
  appBar: AppBar;
  breakpoints: Breakpoints;
  bodyFont: string;
  bodyExpressiveFont: string;
  bodyNarrativeFont: string;
  borderRadius: string;
  colors: Colors;
  combobox: Combobox;
  direction: string;
  drawer: Drawer;
  dropdown: Dropdown;
  headingFont: string;
  iconSizes: IconSizes;
  spacingMultiplier: number;
  // spaceScale: SpacingScale;
  headingExpressiveFont: string;
  headingNarrativeFont: string;
  select: Select;
  typeScale: TypeScale;
  typographyVisualStyles: TypographyVisualStyles;
  typographyExpressiveVisualStyles: TypographyVisualStyles;
  typographyNarrativeVisualStyles: TypographyVisualStyles;
  modal: Modal;
  tabs: Tabs;
  tooltip: Tooltip;
  transitions: ThemeTransitions;
}

const typeScale = {
  size01: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  size02: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  size03: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  size04: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  size05: {
    fontSize: '20px',
    lineHeight: '32px',
  },
  size06: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  size07: {
    fontSize: '28px',
    lineHeight: '40px',
  },
  size08: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  size09: {
    fontSize: '36px',
    lineHeight: '48px',
  },
  size10: {
    fontSize: '42px',
    lineHeight: '48px',
  },
  size11: {
    fontSize: '48px',
    lineHeight: '56px',
  },
  size12: {
    fontSize: '54px',
    lineHeight: '64px',
  },
  size13: {
    fontSize: '60px',
    lineHeight: '72px',
  },
};

const colors = {
  primary: '#006298', // link color blue
  primaryInverse: '#70CDFF', // link color inverse blue
  focus: '#027EE1',
  focusInverse: 'rgba(255,255,255,0.7)',
  foundation: '#00263E',
  foundation02: '#003865',
  foundation03: '#00A9E0',
  foundation04: '#71C5E8',
  pop: '#E0004D',
  pop02: '#FC4C02',
  pop03: '#F2A900',
  pop04: '#FFC72C',
  pop05: '#92278F',
  pop06: '#007A6D',
  success: '#3A8200',
  success02: '#48A200',
  successInverse: '#91CF60',
  danger: '#C61D23',
  dangerInverse: '#F59295',
  neutral: '#3F3F3F', // main dark grey text color
  neutral02: '#575757',
  neutral03: '#707070',
  neutral04: '#8f8f8f', // lightest gray that meets 3:1 contrast ratio
  neutral05: '#BFBFBF',
  neutral06: '#DFDFDF',
  neutral07: '#F7F7F7',
  neutral08: '#FFFFFF', // white
  disabledText: 'rgba(114,114,114,0.6)',
  disabledInverseText: 'rgba(255,255,255,0.25)',
  toggleBoxShadow:
    '0 2px 2px -1px rgba(0, 0, 0, 0.3), 0 0 4px 0 rgba(0, 0, 0, 0.24),0 0 5px 0 rgba(0, 0, 0, 0.22)',
  shade: 'rgba(0,0,0,0.05)',
  shade02: 'rgba(0,0,0,0.3)',
  tint: 'rgba(255,255,255,0.05)',
  tint02: 'rgba(255,255,255,0.1)',
  tint03: 'rgba(255,255,255,0.1)',
  tint04: 'rgba(255,255,255,0.4)',
  tone: 'rgba(63,63,63,0.07)',
  tone02: 'rgba(63,63,63,0.1)',
  border: '#DFDFDF',
  borderInverse: 'rgba(255,255,255,0.25)',
};

const spaceScale = {
  spacing01: '2px',
  spacing02: '4px',
  spacing03: '8px',
  spacing04: '12px',
  spacing05: '16px',
  spacing06: '24px',
  spacing07: '28px',
  spacing08: '32px',
  spacing09: '40px',
  spacing10: '48px',
  spacing11: '56px',
  spacing12: '64px',
  spacing13: '96px',
  spacing14: '160px',
};

export const magma = {
  bodyFont: '"Open Sans",Helvetica,sans-serif',
  bodyExpressiveFont: '"Open Sans",Helvetica,sans-serif',
  bodyNarrativeFont: "'Noto Serif',Times New Roman,serif",
  borderRadius: '4px',
  colors: colors,
  headingFont: '"Open Sans",Helvetica,sans-serif',
  headingExpressiveFont: '"Open Sans",Helvetica,sans-serif',
  headingNarrativeFont: "'Noto Serif',Times New Roman,serif",
  direction: 'ltr',
  spacingMultiplier: 8,
  transitions,

  // breakpoints
  breakpoints,

  spaceScale: spaceScale,

  iconSizes: {
    xSmall: 16,
    small: 20,
    medium: 24,
    large: 32,
    xLarge: 54,
  },

  // Typography
  typeScale: typeScale,
  typographyVisualStyles: {
    headingXLarge: {
      mobile: typeScale.size07,
      desktop: typeScale.size09,
      fontWeight: 600,
    },
    headingLarge: {
      mobile: typeScale.size06,
      desktop: typeScale.size07,
      fontWeight: 600,
    },
    headingMedium: {
      mobile: typeScale.size05,
      desktop: typeScale.size06,
      fontWeight: 600,
    },
    headingSmall: {
      mobile: typeScale.size04,
      desktop: typeScale.size05,
      fontWeight: 600,
    },
    headingXSmall: {
      mobile: typeScale.size04,
      desktop: typeScale.size04,
      fontWeight: 600,
    },
    heading2XSmall: {
      mobile: typeScale.size01,
      desktop: typeScale.size01,
      fontWeight: 700,
    },
    bodyLarge: {
      mobile: typeScale.size04,
      desktop: typeScale.size05,
    },
    bodyMedium: {
      mobile: typeScale.size03,
      desktop: typeScale.size03,
    },
    bodySmall: {
      mobile: typeScale.size02,
      desktop: typeScale.size02,
    },
    bodyXSmall: {
      mobile: typeScale.size01,
      desktop: typeScale.size01,
    },
  },
  typographyExpressiveVisualStyles: {
    headingXLarge: {
      mobile: typeScale.size08,
      desktop: typeScale.size11,
      fontWeight: 600,
    },
    headingLarge: {
      mobile: typeScale.size07,
      desktop: typeScale.size09,
      fontWeight: 300,
    },
    headingMedium: {
      mobile: typeScale.size06,
      desktop: typeScale.size07,
      fontWeight: 300,
    },
    headingSmall: {
      mobile: typeScale.size05,
      desktop: typeScale.size06,
      fontWeight: 300,
    },
    headingXSmall: {
      mobile: typeScale.size04,
      desktop: typeScale.size05,
      fontWeight: 300,
    },
    heading2XSmall: {
      mobile: typeScale.size03,
      desktop: typeScale.size03,
      fontWeight: 700,
    },
    bodyLarge: {
      mobile: typeScale.size05,
      desktop: typeScale.size06,
    },
    bodyMedium: {
      mobile: typeScale.size03,
      desktop: typeScale.size03,
    },
    bodySmall: {
      mobile: typeScale.size02,
      desktop: typeScale.size02,
    },
    bodyXSmall: {
      mobile: typeScale.size01,
      desktop: typeScale.size01,
    },
  },
  typographyNarrativeVisualStyles: {
    headingXLarge: {
      mobile: typeScale.size07,
      desktop: typeScale.size08,
      fontWeight: 700,
    },
    headingLarge: {
      mobile: typeScale.size06,
      desktop: typeScale.size07,
      fontWeight: 700,
    },
    headingMedium: {
      mobile: typeScale.size05,
      desktop: typeScale.size06,
      fontWeight: 700,
    },
    headingSmall: {
      mobile: typeScale.size04,
      desktop: typeScale.size05,
      fontWeight: 700,
    },
    headingXSmall: {
      mobile: typeScale.size04,
      desktop: typeScale.size04,
      fontWeight: 700,
    },
    heading2XSmall: {
      mobile: typeScale.size01,
      desktop: typeScale.size01,
      fontWeight: 700,
    },
    bodyLarge: {
      mobile: typeScale.size04,
      desktop: typeScale.size05,
    },
    bodyMedium: {
      mobile: typeScale.size03,
      desktop: typeScale.size03,
    },
    bodySmall: {
      mobile: typeScale.size02,
      desktop: typeScale.size02,
    },
    bodyXSmall: {
      mobile: typeScale.size01,
      desktop: typeScale.size01,
    },
  },

  appBar: {
    backgroundColor: colors.neutral08,
    height: '88px',
    padding: `${spaceScale.spacing06} ${spaceScale.spacing05}`,
    textColor: colors.neutral,
    compact: {
      height: '56px',
      padding: `${spaceScale.spacing05} ${spaceScale.spacing05} ${spaceScale.spacing05} ${spaceScale.spacing06}`,
    },
    inverse: {
      backgroundColor: colors.foundation02,
      textColor: colors.neutral08,
    },
  },

  combobox: {
    menu: {
      maxHeight: '250px',
    },
  },

  modal: {
    width: {
      small: '300px',
      medium: '600px',
      large: '900px',
    },
  },

  drawer: {
    default: {
      maxWidth: '100%',
      minHeight: '300px',
      margin: '0',
      borderRadius: '0',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      position: 'relative',
    },
    right: {
      left: 'auto',
      height: '100%',
      width: '300px',
      position: 'fixed',
    },
    left: {
      right: 'auto',
      height: '100%',
      width: '300px',
    },
    top: {
      bottom: 'auto',
      height: '300px',
    },
    bottom: {
      top: 'auto',
      height: '300px',
      position: 'fixed',
    },
  },

  dropdown: {
    content: {
      maxHeight: '250px',
    },
  },

  tabs: {
    approxTabSize: {
      horizontal: 120,
      vertical: 80,
    },
  },

  select: {
    menu: {
      maxHeight: '250px',
    },
  },

  tag: {
    border: '0',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  tooltip: {
    arrowSize: '4px',
    arrowSizeDoubled: '8px',
    backgroundColor: colors.neutral,
    fontWeight: 600,
    maxWidth: '300px',
    textColor: colors.neutral08,
    typeScale: typeScale.size01,
    zIndex: 999,
    inverse: {
      backgroundColor: colors.neutral08,
      textColor: colors.neutral,
    },
  },
};

// export const v3 = {
//   bodyExpressiveFont: magma.bodyExpressiveFont,
//   bodyFont: magma.bodyFont,
//   bodyNarrativeFont: magma.bodyNarrativeFont,
//   borderRadius: magma.borderRadius,
//   breakpoints,
//   colors,
//   spaceScale,
//   typeScale,
//   typographyVisualStyles: magma.typographyVisualStyles,
// };

export const magmav3 = {
  borderRadius: '4px',
  breakpoints: {
    xs: 0,
    small: '600px',
    medium: '768px',
    large: '1024px',
    xl: '1200px',
  },
  colors: {
    primary: {
      default: '#006298', // link color blue
      dark: '#004165',
      darker: '#002032',
      light: '#0072b2',
      lighter: '#0083cb',
    },
    primaryInverse: '#70CDFF', // link color inverse blue
    focus: '#027EE1',
    focusInverse: 'rgba(255,255,255,0.7)',
    foundation: '#00263E',
    foundation02: '#003865',
    foundation03: '#00A9E0',
    foundation04: '#71C5E8',
    pop: '#E0004D',
    pop02: '#FC4C02',
    pop03: '#F2A900',
    pop04: '#FFC72C',
    pop05: '#92278F',
    pop06: '#007A6D',
    success: {
      default: '#3A8200',
      dark: '#234f00',
      darker: '#0c1c00',
      light: '#459b00',
      lighter: '#51b500',
    },
    success02: '#48A200',
    successInverse: '#91CF60',
    danger: {
      default: '#C61D23',
      dark: '#9a161b',
      darker: '#6d1013',
      light: '#dc2027',
      lighter: '#e1353b',
    },
    dangerInverse: '#F59295',
    neutral: '#3F3F3F', // main dark grey text color
    neutral02: {
      default: '#575757',
      dark: '#3e3e3e',
      darker: '#242424',
      light: '#646464',
      lighter: '#717171',
    },
    neutral03: '#707070',
    neutral04: '#8f8f8f', // lightest gray that meets 3:1 contrast ratio
    neutral05: '#BFBFBF',
    neutral06: '#DFDFDF',
    neutral07: {
      default: '#F7F7F7',
      dark: '#dedede',
      darker: '#c4c4c4',
      light: '#ffffff',
      lighter: '#ffffff',
    },
    neutral08: '#FFFFFF', // white
    disabledText: 'rgba(114,114,114,0.6)',
    disabledInverseText: 'rgba(255,255,255,0.25)',
    toggleBoxShadow:
      '0 2px 2px -1px rgba(0, 0, 0, 0.3), 0 0 4px 0 rgba(0, 0, 0, 0.24),0 0 5px 0 rgba(0, 0, 0, 0.22)',
    shade: 'rgba(0,0,0,0.05)',
    shade02: 'rgba(0,0,0,0.3)',
    tint: 'rgba(255,255,255,0.05)',
    tint02: 'rgba(255,255,255,0.1)',
    tint03: 'rgba(255,255,255,0.1)',
    tint04: 'rgba(255,255,255,0.4)',
    tone: 'rgba(63,63,63,0.07)',
    tone02: 'rgba(63,63,63,0.1)',
    border: '#DFDFDF',
    borderInverse: 'rgba(255,255,255,0.25)',
  },
  fonts: {
    primary: '"Open Sans",Helvetica,sans-serif',
    expressive: '"Open Sans",Helvetica,sans-serif',
    narrative: "'Noto Serif',Times New Roman,serif",
    heading: '"Open Sans",Helvetica,sans-serif',
    headingExpressive: '"Open Sans",Helvetica,sans-serif',
    headingNarrative: "'Noto Serif',Times New Roman,serif",
  },
  fontSize: {
    '01': '12px',
    '02': '14px',
    '03': '16px',
    '04': '18px',
    '05': '20px',
    '06': '24px',
    '07': '28px',
    '08': '32px',
    '09': '36px',
    '10': '42px',
    '11': '48px',
    '12': '54px',
    '13': '60px',
  },
  iconSizes: {
    xSmall: '16px',
    small: '20px',
    medium: '24px',
    large: '32px',
    xLarge: '54px',
  },
  lineHeight: {
    '01': '16px',
    '02': '20px',
    '03': '24px',
    '04': '24px',
    '05': '32px',
    '06': '32px',
    '07': '40px',
    '08': '40px',
    '09': '48px',
    '10': '48px',
    '11': '48px',
    '12': '64px',
    '13': '72px',
  },
  spacing: {
    spacingMultiplier: 8,
    '01': '2px',
    '02': '4px',
    '03': '8px',
    '04': '12px',
    '05': '16px',
    '06': '24px',
    '07': '28px',
    '08': '32px',
    '09': '40px',
    '10': '48px',
    '11': '56px',
    '12': '64px',
    '13': '96px',
    '14': '160px',
  },
  components: {
    Accordion: {
      default: {
        background: 'var(--colors-neutral08)',
        borderBottom: '1px solid var(--colors-neutral06)',
        color: 'var(--colors-neutral)',
      },
      props: {
        isInverse: {
          background: 'var(--colors-foundation)',
          color: 'var(--colors-neutral08)',
        },
      },
      components: {
        AccordionButton: {
          default: {
            background: 'var(--colors-neutral08)',
            border: '0',
            borderTop: '1px solid var(--colors-neutral06)',
            color: 'var(--colors-neutral)',
            cursor: 'pointer',
            display: 'flex',
            fontSize: 'var(--typeScale-size03-fontSize)',
            lineHeight: 'var(--typeScale-size03-lineHeight)',
            fontWeight: '600',
            padding: '12px 16px',
            textAlign: 'left',
            width: '100%',

            '&:focus': {
              outline: '2px dotted var(--colors-focus)',
              outlineOffset: '-3px',
            },

            '&&[disabled]': {
              color: 'var(--colors-disabledText)',
              cursor: 'not-allowed',
            },
          },
          props: {
            isInverse: {
              background: 'var(--colors-foundation)',
              borderTop: '1px solid var(--colors-tint04)',
              color: 'var(--colors-neutral08)',

              '&:focus': {
                outline: '2px dotted var(--colors-focusInverse)',
              },

              '&&[disabled]': {
                color: 'var(--colors-disabledInverseText)',
              },
            },
          },
        },
        AccordionItem: {
          default: {
            h1: {
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              lineHeight: 'inherit',
              margin: '0',
              padding: '0',
            },
            h2: {
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              lineHeight: 'inherit',
              margin: '0',
              padding: '0',
            },
            h3: {
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              lineHeight: 'inherit',
              margin: '0',
              padding: '0',
            },
            h4: {
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              lineHeight: 'inherit',
              margin: '0',
              padding: '0',
            },
            h5: {
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              lineHeight: 'inherit',
              margin: '0',
              padding: '0',
            },
            h6: {
              background: 'none',
              color: 'inherit',
              font: 'inherit',
              lineHeight: 'inherit',
              margin: '0',
              padding: '0',
            },
          },
        },
        AccordionPanel: {
          default: {
            background: 'var(--colors-neutral08)',
            color: 'var(--colors-neutral)',
            padding: 'var(--spacing-03) var(--spacing-05) var(--spacing-04)',
          },
          props: {
            isInverse: {
              background: 'var(--colors-foundation)',
              color: 'var(--colors-neutral08)',
            },
          },
        },
        TextWrapper: {
          default: {
            flexGrow: '1',
          },
        },
      },
    },
    Alert: {
      components: {
        AlertContents: {
          default: {
            alignSelf: 'center',
            flexGrow: 1,
            padding: 'var(--spacing-04) 0',
          },
          props: {
            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  paddingLeft: 'var(--spacing-04)',
                },
              },
            },
          },
        },
        AlertInner: {
          default: {
            backgroundColor: 'var(--colors-neutral)',
            color: 'var(--colors-neutral08)',
            borderRadius: 'var(--borderRadius)',
            display: 'flex',
            position: 'relative',
          },
          props: {
            variant: {
              info: {
                backgroundColor: 'var(--colors-neutral)',
              },
              danger: {
                color: 'var(--colors-neutral08)',
                backgroundColor: 'var(--colors-danger-default)',
              },
              success: {
                color: 'var(--colors-neutral08)',
                backgroundColor: 'var(--colors-success-default)',
              },
              warning: {
                color: 'var(--colors-neutral)',
                backgroundColor: 'var(--colors-pop04)',
              },
            },
            isInverse: {
              default: {
                color: 'var(--colors-neutral08)',
              },
            },
            isToast: {
              animation: 'placeholder and keyframes',
              minWidth: '375px',
              margin: '0 auto',
            },
            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  minWidth: 0,
                  width: '100%',
                },
              },
            },
          },
        },
        DismissButton: {
          default: {
            alignSelf: 'stretch',
            borderRadius: '0 var(--borderRadius) var(--borderRadius) 0',
            color: 'inherit',
            height: 'auto',
            padding: '0 var(--spacing-04)',
            width: 'auto',

            '&&:focus:not(:disabled)': {
              outlineOffset: '0 !important',
              outline: '2px dotted var(--colors-focus)',
            },
            '&:hover': {
              ':not(:disabled):before': {
                opacity: '0.15',
                background: 'var(--colors-focus)',
              },
            },
            '&:focus': {
              ':not(:disabled):before': {
                opacity: '0.15',
                background: 'var(--colors-focus)',
              },
            },
            '&:after': {
              display: 'none',
            },
          },

          props: {
            warning: {
              background: 'var(--colors-focusInverse)',
              '&&:focus:not(:disabled)': {
                outline: '2px dotted var(--colors-focusInverse)',
              },
            },
          },
        },
        IconWrapper: {
          default: {
            padding: '0 var(--spacing-03) 0 var(--spacing-04)',
          },
          props: {
            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  display: 'none',
                },
              },
            },
          },
        },
        IconWrapperStyles: {
          default: {
            alignItems: 'center',
            display: 'flex',
            flexShrink: 0,
            marginRight: '1px',
          },
        },
        ProgressRingWrapper: {
          default: {
            opacity: '0.7',
            marginTop: 'var(--spacing-01)',
            position: 'absolute',
            top: 'var(--spacing-01)',
            right: 'var(--spacing-02)',
          },
        },
      },
      default: {
        fontSize: 'var(--fontSize-03)',
        lineHeight: 'var(--lineHeight-03)',
        marginBottom: 'var(--spacing-06)',
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        padding: 0,
        position: 'relative',
        animation: 'placeholder and keyframes',

        a: {
          color: 'inherit',
          fontWeight: '600',
          textDecoration: 'underline',

          '&:focus': {
            outline: '2px dotted var(--colors-focus)',
          },
          isInverse: {
            '&:focus': {
              outline: '2px dotted var(--colors-focusInverse)',
            },
          },
        },

        '&:focus': {
          outline: '2px dotted var(--colors-focus)',
        },
        '@media': {
          maxWidth: {
            [`${breakpoints.small}`]: {
              fontSize: 'var(--fontSize-02)',
              lineHeight: 'var(--lineHeight-02)',
            },
          },
        },
      },
      props: {
        isInverse: {
          '&:focus': {
            outline: '2px dotted var(--colors-focusInverse)',
          },
        },
        isToast: {
          animation: 'placeholder and keyframes',
          minWidth: '375px',
          margin: '0 auto',

          '@media': {
            maxWidth: {
              [`${breakpoints.small}`]: {
                minWidth: 0,
                width: '100%',
              },
            },
          },
        },
      },
    },
    AppBar: {
      default: {
        alignItems: 'center',
        background: 'var(--colors-neutral08)',
        borderBottom: '1px solid var(--colors-neutral06)',
        boxShadow: '0 0 0',
        color: 'var(--colors-neutral)',
        display: 'flex',
        height: '88px',
        left: '0',
        padding: 'var(--spacing-06) var(--spacing-05)',
        right: '0',
        top: '0',
        zIndex: '10',
        position: 'static',
      },
      props: {
        isCompact: {
          height: 'var(--spacing-11)',
          padding:
            'var(--spacing-05) var(--spacing-05) var(--spacing-05) var(--spacing-06)',
        },
        isInverse: {
          background: 'var(--colors-foundation02)',
          borderBottom: '1px solid var(--colors-foundation)',
          color: 'var(--colors-neutral08)',
        },
        sticky: {
          boxShadow: '0 2px 3px 0 rgb(0 0 0 / 37%)',
        },
        fixed: {
          boxShadow: '0 2px 3px 0 rgb(0 0 0 / 37%)',
        },
        position: {
          absolute: {
            position: 'absolute',
          },
          fixed: {
            position: 'fixed',
          },
          relative: {
            position: 'relative',
          },
          static: {
            position: 'static',
          },
          sticky: {
            position: 'sticky',
          },
        },
      },
    },
    Badge: {
      components: {
        BadgeButton: {
          default: {
            cursor: 'pointer',
            transition: 'background 0.35s',

            '&:hover': {
              background: 'var(--colors-neutral02-dark)',
            },
          },
          props: {
            color: {
              danger: {
                '&:hover': {
                  background: 'var(--colors-danger-dark)',
                },

                '&:focus': {
                  background: 'var(--colors-danger-dark)',
                },

                '&:active': {
                  background: 'var(--colors-danger-darker)',
                },
              },
              light: {
                '&:hover': {
                  background: 'var(--colors-neutral07-light)',
                },

                '&:focus': {
                  background: 'var(--colors-neutral07-light)',
                },

                '&:active': {
                  background: 'var(--colors-neutral07-lighter)',
                },
              },
              primary: {
                '&:hover': {
                  background: 'var(--colors-primary-dark)',
                },

                '&:focus': {
                  background: 'var(--colors-primary-dark)',
                },

                '&:active': {
                  background: 'var(--colors-primary-darker)',
                },
              },
              secondary: {
                '&:hover': {
                  background: 'var(--colors-neutral02-dark)',
                },

                '&:focus': {
                  background: 'var(--colors-neutral02-dark)',
                },

                '&:active': {
                  background: 'var(--colors-neutral02-darker)',
                },
              },
              success: {
                '&:hover': {
                  background: 'var(--colors-success-dark)',
                },

                '&:focus': {
                  background: 'var(--colors-success-dark)',
                },

                '&:active': {
                  background: 'var(--colors-success-darker)',
                },
              },
            },
          },
        },
      },
      default: {
        background: 'var(--colors-neutral02-default)',
        border: '1px solid',
        borderColor: 'transparent',
        borderRadius: 'var(--borderRadius)',
        color: 'var(--colors-neutral08)',
        display: 'inline-block',
        fontWeight: 'bold',
        fontSize: 'var(--typeScale-size01-fontSize)',
        lineHeight: 'var(--typeScale-size01-lineHeight)',
        margin: '0 var(--spacing-03) 0 0',
        maxHeight: 'auto',
        minWidth: 'var(--spacing-06)',
        padding: 'var(--spacing-01) var(--spacing-02)',
        textAlign: 'inherit',
      },
      props: {
        counter: {
          borderRadius: 'var(--spacing-06)',
          fontSize: 'var(--typeScale-size02-fontSize)',
          lineHeight: 'var(--typeScale-size02-lineHeight)',
          margin: '0 0 0 var(--spacing-03)',
          maxHeight: 'var(--spacing-06)',
          padding: '1px var(--spacing-02)',
          textAlign: 'center',
        },
        color: {
          danger: {
            background: 'var(--colors-danger-default)',
          },
          light: {
            background: 'var(--colors-neutral07-default)',
            borderColor: 'var(--colors-neutral06)',
            color: 'var(--colors-neutral)',
          },
          primary: {
            background: 'var(--colors-primary-default)',
          },
          secondary: {
            background: 'var(--colors-neutral02-default)',
          },
          success: {
            background: 'var(--colors-success-default)',
          },
        },
      },
    },
    Banner: {
      components: {
        BannerContents: {
          default: {
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-start',
            padding: 'var(--spacing-04)',

            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  justifyContent: 'flex-start',
                },
              },
            },
          },
        },
        ButtonWrapper: {
          default: {
            alignItems: 'center',
            display: 'flex',
            flexShrink: '0',
          },
        },
        DismissButton: {
          default: {
            alignSelf: 'stretch',
            borderRadius: '0',
            color: 'var(--colors-neutral08)',
            height: 'auto',
            padding: '0 var(--spacing-05)',
            width: 'auto',

            '&&:focus:not(:disabled)': {
              outline: '2px dotted var(--colors-neutral08)',
              outlineOffset: '0 !important',
            },

            '&:hover': {
              ':not(:disabled)': {
                '&:before': {
                  background: 'var(--colors-neutral08)',
                  opacity: '0.15',
                },
                '&:after': {
                  display: 'none',
                },
              },
            },

            '&:focus': {
              ':not(:disabled)': {
                '&:before': {
                  background: 'var(--colors-neutral08)',
                  opacity: '0.15',
                },
                '&:after': {
                  display: 'none',
                },
              },
            },
          },
          props: {
            alertVariant: {
              warning: {
                '&&:focus:not(:disabled)': {
                  outline: '2px dotted var(--colors-neutral)',
                },

                '&:hover': {
                  ':not(:disabled)': {
                    '&:before': {
                      background: 'var(--colors-neutral)',
                    },
                  },
                },

                '&:focus': {
                  ':not(:disabled)': {
                    '&:before': {
                      background: 'var(--colors-neutral)',
                    },
                  },
                },
              },
            },
          },
        },
        IconWrapper: {
          default: {
            display: 'inline-flex',
            paddingRight: 'var(--spacing-03)',

            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  display: 'none',
                },
              },
            },
          },
        },
      },
      default: {
        alignItems: 'stretch',
        backgroundColor: 'var(--colors-neutral)',
        color: 'var(--colors-neutral08)',
        display: 'flex',
        fontSize: 'var(--typeScale-size03-fontSize)',
        lineHeight: 'var(--typeScale-size03-lineHeight)',
        position: 'relative',
        textAlign: 'left',

        '@media': {
          maxWidth: {
            [`${breakpoints.small}`]: {
              textAlign: 'left',
              fontSize: 'var(--typeScale-size02-fontSize)',
              lineHeight: 'var(--typeScale-size02-lineHeight)',
            },
          },
        },
      },
      props: {
        variant: {
          info: {
            backgroundColor: 'var(--colors-neutral)',
          },
          danger: {
            color: 'var(--colors-neutral08)',
            backgroundColor: 'var(--colors-danger-default)',
          },
          success: {
            color: 'var(--colors-neutral08)',
            backgroundColor: 'var(--colors-success-default)',
          },
          warning: {
            color: 'var(--colors-neutral)',
            backgroundColor: 'var(--colors-pop04)',
          },
        },
      },
    },
    Breadcrumb: {
      components: {
        BreadcrumbItem: {
          default: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
          },
        },
        StyledSpan: {
          default: {
            color: 'var(--colors-neutral03)',

            svg: {
              margin: '0 var(--spacing-02)',
            },
          },
          props: {
            isInverse: {
              color: 'var(--colors-neutral08)',
            },
          },
        },
      },
      default: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: 'var(--typeScale-size02-fontSize)',
        lineHeight: 'var(--typeScale-size02-lineHeight)',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
    },
    Card: {
      components: {
        CardBody: {
          default: {
            padding: 'var(--spacing-05)',
            textAlign: 'left',

            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  padding: 'var(--spacing-06)',
                },
              },
            },
          },
          props: {
            CardAlignment: {
              center: {
                textAlign: 'center',
              },
              left: {
                textAlign: 'left',
              },
              right: {
                textAlign: 'right',
              },
            },
          },
        },
        CardHeading: {
          default: {
            marginTop: '0',
          },
        },
      },
      default: {
        borderRadius: 'var(--borderRadius)',
        boxShadow: '0 0 0',
        color: 'var(--colors-neutral)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        paddingLeft: '0',
        position: 'relative',
        textAlign: 'left',
      },
      props: {
        background: {
          background: 'var(--colors-neutral08)',
          border: '1px solid var(--colors-neutral06)',

          isInverse: {
            background: 'var(--colors-foundation)',
          },
        },
        calloutType: {
          default: {
            paddingLeft: 'var(--spacing-02)',

            '&:before': {
              background: 'var(--colors-primary-default)',
              borderRadius: 'var(--borderRadius) 0 0 var(--borderRadius)',
              content: '',
              display: 'block',
              height: '100%',
              position: 'absolute',
              left: 0,
              width: 'var(--spacing-02)',
            },
          },
          danger: {
            background: 'var(--colors-danger-default)',
          },
          success: {
            background: 'var(--colors-success-default)',
          },
          warning: {
            background: 'var(--colors-pop04)',
          },
        },
        CardAlignment: {
          center: {
            textAlign: 'center',
          },
          left: {
            textAlign: 'left',
          },
          right: {
            textAlign: 'right',
          },
        },
        hasDropShadow: {
          boxShadow: '0 2px 6px 0 rgba(0,0,0,0.18)',
        },
        isInverse: {
          color: 'var(--colors-neutral08)',

          CalloutBackground: {
            default: {
              background: 'var(--colors-foundation04)',
            },
            danger: {
              background: 'var(--colors-dangerInverse)',
            },
            success: {
              background: 'var(--colors-successInverse)',
            },
            warning: {
              background: 'var(--colors-pop4)',
            },
          },
        },
      },
    },
    Checkbox: {
      default: {
        border: '2px solid',
        borderColor: 'transparent',
        color: 'var(--colors-neutral02-default)',
        cursor: 'pointer',
        margin: '0 var(--spacing-03) 0 0',

        svg: {
          flexShrink: '0',
          pointerEvents: 'none',
          transition: 'all 0.2s ease-out',
        },

        '&:after': {
          background: 'var(--colors-primary-default)',
          top: '-10px',
          left: '-10px',
        },
      },
      props: {
        disabled: {
          color: 'var(--colors-neutral05',
          cursor: 'not-allowed',

          isInverse: {
            color: 'var(--colors-tint04',
          },
        },
        hasError: {
          isInverse: {
            borderColor: 'var(--colors-dangerInverse)',
          },
        },
        isInverse: {
          borderColor: 'var(--colors-danger-default)',
          color: 'var(--colors-neutral08)',
          '&:after': {
            background: 'var(--colors-neutral08)',
          },
        },
        textPosition: {
          left: {
            margin: 'var(--spacing-01) 0 0 var(--spacing-03)',
          },
        },
      },
    },
    ComboboxInput: {
      components: {
        StyledInput: {
          default: {
            border: 0,
            display: 'flex',
            flexGrow: 1,
            height: 'var(--spacing-08)',
            minWidth: 'var(--spacing-07)',
            paddingLeft: 'var(--spacing-02)',
            width: 0,

            '&:focus': {
              outline: 0,
            },
          },
        },
      },
      default: {
        alignItems: 'center',
        background: 'var(--colors-neutral08)',
        border: '1px solid',
        borderColor: 'var(--colors-neutral03)',
        borderRadius: 'var(--borderRadius)',
        display: 'flex',
        minHeight: 'var(--spacing-09)',
        minWidth: 'var(--spacing13)',
        padding: '0 var(--spacing-03) 0 0',
        width: '100%',
      },
      props: {
        disabled: {
          background: 'var(--colors-neutral07-default)',
          borderColor: 'var(--colors-neutral05)',
          color: 'var(--colors-disabledText)',
          cursor: 'not-allowed',
          outline: 0,

          '&::placeholder': {
            color: 'var(--colors-disabledText)',
          },
        },
        hasError: {
          borderColor: 'var(--colors-danger-default)',
          boxShadow: '0 0 0 1px var(--colors-danger-default)',
          isInverse: {
            boxShadow: '0 0 0 1px var(--colors-neutral08)',
          },
        },
        isFocused: {
          outline: '2px dotted var(--colors-focus)',
          outlineOffset: '4px',
          isInverse: {
            outline: '2px dotted var(--colors-focusInverse)',
          },
        },
        isInverse: {
          borderColor: 'var(--colors-neutral08)',
        },
      },
    },
    Container: {
      default: {
        background: 'var(--colors-neutral08)',
        color: 'var(--colors-neutral)',
        display: 'flow-root',
        margin: '0 auto',
        maxWidth: 'none',
        padding: '0 var(--spacing-06)',
      },
      props: {
        isInverse: {
          background: 'var(--colors-foundation)',
          color: 'var(--colors-neutral08)',
        },
      },
    },
    DatePicker: {
      components: {
        CalendarDay: {
          components: {
            CalendarDayCell: {
              default: {
                border: '1px solid var(--colors-neutral06)',
                color: 'var(--colors-neutral)',
                fontSize: 'var(--typeScale-size03-fontsize)',
                lineHeight: 'var(--typeScale-size03-lineHeight)',
                height: 'var(--spacing-09)',
                padding: '0',
                position: 'relative',
                textAlign: 'center',
                width: 'var(--spacing-09)',
              },
            },
            CalendarDayInner: {
              default: {
                alignItems: 'center',
                background: 'var(--colors-neutral08)',
                border: '2px solid transparent',
                borderRadius: '100%',
                color: 'var(--colors-neutral)',
                cursor: 'pointer',
                display: 'flex',
                height: 'calc(var(--spacing-09) - 4px)',
                justifyContent: 'center',
                margin: 'var(--spacing-01)',
                overflow: 'hidden',
                outlineOffset: '0',
                position: 'relative',
                transition: 'background 0.5s ease-in-out 0s',
                width: 'calc(var(--spacing-09) - 4px)',

                '&:focus': {
                  outline: '2px dotted var(--colors-focus)',
                },

                '&:before': {
                  background: 'var(--colors-neutral)',
                  content: '',
                  height: '200%',
                  left: '0',
                  opacity: '0',
                  position: 'absolute',
                  top: '-50%',
                  transition: '0.2s',
                  width: '200%',
                },

                '&:hover': {
                  '&:before': {
                    opacity: '0.1',
                  },
                },
              },
              props: {
                disabled: {
                  color: 'var(--colors-disabledText)',
                  cursor: 'not-allowed',

                  '&:hover': {
                    '&:before': {
                      opacity: '0',
                    },
                  },
                },
                isChosen: {
                  background: 'var(--colors-foundation02)',
                  color: 'var(--colors-neutral08)',
                },
              },
            },
            EmptyCell: {
              default: {
                border: '0',
                padding: '0',
              },
            },
            TodayIndicator: {
              default: {
                borderLeft: '8px solid var(--colors-pop)',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                bottom: '-6px',
                display: 'block',
                height: '0',
                position: 'absolute',
                transform: 'rotate(45deg)',
                right: '-2px',
                width: '0',
              },
            },
          },
        },
        CalendarHeader: {
          components: {
            CalendarHeaderContainer: {
              default: {
                alignItems: 'center',
                display: 'flex',
                padding: 'var(--spacing10) 0 var(--spacing-03)',
                marginTop: 'calc(var(--spacing-01) * -1))',
              },
            },
            CalendarHeaderText: {
              default: {
                captionSide: 'initial',
                color: 'var(--colors-neutral)',
                fontSize: 'var(--typeScale-size03-fontSize)',
                lineHeight: 'var(--typeScale-size03-lineHeight)',
                order: '1',
                textAlign: 'center',
                flexGrow: '0',
                flexWidth: '90%',
                flexBasis: '90%',
              },
            },
            CalendarIconButton: {
              default: {
                flexGrow: '0',
                flexWidth: '10%',
                flexBasis: '10%',
                order: '0',
              },
              props: {
                next: {
                  order: '2',
                },
              },
            },
          },
        },
        CalendarMonth: {
          components: {
            CalendarContainer: {
              default: {
                background: 'var(--colors-neutral08)',
                padding: '0 var(--spacing-05) var(--spacing-03)',
              },
            },
            CloseButton: {
              default: {
                position: 'absolute',
                right: 'var(--spacing-01)',
                top: 'var(--spacing-01)',
                zIndex: '1',
              },
            },
            HelperButton: {
              default: {
                bottom: 'var(--spacing-01)',
                position: 'absolute',
                right: 'var(--spacing-01)',
                zIndex: '2',
              },
            },
            MonthContainer: {
              default: {
                background: 'var(--colors-neutral08)',
                textAlign: 'center',
                userSelect: 'none',
                verticalAlign: 'top',
              },
            },
            Table: {
              default: {
                borderCollapse: 'collapse',
                borderSpacing: '0',
                marginBottom: 'var(--spacing-09)',
              },
            },
            Th: {
              default: {
                border: '0',
                color: 'var(--colors-neutral)',
                fontSize: 'var(--typeScale-size02-fontSize)',
                lineHeight: 'var(--typeScale-size02-lineHeight)',
                fontWeight: 'normal',
                padding: '0',
                textAlign: 'center',
              },
            },
          },
        },
        HelperInformation: {
          components: {
            KeyboardShortcutButtonWrapper: {
              default: {
                background: 'rgb(242, 242, 242)',
                fontFamily: 'monospace',
                fontSize: 'var(--typeScale-size02-fontSize)',
                lineHeight: 'var(--typeScale-size02-lineHeight)',
                marginRight: 'var(--spacing-03)',
                padding: 'var(--spacing-02) var(--spacing-04)',
                textTransform: 'uppercase',
              },
            },
            List: {
              default: {
                listStyle: 'none',
                margin: '0',
                padding: '0',
                textAlign: 'left',
              },
            },
            Item: {
              default: {
                display: 'flex',
                listStyle: 'none',
              },
            },
          },
        },
      },
      default: {
        border: '1px solid var(--colors-neutral06)',
        borderRadius: 'var(--borderRadius)',
        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.15)',
        display: 'none',
        marginTop: 'calc(var(--spacing-07) * -1))',
        opacity: '0',
        overflow: 'hidden',
        position: 'absolute',
        transition: 'opacity 0.2s ease-in-out 0s',
        width: '320px',
        zIndex: '-1',
      },
      props: {
        opened: {
          display: 'block',
          opacity: 1,
          zIndex: '998',
        },
      },
    },
    Dropdown: {
      components: {
        DropdownContent: {
          components: {
            StyledCard: {
              default: {
                display: 'none',
                left: 'var(--spacing-02)',
                opacity: '0',
                outline: '0',
                overflowY: 'auto',
                padding: 'var(--spacing-03) 0',
                position: 'absolute',
                transition: 'opacity 0.3s',
                whiteSpace: 'nowrap',
              },
              props: {
                dropAlignment: {
                  end: {
                    left: 'auto',
                    right: 'var(--spacing-02)',
                    dropDirection: {
                      left: {
                        bottom: 'var(--spacing-02)',
                        top: 'auto',
                        left: 'unset',
                        right: 'unset',
                      },
                      right: {
                        bottom: 'var(--spacing-02)',
                        top: 'auto',
                        left: 'unset',
                        right: 'unset',
                      },
                    },
                  },
                },
                dropDirection: {
                  left: {
                    left: 'auto',
                    right: '100%',
                    top: 'var(--spacing-02)',
                  },
                  right: {
                    left: '100%',
                    top: 'var(--spacing-02)',
                  },
                  up: {
                    top: 'auto',
                    bottom: '100%',
                  },
                },
                isOpen: {
                  display: 'block',
                  opacity: '1',
                },
                maxHeight: {
                  maxHeight: 'var(--dropdown-content-maxHeight)',
                },
                width: {
                  whiteSpace: 'normal',
                },
              },
            },
            StyledDiv: {
              default: {
                padding: 'var(--spacing-02) 0',
              },
            },
          },
        },
        DropdownDivider: {
          components: {
            StyledHr: {
              default: {
                background: 'var(--colors-neutral06)',
                border: '0',
                height: '1px',
                margin: 'var(--spacing-02) 0',
              },
            },
          },
        },
        DropdownHeader: {
          components: {
            StyledDiv: {
              default: {
                color: 'var(--colors-neutral03)',
                fontSize: 'var(--typeScale-size01-fontSize)',
                lineHeight: 'var(--typeScale-size01-lineHeight)',
                fontWeight: 'bold',
                margin: ',',
                padding:
                  'var(--spacing-03) var(--spacing-05) var(--spacing-02)',
                textTransform: 'uppercase',
              },
            },
          },
        },
        DropdownMenuItem: {
          components: {
            IconWrapper: {
              default: {
                color: 'var(--colors-neutral03)',
                display: 'inline-flex',
                marginRight: 'var(--spacing-05)',

                svg: {
                  height: 'var(--iconSizes-medium) px',
                  width: 'var(--iconSizes-medium) px',
                },
              },
            },
            MenuItemStyles: {
              default: {
                alignItems: 'center',
                color: 'var(--colors-neutral)',
                cursor: 'pointer',
                display: 'flex',
                fontSize: 'var(--typeScale-size03-fontSize)',
                lineHeight: 'var(--typeScale-size03-lineHeight)',
                margin: '0',
                padding: 'var(--spacing-03) var(--spacing-05)',
                whiteSpace: 'nowrap',

                '&:hover': {
                  background: 'var(--colors-neutral07-default)',
                },

                '&:focus': {
                  background: 'var(--colors-neutral07-default)',
                  outlineOffset: '-3px',
                },
              },
              props: {
                disabled: {
                  color: 'var(--colors-disabledText)',
                  cursor: 'not-allowed',

                  '&:hover': {
                    background: 'none',
                  },

                  '&:focus': {
                    background: 'none',
                  },
                },
                isFixedWidth: {
                  whiteSpace: 'normal',
                },
                isInactive: {
                  padding:
                    'var(--spacing-03) var(--spacing-05) var(--spacing-03) var(--spacing11)',
                },
              },
            },
          },
        },
        DropdownMenuNavItem: {
          components: {
            StyledItem: {
              default: {
                textDecoration: 'none',
              },
            },
          },
        },
      },
      default: {
        display: 'inline-block',
        position: 'relative',
      },
    },
    Form: {
      components: {
        FormAction: {
          default: {
            display: 'flex',
            justifyContent: 'flex-end',
          },
        },
      },
      default: {
        background: 'var(--colors-neutral08)',
        color: 'var(--colors-neutral)',
      },
      props: {
        isInverse: {
          background: 'var(--colors-foundation)',
          color: 'var(--colors-neutral08)',
        },
      },
    },
    FormFieldContainer: {
      default: {
        color: 'var(--colors-neutral)',
        marginBottom: 'var(--spacing-03)',
      },
      props: {
        isInverse: {
          color: 'var(--colors-neutral08)',
        },
      },
    },
    Hyperlink: {
      default: {
        color: 'var(--colors-primary-default)',
        textDecoration: 'underline',

        '&:not([disabled])': {
          '&:hover': {
            color: 'var(--colors-foundation02)',
          },
          '&:focus': {
            color: 'var(--colors-foundation02)',
          },
        },

        '&:focus': {
          outline: '2px dotted var(--colors-focus)',
          outlineOffset: '3px',
        },
      },
      props: {
        isInverse: {
          color: 'var(--colors-primaryInverse)',

          '&:not([disabled])': {
            '&:hover': {
              color: 'var(--colors-primaryInverse)',
            },
            '&:focus': {
              color: 'var(--colors-primaryInverse)',
            },
          },

          '&:focus': {
            outline: '2px dotted var(--colors-focusInverse)',
          },
        },
      },
    },
    Input: {
      components: {
        InputMessage: {
          default: {
            alignItems: 'center',
            borderRadius: 'var(--borderRadius)',
            color: 'var(--colors-neutral03)',
            display: 'flex',
            fontSize: 'var(typeScale-size02-fontSize)',
            lineHeight: 'var(typeScale-size02-lineHeight)',
            marginTop: 'var(--spacing-02)',
            minHeight: 'var(--spacing-06)',
            textAlign: 'left',
          },
          props: {
            hasError: {
              color: 'var(--colors-danger-default)',
            },
            InputSize: {
              large: {
                marginTop: 'var(--spacing-03)',
              },
            },
            isInverse: {
              color: 'var(--colors-neutral08)',
              hasError: {
                color: 'var(--colors-dangerInverse)',
              },
            },
          },
        },
        IconWrapper: {
          default: {
            display: 'inline-flex',
            flexShrink: '0',
            paddingRight: 'var(--spacing-02)',
          },
        },
      },
    },
    InputBase: {
      components: {
        IconButtonContainer: {
          default: {
            backgroundColor: 'var(--colors-neutral08)',
            height: 'auto',
            margin: '0',
            position: 'relative',
            right: 'var(--spacing-01)',

            svg: {
              height: 'var(--iconSizes-medium)px',
              width: 'var(--iconSizes-medium)px',
            },
          },
          props: {
            disabled: {
              backgroundColor: 'var(--colors-neutral07-default)',
            },
            InputSize: {
              large: {
                right: 'var(--spacing-02)',

                svg: {
                  height: 'var(--iconSizes-large)px',
                  width: 'var(--iconSizes-large)px',
                },
              },
            },
          },
        },
        IconWrapper: {
          color: 'var(--colors-neutral)',
          left: 'auto',
          position: 'absolute',
          top: 'var(--spacing-03',

          props: {
            IconPosition: {
              left: {
                left: 'var(--spacing-03)',
              },
              right: {
                right: 'var(--spacing-03)',
              },
            },
            IconSize: {
              large: {
                left: 'auto',
                right: 'auto',
                top: 'var(--spacing-04)',

                props: {
                  IconPosition: {
                    left: {
                      left: 'var(--spacing-04)',
                    },
                    right: {
                      right: 'var(--spacing-04)',
                    },
                  },
                },
              },
            },
          },
        },
        IsClearableContainer: {
          backgroundColor: 'var(--colors-neutral08)',
          position: 'relative',
          right: 'var(--spacing-01)',

          props: {
            disabled: {
              backgroundColor: 'var(--colors-neutral07-default)',
            },
            InputSize: {
              large: {
                right: 'var(--spacing-02)',
              },
            },
          },
        },
      },
      default: {
        border: '0',
        borderRadius: 'var(--borderRadius)',
        background: 'var(--colors-neutral08)',
        color: 'var(--colors-neutral)',
        display: 'block',
        fontSize: 'var(--typeScale-size03-fontSize)',
        lineHeight: 'var(--typeScale-size03-lineHeight)',
        fontFamily: 'var(--bodyFont)',
        height: 'var(--spacing-09)',
        padding: 'var(--spacing-03)',
        '-webkit-appearance': 'none',
        width: '100%',

        '&::placeholder': {
          color: 'var(--colors-neutral03)',
          opacity: '1',
        },

        '&:focus': {
          outline: '0',
        },

        '&[type="search"]': {
          '&::-webkit-search-decoration': {
            display: 'none',
          },
          '&::-webkit-search-cancel-button': {
            display: 'none',
          },
          '&::-webkit-search-results-button': {
            display: 'none',
          },
          '&::-webkit-search-results-decoration': {
            display: 'none',
          },
        },
      },
      props: {
        disabled: {
          background: 'var(--colors-neutral07-default)',
          color: 'var(--colors-disabledText)',
          cursor: 'not-allowed',

          '&::placeholder': {
            color: 'var(--colors-disabledText)',
          },
        },
        iconPosition: {
          left: {
            paddingLeft: 'var(--spacing-09)',

            inputSize: {
              large: {
                paddingLeft: 'var(--spacing10)',
              },
            },
          },
          right: {
            paddingRight: 'var(--spacing-09)',

            inputSize: {
              large: {
                paddingRight: 'var(--spacing10)',
              },
            },
          },
        },
        inputSize: {
          large: {
            fontSize: 'var(--typeScale-size04-fontSize)',
            lineHeight: 'var(--typeScale-size04-lineHeight)',
            height: 'var(--spacing11)',
            padding: '0 var(--spacing-04)',
          },
        },
      },
    },
    Label: {
      default: {
        color: 'var(--colors-neutral)',
        display: 'inline-block',
        fontSize: 'var(--typeScale-size03-fontSize)',
        fontWeight: '600',
        lineHeight: 'var(--typeScale-size02-lineHeight)',
        margin: '0 0 var(--spacing-03)',
        maxWidth: '100%',
        textAlign: 'left',
        whiteSpace: 'nowrap',
      },
      props: {
        labelPosition: {
          left: {
            margin: '0 var(--spacing-05) 0 0',
          },
        },
        inputSize: {
          large: {
            fontSize: 'var(--typeScale-size02-fontSize)',
          },
        },
        isInverse: {
          color: 'var(--colors-neutral08)',
        },
      },
    },
    LoadingIndicator: {
      components: {
        Message: {
          default: {
            opacity: '1',
            position: 'absolute',
            transition: 'opacity 0.3s',
            width: '100%',
          },
          props: {
            hide: {
              opacity: '0',
            },
          },
        },
        MessageContainer: {
          default: {
            fontSize: 'var(--typeScale-size02-fontSize)',
            lineHeight: 'var(--typeScale-size02-lineHeight)',
            marginTop: 'var(--spacing-05)',
            minHeight: '5em',
            position: 'relative',
            textAlign: 'center',
          },
        },
      },
      default: {
        textAlign: 'center',
      },
    },
    Modal: {
      components: {
        CloseBtn: {
          default: {
            position: 'absolute',
            top: '0',
            right: '0',
          },
        },
        H1: {
          default: {
            fontSize:
              'var(--typographyVisualStyles-headingSmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-headingSmall-desktop-lineHeight)',
            margin: '0',
            paddingRight: 'var(--spacing10)',
          },
        },
        ModalBackdrop: {
          default: {
            backdropFilter: 'blur(3px)',
            background: 'rgba(0, 0, 0, 0.6)',
            bottom: '0',
            left: '0',
            right: '0',
            top: '0',
            zIndex: '997',
            position: 'fixed',
          },
        },
        ModalBody: {
          default: {
            padding: 'var(--spacing-05)',

            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  padding: 'var(--spacing-06)',
                },
              },
            },
          },
        },
        ModalContent: {
          default: {
            background: 'var(--colors-neutral08)',
            border: '1px solid',
            borderColor: 'var(--colors-neutral06)',
            borderRadius: 'var(--borderRadius)',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
            color: 'var(--colors-neutral)',
            margin: '0 auto',
            position: 'relative',
            zIndex: '1000',

            '@media': {
              maxWidth: {
                [`${breakpoints.small}`]: {
                  margin: 'var(--spacing-08) auto',
                },
              },
            },
          },
          props: {
            size: {
              default: {
                maxWidth: 'var(--modal-width-medium)',
              },
              large: {
                maxWidth: 'var(--modal-width-large)',
              },
              small: {
                maxWidth: 'var(--modal-width-small)',
              },
            },
          },
        },
        ModalHeader: {
          padding: 'var(--spacing-03) var(--spacing-05) 0 var(--spacing-05)',

          '@media': {
            maxWidth: {
              [`${breakpoints.small}`]: {
                padding:
                  'var(--spacing-05) var(--spacing-06) 0 var(--spacing-06)',
              },
            },
          },
        },
      },
      default: {
        bottom: '0',
        left: '0',
        overflowY: 'auto',
        padding: 'var(--spacing-03)',
        right: '0',
        top: '0',
        zIndex: '998',
      },
    },
    ProgressBar: {
      components: {
        Bar: {
          default: {
            background: 'var(--colors-primary-default)',
            borderRadius: '50em',
            display: 'flex',
            transition: 'width 0.3s',
            width: '0',
          },
          props: {
            isAnimated: {
              backgroundImage:
                'linear-gradient( to right, "var(--colors-primary-default)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-primary-default)" 40%, "var(--colors-primary-default)" 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1800px 104px',
              display: 'inline-block',
              position: 'relative',
              animation: 'hasAnimation',

              isInverse: {
                backgroundImage:
                  'linear-gradient( to right, "var(--colors-primaryInverse)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-primaryInverse)" 40%, "var(--colors-primaryInverse)" 100%)',

                danger: {
                  backgroundImage:
                    'linear-gradient( to right, "var(--colors-dangerInverse)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-dangerInverse)" 40%, "var(--colors-dangerInverse)" 100%)',
                },
                success: {
                  backgroundImage:
                    'linear-gradient( to right, "var(--colors-successInverse)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-successInverse)" 40%, "var(--colors-successInverse)" 100%)',
                },
              },

              danger: {
                backgroundImage:
                  'linear-gradient( to right, "var(--colors-danger-default)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-danger-default)" 40%, "var(--colors-danger-default)" 100%)',
              },
              pop: {
                backgroundImage:
                  'linear-gradient( to right, "var(--colors-pop)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-pop)" 40%, "var(--colors-pop)" 100%)',
              },
              pop02: {
                backgroundImage:
                  'linear-gradient( to right, "var(--colors-pop02)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-pop02)" 40%, "var(--colors-pop02)" 100%)',
              },
              success: {
                backgroundImage:
                  'linear-gradient( to right, "var(--colors-success-default)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-success-default)" 40%, "var(--colors-success-default)" 100%)',
              },
            },
            isInverse: {
              danger: {
                background: 'var(--colors-dangerInverse)',
              },
              default: {
                background: 'var(--colors-primaryInverse)',
              },
              success: {
                background: 'var(--colors-successInverse)',
              },
            },
          },
        },
        Container: {
          default: {
            alignItems: 'center',
            display: 'flex',
          },
          props: {
            isLoadingIndicator: {
              display: 'block',
            },
          },
        },
        Percentage: {
          default: {
            fontSize: 'var(--typeScale-size02-fontSize)',
            lineHeight: 'var(--typeScale-size02-lineHeight)',
            marginLeft: 'var(--spacing-03)',
          },
        },
        TopPercentage: {
          default: {
            fontSize: 'var(--typeScale-size05-fontSize)',
            lineHeight: 'var(--typeScale-size05-lineHeight)',
            marginBottom: 'var(--spacing-03)',
            textAlign: 'center',
          },
        },
        Track: {
          default: {
            background: 'var(--colors-neutral08)',
            boxShadow: 'inset 0 0 0 1px var(--colors-neutral04)',
            borderRadius: '50em',
            overflow: 'hidden',
            display: 'flex',
            height: 'var(--spacing-03)',
            width: '100%',
          },
          props: {
            isInverse: {
              background: 'rgba(0,0,0,0.25)',
              boxShadow: 'inset 0 0 0 1px var(--colors-tint)',
            },
          },
        },
      },
    },
    ProgressRing: {
      default: {
        transition: 'stroke-dashoffset 0.35s',
        transform: 'rotate(-90deg)',
        transformOrigin: '50% 50%',
      },
    },
    Radio: {
      components: {
        HiddenInput: {
          default: {
            clip: 'rect(1px, 1px, 1px, 1px)',
            height: '1px',
            position: 'absolute',
            overflow: 'hidden',
            top: 'auto',
            whiteSpace: 'nowrap',
            width: '1px',

            '&:focus + label &': {
              '&:before': {
                height: '30px',
                position: 'absolute',
                width: '30px',
                outline: '2px dotted var(--colors-focus)',
              },
              '&:after': {
                background: 'var(--colors-primary-default)',
              },
              '&:not(:disabled):active + label &': {
                '&:after': {
                  opacity: '0.4',
                  transform: 'scale(0)',
                  transition: 'transform 0s',
                },
              },
            },
          },
          props: {
            isInverse: {
              '&:checked:not (:disabled) + label &': {
                background: 'var(--colors-neutral08)',
              },
              '&:focus + label &': {
                '&:before': {
                  outline: '2px dotted var(--colors-focusInverse)',
                },
                '&:after': {
                  background: 'var(--colors-neutral08)',
                },
              },
            },
          },
        },
        HiddenLabelText: {
          default: {
            clip: 'rect(1px, 1px, 1px, 1px)',
            height: '1px',
            position: 'absolute',
            overflow: 'hidden',
            top: 'auto',
            whiteSpace: 'nowrap',
            width: '1px',
          },
        },
      },
      default: {
        boxShadow: 'inherit',
        color: 'var(--colors-neutral02-default)',
        cursor: 'pointer',
        margin: '0 var(--spacing-03) 0 0',
      },
      props: {
        disabled: {
          color: 'var(--colors-neutral05)',
          cursor: 'not-allowed',

          isInverse: {
            color: 'var(--colors-tint04)',
          },
        },
        hasError: {
          boxShadow: '0 0 0 2px var(--colors-danger-default)',

          isInverse: {
            boxShadow: '0 0 0 2px var(--colors-dangerInverse)',
          },
        },
        isChecked: {
          color: 'var(--colors-primary-default)',
        },
        isInverse: {
          color: 'var(--colors-neutral08)',
        },
        textPosition: {
          left: {
            margin: '0 0 0 var(--spacing-03)',
          },
        },
      },
    },
    Select: {
      components: {
        ChildrenContainer: {
          default: {
            alignItems: 'center',
            display: 'flex',
            flexGrow: '1',
            flexWrap: 'wrap',
          },
        },
        InputMessageContainer: {
          default: {
            flexGrow: '1',
          },
        },
        NoItemsMessage: {
          default: {
            color: 'var(--colors-neutral04)',
            display: 'block',
            paddingTop: 'var(--spacing-03)',
            textAlign: 'center',
          },
        },
        SelectContainerElement: {
          default: {
            alignItems: 'baseline',
            display: 'block',
            position: 'relative',
          },
          props: {
            left: {
              display: 'flex',
            },
          },
        },
        Shared: {
          components: {
            IconWrapper: {
              default: {
                paddingLeft: '12px',
              },
            },
            SelectContainer: {
              default: {
                position: 'relative',
              },
            },
            SelectText: {
              default: {
                flexGrow: '1',
                padding: '0 8px 0 4px',
              },
            },
            SelectedItemButton: {
              default: {
                alignSelf: 'center',
                background: 'var(--colors.neutral06)',
                borderRadius: '4px',
                border: '0',
                boxShadow: '0 0 0',
                display: 'flex',
                fontSize: '12px',
                lineHeight: '16px',
                height: '24px',
                margin: '4px 2px 4px 4px',
                padding:
                  'var(--spacing-02) var(--spacing-02) var(--spacing-02) var(--spacing-03)',
                position: 'relative',
                whiteSpace: 'nowrap',
              },
            },
            SelectedItemsWrapper: {
              default: {
                display: 'flex',
                flexGrow: '1',
                flexWrap: 'wrap',
                padding: '0 0 0 4px',
              },
            },
            StyledButton: {
              default: {
                alignItems: 'center',
                display: 'flex',
                textAlign: 'left',
              },
            },
            StyledCard: {
              default: {
                display: 'none',
                left: '4px',
                marginTop: '4px',
                padding: '4px 0 0',
                position: 'absolute',
                right: '4px',
                top: 'auto',
                zIndex: '2',
              },
              props: {
                isOpen: {
                  display: 'block',
                },
              },
            },
            StyledItem: {
              default: {
                alignSelf: 'center',
                background: 'transparent',
                border: '2px dotted',
                borderColor: 'transparent',
                cursor: 'default',
                lineHeight: '24px',
                margin: '0',
                padding: '8px 16px',
              },
              props: {
                isFocused: {
                  background: 'var(--colors-neutral06)',
                  borderColor: 'var(--colors-focus)',
                },
              },
            },
            StyledList: {
              default: {
                display: 'none',
                listStyle: 'none',
                margin: '0 0 4px',
                outline: 'none',
                padding: '0',
                maxHeight: '250px',
                overflowY: 'auto',
              },
              props: {
                isOpen: {
                  display: 'block',
                },
              },
            },
          },
        },
        StyledButton: {
          default: {
            alignItems: 'center',
            display: 'flex',
            height: 'auto',
            minHeight: 'var(--spacing-09)',
            padding: '0 var(--spacing-03) 0 var(--spacing-02)',
            textAlign: 'left',
          },
        },
      },
    },
    SelectionControls: {
      components: {
        InputStyles: {
          components: {
            DisplayInputActiveStyles: {
              default: {
                opacity: '0.4',
                transform: 'scale(0)',
                transition: 'transform 0s',
              },
            },
            DisplayInputStyles: {
              default: {
                alignItems: 'center',
                display: 'flex',
                height: 'var(--spacing-06)',
                flexShrink: '0',
                justifyContent: 'center',
                position: 'relative',
                transition: 'all 0.2s ease-out',
                width: 'var(--spacing-06)',

                '&:before': {
                  content: '',
                  position: 'absolute',
                },

                '&:after': {
                  content: '',
                  position: 'absolute',
                  borderRadius: '50%',
                  height: 'var(--spacing-09)',
                  left: 'calc(var(--spacing-03) * -1)',
                  opacity: '0',
                  padding: '50%',
                  top: 'calc(var(--spacing-03) * -1)',
                  transform: 'scale(1)',
                  transition: 'opacity 1s, transform 0.5s',
                  width: 'var(--spacing-09)',
                },
              },
            },
          },
        },
        StyledContainer: {
          default: {
            alignItems: 'baseline',
            display: 'flex',
            flexWrap: 'nowrap',
            position: 'relative',
          },
        },
        StyledLabel: {
          default: {
            alignItems: 'flex-start',
            color: 'inherit',
            display: 'flex',
            fontSize: 'var(--typeScale-size03-fontSize)',
            lineHeight: 'var(--typeScale-size03-lineHeight)',
            margin: '0',
            padding: 'var(--spacing-03) 0',
          },
          props: {
            isInverse: {
              color: 'var(--colors-neutral08)',
            },
          },
        },
      },
    },
    SkipLink: {
      left: '-9999px',
      position: 'fixed',
      top: '-9999px',

      '&:focus': {
        left: '10px',
        top: '10px',
        zIndex: '99999',
      },
    },
    Spinner: {
      default: {
        animation: 'spinner-border 0.75s linear infinite',
        border: `2px solid var(--colors-primary-default)`,
        borderRightColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        height: 'var(--iconSize-xSmall)',
        width: 'var(--iconSize-xSmall)',

        '@keyframes spinner-border': {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
    StyledButton: {
      components: {
        buttonStyles: {
          default: {
            alignItems: 'center',
            background: 'var(--colors-primary-default)',
            border: '0',
            borderColor: 'var(--colors-primary-default)',
            borderRadius: 'var(--borderRadius)',
            color: 'var(--colors-neutral08)',
            cursor: 'pointer',
            display: 'inline-flex',
            flexShrink: '0',
            fontFamily: 'var(--bodyFont)',
            fontSize: 'var(--typeScale-size03-fontSize)',
            fontWeight: '600',
            height: 'var(--spacing-09)',
            justifyContent: 'center',
            lineHeight: 'var(--typeScale-size03-lineHeight)',
            margin: 'var(--spacing-02)',
            minWidth: 'var(--spacing13)',
            overflow: 'hidden',
            padding: 'var(--spacing-04) var(--spacing-05)',
            position: 'relative',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'uppercase',
            touchAction: 'manipulation',
            transition:
              'background 0.35s, border-color 0.35s, box-shadow 0.35s, color 0.35s',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',

            svg: {
              flexShrink: '0',
            },

            '&:not(:disabled)': {
              '&:active': {
                background: 'darken(0.2, cssVar("--colors-primary")',
                color: 'var(--colors-neutral08)',

                '&:after': {
                  opacity: '0.4',
                  transform: 'translate(-50%, -50%) scale(0)',
                  transition: 'transform 0s',
                },
              },
              '&:after': {
                background: 'var(--colors-neutral08)',
                borderRadius: '50%',
                content: '',
                height: 'var(--spacing-07)',
                left: '50%',
                opacity: '0',
                padding: '50%',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
                transition: 'opacity 1s, transform 0.5s',
                width: 'var(--spacing-07)',
              },
              '&:focus': {
                outline: '2px dotted var(--colors-focus)',
                outlineOffset: '3px',
              },
              '&:hover': {
                background: 'darken(0.1, cssVar("--colors-primary")',
                color: 'var(--colors-neutral08)',
              },
            },
          },
          props: {
            colors: {
              danger: {
                background: 'var(--colors-danger-default)',
                borderColor: 'var(--colors-danger-default)',
                color: 'var(--colors-danger-default)',

                '&:not(:disabled)': {
                  '&:active': {
                    background: 'tint(0.7, cssVar("--colors-danger")',
                    color: 'darken(0.2, cssVar("--colors-danger")',
                  },
                },
                '&:hover': {
                  background: 'darken(0.1, cssVar("--colors-danger")',
                  color: 'darken(0.1, cssVar("--colors-danger")',
                },
              },
              marketing: {
                background: 'var(--colors-pop04)',
                borderColor: 'var(--colors-pop04)',
                color: 'var(--colors-foundation02)',

                '&:not(:disabled)': {
                  '&:active': {
                    background: 'tint(0.7, cssVar("--colors-pop04")',
                    color: 'darken(0.2, cssVar("--colors-pop04")',
                  },
                },
                '&:hover': {
                  background: 'lighten(0.1, cssVar("--colors-pop04")',
                  color: 'var(--colors-foundation02)',
                },
              },
              secondary: {
                background: 'var(--colors-neutral08)',
                border: '2px solid',
                color: 'var(--colors-neutral)',

                '&:not(:disabled)': {
                  '&:active': {
                    background: 'tint(0.7, cssVar("--colors-neutral")',
                    color: 'darken(0.2, cssVar("--colors-neutral")',
                  },
                },
                '&:hover': {
                  background: 'var(--colors-neutral)',
                  color: 'darken(0.1, cssVar("--colors-neutral08")',
                },
              },
              solid: {
                isInverse: {
                  danger: {
                    '&:hover': {
                      background: 'tint(0.9, cssVar("--colors-danger")',
                      color: 'darken(0.1, cssVar("--colors-danger")',
                    },
                  },
                  secondary: {
                    '&:hover': {
                      background: 'tint(0.9, cssVar("--colors-neutral")',
                      color: 'darken(0.1, cssVar("--colors-neutral")',
                    },
                  },
                  success: {
                    '&:hover': {
                      background: 'tint(0.9, cssVar("--colors-success")',
                      color: 'darken(0.1, cssVar("--colors-success")',
                    },
                  },
                },
              },
              success: {
                background: 'var(--colors-success-default)',
                borderColor: 'var(--colors-success-default)',
                color: 'var(--colors-success-default)',

                '&:not(:disabled)': {
                  '&:active': {
                    background: 'tint(0.7, cssVar("--colors-success")',
                    color: 'darken(0.2, cssVar("--colors-success")',
                  },
                },
                '&:hover': {
                  background: 'darken(0.1, cssVar("--colors-success")',
                  color: 'darken(0.1, cssVar("--colors-neutral08")',
                },
              },
            },
            disabled: {
              default: {
                background: 'var(--colors-neutral06)',
                borderColor: 'var(--colors-neutral06)',
                color: 'var(--colors-disabledText)',
                cursor: 'not-allowed',
              },
              props: {
                isInverse: {
                  props: {
                    outline: {
                      borderColor: 'var(--colors-disabledInverseText)',
                      color: 'var(--colors-disabledInverseText)',
                    },
                  },
                },
              },
            },
            isFullWidth: {
              display: 'flex',
              margin: 'var(--spacing-02) 0',
              width: '100%',
            },
            isIconOnly: {
              default: {
                display: 'inline-flex',
                justifyContent: 'center',
                lineHeight: '1',
                minWidth: '0',
                padding: '0',
                width: 'var(--08)',
              },
              size: {
                small: {
                  width: 'var(--08)',
                },
                large: {
                  width: 'var(--08)',
                },
              },
            },
            isInverse: {
              default: {
                background: 'var(--colors-neutral08)',
                borderColor: 'var(--colors-neutral08)',
                color: 'var(--colors-neutral08)',

                '&:not(:disabled)': {
                  '&:focus': {
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'var(--colors-neutral08)',
                    outline: '2px dotted var(--colors-focusInverse)',
                    outlineOffset: '3px',
                  },
                },
              },
              props: {
                danger: {
                  '&:not(:disabled)': {
                    '&:active': {
                      background: 'darken(0.2, cssVar("--colors-danger")',
                      color: 'var(--colors-neutral08)',
                    },
                  },
                },
                secondary: {
                  '&:not(:disabled)': {
                    '&:active': {
                      background: 'darken(0.2, cssVar("--colors-neutral08")',
                      color: 'var(--colors-neutral08)',
                    },
                  },
                },
                success: {
                  '&:not(:disabled)': {
                    '&:active': {
                      background: 'darken(0.2, cssVar("--colors-success")',
                      color: 'var(--colors-neutral08)',
                    },
                  },
                },
              },
            },
            outline: {
              default: {
                border: '2px solid',
              },
            },
            shape: {
              leftCap: {
                borderRadius: 'var(--borderRadius) 0 0 var(--borderRadius)',
              },
              rightCap: {
                borderRadius: '0 var(--borderRadius) var(--borderRadius) 0',
              },
              round: {
                borderRadius: '100%',
              },
            },
            size: {
              large: {
                default: {
                  fontSize: 'var(--typeScale-size04-fontSize)',
                  height: 'var(--spacing11)',
                  lineHeight: 'var(--typeScale-size04-lineHeight)',
                  padding: 'var(--spacing-04) var(--spacing-06)',
                },
              },
              small: {
                default: {
                  fontSize: 'var(--typeScale-size01-lineHeight)',
                  height: 'var(--spacing-07)',
                  lineHeight: 'var(--typeScale-size01-lineHeight)',
                  minWidth: '0',
                  padding: 'var(--spacing-02) var(--spacing-03)',
                },
              },
            },
          },
        },
      },
    },
    Table: {
      components: {
        TableCell: {
          default: {
            borderRight: '0',
            borderColor: 'var(--colors-neutral06)',
            display: 'table-cell',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            padding: 'var(--spacing-04) var(--spacing-05)',
            textAlign: 'left',
          },
          props: {
            density: {
              compact: {
                padding: 'var(--spacing-02) var(--spacing-03)',
              },
              loose: {
                padding: 'var(--spacing-06) var(--spacing-08)',
              },
            },
            hasVerticalBorders: {
              borderRight: '1px solid',
            },
            isInverse: {
              borderColor: 'var(--colors-tint04)',
            },
            TableCellAlign: {
              center: {
                textAlign: 'center',
              },
              inherit: {
                textAlign: 'inherit',
              },
              justify: {
                textAlign: 'justify',
              },
              left: {
                textAlign: 'left',
              },
              right: {
                textAlign: 'right',
              },
            },
            TextTransform: {
              capitalize: {
                textTransform: 'capitalize',
              },
              lowercase: {
                textTransform: 'lowercase',
              },
              uppercase: {
                textTransform: 'uppercase',
              },
            },
          },
        },
        TableContainer: {
          default: {
            overflowX: 'auto',
          },
        },
        TableHeaderCell: {
          components: {
            IconWrapper: {
              default: {
                paddingLeft: 'var(--spacing-03)',
                position: 'relative',
                top: 'var(--spacing-02)',
              },
            },
            SortButton: {
              default: {
                alignItems: 'flex-end',
                background: 'none',
                border: '0',
                color: 'inherit',
                display: 'flex',
                justifyContent: 'flext-start',
                margin: '0',
                padding: 'var(--spacing-04) var(--spacing-05)',
                textAlign: 'left',
                width: '100%',

                '&:focus': {
                  background: 'var(--colors-neutral06)',
                  outline: '2px dotted var(--colors-focus)',
                  outlineOffset: '-2px',

                  svg: {
                    fill: 'var(--colors-neutral)',
                  },
                },

                '&:hover': {
                  background: 'var(--colors-neutral06)',

                  svg: {
                    fill: 'var(--colors-neutral)',
                  },
                },
              },
              props: {
                isInverse: {
                  '&:focus': {
                    background: 'var(--colors-tint)',
                    outline: '2px dotted var(--colors-focusInverse)',

                    svg: {
                      fill: 'var(--colors-neutral08)',
                    },
                  },
                  '&:hover': {
                    background: 'var(--colors-tint)',

                    svg: {
                      fill: 'var(--colors-neutral08)',
                    },
                  },
                },
                TableCellAlign: {
                  right: {
                    textALign: 'flex-end',
                  },
                },
                TableCellDensity: {
                  compact: {
                    padding: 'var(--spacing-02) var(--spacing-03)',
                  },
                  default: {
                    padding: 'var(--spacing-04) var(--spacing-05)',
                  },
                  loose: {
                    padding: 'var(--spacing-06) var(--spacing-08)',
                  },
                },
              },
            },
          },
          default: {
            background: 'var(--colors-neutral07-default)',
            borderBottom: '2px solid',
            fontWweight: 'bold',
            verticalAlign: 'bottom',
          },
          props: {
            isInverse: {
              background: 'var(--colors-tint03)',
            },
            isSortable: {
              padding: '0',
            },
            width: {
              width: '100%',
            },
          },
        },
        TablePagination: {
          components: {
            PageCount: {
              default: {
                margin: '0 var(--spacing-08)',
              },
            },
            RowsPerPageLabel: {
              default: {
                fontWeight: '600',
                lineHeight: '20px',
                margin: '0 16px 0 0',
                textAlign: 'left',
              },
            },
          },
          default: {
            alignItems: 'center',
            background: 'var(--colors-neutral07-default)',
            borderTop: '1px solid var(--colors-neutral06)',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 'var(--spacing-02)',
          },
          props: {
            isInverse: {
              background: 'var(--colors-tint03)',
              borderTop: '1px solid var(--colors-neutral08)',
            },
          },
        },
        TableRow: {
          default: {
            borderBottom: '1px solid var(--colors-neutral06)',
            color: 'inherit',
            display: 'table-row',
            outline: '0',
            verticalAlign: 'top',
            background: 'none',

            '&:last-child': {
              borderBottom: '0',
            },
          },
          props: {
            color: {
              danger: {
                background: 'var(--colors-danger-default)',
                color: 'var(--colors-neutral08)',
              },
              default: {
                background: 'inherit',
                color: 'inherit',
              },
              info: {
                background: 'var(--colors-primary-default)',
                color: 'var(--colors-neutral08)',
              },
              success: {
                background: 'var(--colors-success-default)',
                color: 'var(--colors-neutral08)',
              },
              warning: {
                background: 'var(--colors-pop04)',
                color: 'var(--colors-neutral)',
              },
            },
            hasHoverStyles: {
              default: {
                '&:hover': {
                  background: 'var(--colors-tone02)',
                },
              },
              props: {
                isInverse: {
                  '&:hover': {
                    background: 'var(--colors-tint02)',
                  },
                },
              },
            },
            hasZebraStripes: {
              default: {
                '&:nth-of-type(even)': {
                  background: 'var(--colors-tone)',
                },
              },
              props: {
                isInverse: {
                  '&:nth-of-type(even)': {
                    background: 'var(--colors-tint)',
                  },
                },
              },
            },
            isInverse: {
              borderBottom: '1px solid var(--colors-tint04)',
            },
          },
        },
      },
      default: {
        borderCollapse: 'collapse',
        borderSpacing: '0',
        color: 'var(--colors-neutral)',
        display: 'table',
        fontSize: 'var(--typeScale-size03-fontSize)',
        lineHeight: 'var(--typeScale-size03-lineHeight)',
        minWidth: '600px',
        width: '100%',
      },
      props: {
        isInverse: {
          color: 'var(--colors-neutral08)',
        },
        TableCellAlign: {
          center: 'center',
          inherit: 'inherit',
          justify: 'justify',
          left: 'left',
          right: 'right',
        },
        TableDensity: {
          compact: 'compact',
          loose: 'loose',
          normal: 'normal',
        },
        TableRowColor: {
          danger: 'danger',
          info: 'info',
          success: 'success',
          warning: 'warning',
        },
        TableSortDirection: {
          ascending: 'ascending',
          descending: 'descending',
          none: 'none',
        },
      },
    },
    Tabs: {
      components: {
        StyledIcon: {
          default: {
            display: 'flex',
            margin: '0 0 var(--spacing-02)',

            svg: {
              height: '20px',
              width: '20px',
            },
          },
          props: {
            iconPosition: {
              bottom: {
                margin: 'var(--spacing-02) 0 0',
              },
              left: {
                margin: '0 var(--spacing-03) 0 0',
              },
              right: {
                margin: '0 0 0 var(--spacing-03)',
              },
              top: {
                margin: '0 0 var(--spacing-02)',
              },
            },
          },
        },
        StyledTabsChild: {
          default: {
            flexGrow: '0',
            flexShrink: '0',
            height: '100%',
            listStyle: 'none',
            margin: '0',
            maxWidth: '250px',
            padding: '0',
            position: 'relative',
            whiteSpace: 'normal',
            width: 'auto',

            '&:after': {
              background: 'var(--colors-primary-default)',
              borderRadius: '2px',
              content: '',
              display: 'block',
              height: '4px',
              position: 'absolute',
              opacity: '0',
              transition: '0.4s all',
              width: 'auto',
              bottom: '0',
              left: '50%',
              right: '50%',
              top: 'auto',
            },
          },
          props: {
            borderPosition: {
              top: {
                '&:after': {
                  bottom: 'auto',
                  top: '0',
                },
              },
            },
            isActive: {
              '&:after': {
                opacity: '1',
                left: '0',
                right: '0',
              },
            },
            isFullWidth: {
              flexShrink: '1',
              maxWidth: '100%',
              width: '100%',
            },
            isInverse: {
              '&:after': {
                background: 'var(--colors-pop02)',
              },
            },
            orientation: {
              vertical: {
                height: 'auto',
                width: '100%',

                '&:after': {
                  default: {
                    height: 'auto',
                    width: '4px',
                    bottom: '50%',
                    left: '0',
                    right: 'auto',
                    top: '50%',
                  },
                  props: {
                    borderPosition: {
                      right: {
                        left: 'auto',
                        right: '0',
                      },
                    },
                    isActive: {
                      bottom: '0',
                      top: '0',
                    },
                  },
                },
              },
            },
          },
        },
        TabPanel: {
          default: {
            background: 'var(--colors-neutral08)',
            color: 'var(--colors-neutral08)',
            flex: '1',
            height: '100%',
            padding: '20px',
          },
          props: {
            isInverse: {
              background: 'var(--colors-foundation02)',
              color: 'var(--colors-neutral08)',
            },
          },
        },
      },
      default: {
        alignItems: 'center',
        background: 'transparent',
        border: '0',
        color: 'var(--colors-neutral03)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '0',
        flexShrink: '0',
        fontWeight: '600',
        fontSize: 'var(--typeScale-size02-fontSize)',
        lineHeight: 'var(--typeScale-size02-lineHeight)',
        height: '100%',
        justifyContent: 'center',
        opacity: '1',
        padding: 'var(--spacing-04) var(--spacing-05)',
        position: 'relative',
        pointerEvents: '',
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        width: 'auto',

        '&:hover': {
          backgroundColor: 'var(--colors-shade)',
          color: 'var(--colors-neutral02-default)',
        },
        '&:focus': {
          backgroundColor: 'var(--colors-shade)',
          color: 'var(--colors-neutral02-default)',
          outlineOffset: '-2px',
          outline: 'dotted 2px var(--colors-focus)',
        },
      },
      props: {
        disabled: {
          default: {
            cursor: 'auto',
            opacity: '0.4',
            pointerEvents: 'none',
          },
        },
        isActive: {
          default: {
            color: 'var(--colors-primary-default)',

            '&:hover': {
              backgroundColor: '',
              color: 'var(--colors-primary-default)',
            },
            '&:focus': {
              backgroundColor: '',
              color: 'var(--colors-primary-default)',
            },
          },
          props: {
            isInverse: {
              '&:hover': {
                color: 'var(--colors-neutral08)',
              },
              '&:focus': {
                color: 'var(--colors-neutral08)',
              },
            },
          },
        },
        isFullWidth: {
          default: {
            flexShrink: '1',
            width: '100%',
          },
        },
        isInverse: {
          default: {
            color: 'var(--colors-neutral08)',
            opacity: '0.7',

            '&:hover': {
              backgroundColor: 'var(--colors-shade02)',
              color: 'var(--colors-neutral08)',
            },
            '&:focus': {
              backgroundColor: 'var(--colors-shade02)',
              color: 'var(--colors-neutral08)',
              outline: '2px dotted var(--colors-focusInverse)',
            },
          },
        },
        orientation: {
          vertical: {
            justifyContent: 'flex-end',
            textAlign: 'left',
            width: '100%',
            alignItems: 'center',
          },
        },
        TabsIconPosition: {
          bottom: {
            flexDirection: 'column-reverse',
          },
          left: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
          },
          right: {
            flexDirection: 'row-reverse',
          },
          top: {
            flexDirection: 'column',
          },
        },
      },
    },
  },
};
