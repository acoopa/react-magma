export const Badge = {
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
        default: {
          background: 'var(--colors-danger-default)',
        },
      },
      light: {
        default: {
          background: 'var(--colors-neutral07-default)',
          borderColor: 'var(--colors-neutral06)',
          color: 'var(--colors-neutral)',
        },
      },
      primary: {
        default: {
          background: 'var(--colors-primary-default)',
        },
      },
      secondary: {
        default: {
          background: 'var(--colors-neutral02-default)',
        },
      },
      success: {
        default: {
          background: 'var(--colors-success-default)',
        },
      },
    },
  },
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
            default: {
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
          },
          light: {
            default: {
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
          },
          primary: {
            default: {
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
          },
          secondary: {
            default: {
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
          },
          success: {
            default: {
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
  },
};
