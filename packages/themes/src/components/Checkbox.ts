export const Checkbox = {
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
};
