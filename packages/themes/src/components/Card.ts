import { breakpoints } from '../breakpoints';

export const Card = {
  default: {
    backgroundColor: 'var(--colors-neutral08)',
    border: '1px solid var(--colors-neutral06)',
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
    align: {
      center: {
        default: {
          textAlign: 'center',
        },
      },
      default: {
        default: {
          textAlign: 'left',
        },
      },
      right: {
        default: {
          textAlign: 'right',
        },
      },
    },
    calloutType: {
      _base: {
        paddingLeft: 'var(--spacing-02)',
        '&:before': {
          borderRadius: 'var(--borderRadius) 0 0 var(--borderRadius)',
          content: "''",
          display: 'block',
          height: '100%',
          position: 'absolute',
          left: 0,
          width: 'var(--spacing-02)',
        },
      },
      danger: {
        default: {
          '&:before': {
            backgroundColor: 'var(--colors-danger-default)',
          },
        },
        props: {
          isInverse: {
            '&:before': {
              backgroundColor: 'var(--colors-dangerInverse)',
            },
          },
        },
      },
      primary: {
        default: {
          '&:before': {
            backgroundColor: 'var(--colors-primary-default)',
          },
        },
        props: {
          isInverse: {
            '&:before': {
              backgroundColor: 'var(--colors-foundation-04)',
            },
          },
        },
      },
      success: {
        default: {
          '&:before': {
            backgroundColor: 'var(--colors-success-default)',
          },
        },
        props: {
          isInverse: {
            '&:before': {
              backgroundColor: 'var(--colors-successInverse)',
            },
          },
        },
      },
      warning: {
        default: {
          '&:before': {
            backgroundColor: 'var(--colors-pop04)',
          },
        },
        props: {
          isInverse: {
            '&:before': {
              backgroundColor: 'var(--colors-pop-04)',
            },
          },
        },
      },
    },
    hasDropShadow: {
      default: {
        boxShadow: '0 2px 6px 0 rgba(0,0,0,0.18)',
      },
    },
    isInverse: {
      default: {
        backgroundColor: 'var(--colors-foundation)',
        color: 'var(--colors-neutral08)',
      },
    },
  },
  components: {
    CardBody: {
      default: {
        padding: 'var(--spacing-05)',

        [`@media (max-width: ${breakpoints.small})`]: {
          padding: 'var(--spacing-06)',
        },
      },
      props: {
        align: {
          center: {
            default: {
              textAlign: 'center',
            },
          },
          left: {
            default: {
              textAlign: 'left',
            },
          },
          right: {
            default: {
              textAlign: 'right',
            },
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
};
