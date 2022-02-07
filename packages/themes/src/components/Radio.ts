export const Radio = {
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
};
