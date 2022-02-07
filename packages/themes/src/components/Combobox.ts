export const Combobox = {
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
};
