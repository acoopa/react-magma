import { ThemeTransitions, transitions } from './components/transition';
import { Accordion } from './components/Accordion';
import { Alert } from './components/Alert';
import { AppBar } from './components/AppBar';
import { Badge } from './components/Badge';
import { Banner } from './components/Banner';
import { Breadcrumb } from './components/Breadcrumb';
import { Card } from './components/Card';
import { Checkbox } from './components/Checkbox';
import { Combobox } from './components/Combobox';
import { Container } from './components/Container';
import { DatePicker } from './components/DatePicker';
import { Dropdown } from './components/Dropdown';
import { Form } from './components/Form';
import { FormFieldContainer } from './components/FormFieldContainer';
import { Hyperlink } from './components/HyperLink';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { LoadingIndicator } from './components/LoadingIndicator';
import { Modal } from './components/Modal';
import { ProgressBar } from './components/ProgressBar';
import { ProgressRing } from './components/ProgressRing';
import { Radio } from './components/Radio';
import { Select } from './components/Select';
import { SelectionControls } from './components/SelectionControls';
import { SkipLink } from './components/SkipLink';
import { Spinner } from './components/Spinner';
import { Button } from './components/Button';
import { Table } from './components/Table';
import { Tabs } from './components/Tabs';

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

// interface AppBar {
//   backgroundColor: string;
//   height: string;
//   padding: string;
//   textColor: string;
//   compact: {
//     height: string;
//     padding: string;
//   };
//   inverse: {
//     backgroundColor: string;
//     textColor: string;
//   };
// }
// export interface Modal {
//   width: {
//     small: string;
//     medium: string;
//     large: string;
//   };
// }

// interface Drawer {
//   default: {
//     maxWidth: string;
//     minHeight: string;
//     borderRadius: string;
//     margin: string;
//     top: string;
//     bottom: string;
//     left: string;
//     right: string;
//     position: string;
//   };
//   right: {
//     left: string;
//     height: string;
//     width: string;
//   };
//   left: {
//     right: string;
//     height: string;
//     width: string;
//   };
//   top: {
//     bottom: string;
//     height: string;
//   };
//   bottom: {
//     top: string;
//     height: string;
//   };
// }

// interface Combobox {
//   menu: {
//     maxHeight: string;
//   };
// }

// interface Dropdown {
//   content: {
//     maxHeight: string;
//   };
// }

// interface Select {
//   menu: {
//     maxHeight: string;
//   };
// }

// interface Tabs {
//   approxTabSize: {
//     horizontal: number;
//     vertical: number;
//   };
// }

// export interface Tooltip {
//   arrowSize: string;
//   arrowSizeDoubled: string;
//   backgroundColor: string;
//   fontWeight: number | string;
//   maxWidth: string;
//   textColor: string;
//   typeScale: TypeScaleSize;
//   zIndex: number;
//   inverse: any;
// }

export interface ThemeInterface {
  appBar: any;
  breakpoints: Breakpoints;
  bodyFont: string;
  bodyExpressiveFont: string;
  bodyNarrativeFont: string;
  borderRadius: string;
  colors: Colors;
  combobox: any;
  direction: string;
  drawer: any;
  dropdown: any;
  headingFont: string;
  iconSizes: IconSizes;
  spacingMultiplier: number;
  // spaceScale: SpacingScale;
  headingExpressiveFont: string;
  headingNarrativeFont: string;
  select: any;
  typeScale: TypeScale;
  typographyVisualStyles: TypographyVisualStyles;
  typographyExpressiveVisualStyles: TypographyVisualStyles;
  typographyNarrativeVisualStyles: TypographyVisualStyles;
  modal: any;
  tabs: any;
  tooltip: any;
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
    Accordion,
    Alert,
    AppBar,
    Badge,
    Banner,
    Breadcrumb,
    Button,
    Card,
    Checkbox,
    Combobox,
    Container,
    DatePicker,
    Dropdown,
    Form,
    FormFieldContainer,
    Hyperlink,
    Input,
    Label,
    LoadingIndicator,
    Modal,
    ProgressBar,
    ProgressRing,
    Radio,
    Select,
    SelectionControls,
    SkipLink,
    Spinner,
    Table,
    Tabs,
  },
};
