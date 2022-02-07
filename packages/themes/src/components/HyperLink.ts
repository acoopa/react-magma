export const Hyperlink = {
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
};
