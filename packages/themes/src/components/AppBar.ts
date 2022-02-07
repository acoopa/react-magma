export const AppBar = {
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
};
