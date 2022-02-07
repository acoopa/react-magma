import { breakpoints } from '../breakpoints';

export const Banner = {
  components: {
    BannerContents: {
      default: {
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 'var(--spacing-04)',

        [`@media (max-width: ${breakpoints.small})`]: {
          justifyContent: 'flex-start',
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

        [`@media (max-width: ${breakpoints.small})`]: {
          display: 'none',
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

    [`@media (max-width: ${breakpoints.small})`]: {
      textAlign: 'left',
      fontSize: 'var(--typeScale-size02-fontSize)',
      lineHeight: 'var(--typeScale-size02-lineHeight)',
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
};
