import { breakpoints } from '../breakpoints';

export const Alert = {
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

    [`@media (max-width: ${breakpoints.small})`]: {
      fontSize: 'var(--fontSize-02)',
      lineHeight: 'var(--lineHeight-02)',
    },
  },
  props: {
    isInverse: {
      default: {
        '&:focus': {
          outline: '2px dotted var(--colors-focusInverse)',
        },
      },
    },
    isToast: {
      default: {
        animation: 'placeholder and keyframes',
        minWidth: '375px',
        margin: '0 auto',

        [`@media (max-width: ${breakpoints.small})`]: {
          minWidth: 0,
          width: '100%',
        },
      },
    },
  },
  components: {
    AlertContents: {
      default: {
        alignSelf: 'center',
        flexGrow: 1,
        padding: 'var(--spacing-04) 0',

        [`@media (max-width: ${breakpoints.small})`]: {
          paddingLeft: 'var(--spacing-04)',
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

        [`@media (max-width: ${breakpoints.small})`]: {
          minWidth: 0,
          width: '100%',
        },
      },
      props: {
        variant: {
          info: {
            default: {
              backgroundColor: 'var(--colors-neutral)',
            },
          },
          danger: {
            default: {
              color: 'var(--colors-neutral08)',
              backgroundColor: 'var(--colors-danger-default)',
            },
          },
          success: {
            default: {
              color: 'var(--colors-neutral08)',
              backgroundColor: 'var(--colors-success-default)',
            },
          },
          warning: {
            default: {
              color: 'var(--colors-neutral)',
              backgroundColor: 'var(--colors-pop04)',
            },
          },
        },
        isInverse: {
          default: {
            color: 'var(--colors-neutral08)',
          },
        },
        isToast: {
          default: {
            animation: 'placeholder and keyframes',
            minWidth: '375px',
            margin: '0 auto',
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
          default: {
            background: 'var(--colors-focusInverse)',
            '&&:focus:not(:disabled)': {
              outline: '2px dotted var(--colors-focusInverse)',
            },
          },
        },
      },
    },
    IconWrapper: {
      default: {
        padding: '0 var(--spacing-03) 0 var(--spacing-04)',

        [`@media (max-width: ${breakpoints.small})`]: {
          display: 'none',
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
};
