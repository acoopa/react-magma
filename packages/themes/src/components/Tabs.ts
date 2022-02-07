export const Tabs = {
  components: {
    StyledIcon: {
      default: {
        display: 'flex',
        margin: '0 0 var(--spacing-02)',

        svg: {
          height: '20px',
          width: '20px',
        },
      },
      props: {
        iconPosition: {
          bottom: {
            margin: 'var(--spacing-02) 0 0',
          },
          left: {
            margin: '0 var(--spacing-03) 0 0',
          },
          right: {
            margin: '0 0 0 var(--spacing-03)',
          },
          top: {
            margin: '0 0 var(--spacing-02)',
          },
        },
      },
    },
    StyledTabsChild: {
      default: {
        flexGrow: '0',
        flexShrink: '0',
        height: '100%',
        listStyle: 'none',
        margin: '0',
        maxWidth: '250px',
        padding: '0',
        position: 'relative',
        whiteSpace: 'normal',
        width: 'auto',

        '&:after': {
          background: 'var(--colors-primary-default)',
          borderRadius: '2px',
          content: '',
          display: 'block',
          height: '4px',
          position: 'absolute',
          opacity: '0',
          transition: '0.4s all',
          width: 'auto',
          bottom: '0',
          left: '50%',
          right: '50%',
          top: 'auto',
        },
      },
      props: {
        borderPosition: {
          top: {
            '&:after': {
              bottom: 'auto',
              top: '0',
            },
          },
        },
        isActive: {
          '&:after': {
            opacity: '1',
            left: '0',
            right: '0',
          },
        },
        isFullWidth: {
          flexShrink: '1',
          maxWidth: '100%',
          width: '100%',
        },
        isInverse: {
          '&:after': {
            background: 'var(--colors-pop02)',
          },
        },
        orientation: {
          vertical: {
            height: 'auto',
            width: '100%',

            '&:after': {
              default: {
                height: 'auto',
                width: '4px',
                bottom: '50%',
                left: '0',
                right: 'auto',
                top: '50%',
              },
              props: {
                borderPosition: {
                  right: {
                    left: 'auto',
                    right: '0',
                  },
                },
                isActive: {
                  bottom: '0',
                  top: '0',
                },
              },
            },
          },
        },
      },
    },
    TabPanel: {
      default: {
        background: 'var(--colors-neutral08)',
        color: 'var(--colors-neutral08)',
        flex: '1',
        height: '100%',
        padding: '20px',
      },
      props: {
        isInverse: {
          background: 'var(--colors-foundation02)',
          color: 'var(--colors-neutral08)',
        },
      },
    },
  },
  default: {
    alignItems: 'center',
    background: 'transparent',
    border: '0',
    color: 'var(--colors-neutral03)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '0',
    flexShrink: '0',
    fontWeight: '600',
    fontSize: 'var(--typeScale-size02-fontSize)',
    lineHeight: 'var(--typeScale-size02-lineHeight)',
    height: '100%',
    justifyContent: 'center',
    opacity: '1',
    padding: 'var(--spacing-04) var(--spacing-05)',
    position: 'relative',
    pointerEvents: '',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    width: 'auto',

    '&:hover': {
      backgroundColor: 'var(--colors-shade)',
      color: 'var(--colors-neutral02-default)',
    },
    '&:focus': {
      backgroundColor: 'var(--colors-shade)',
      color: 'var(--colors-neutral02-default)',
      outlineOffset: '-2px',
      outline: 'dotted 2px var(--colors-focus)',
    },
  },
  props: {
    disabled: {
      default: {
        cursor: 'auto',
        opacity: '0.4',
        pointerEvents: 'none',
      },
    },
    isActive: {
      default: {
        color: 'var(--colors-primary-default)',

        '&:hover': {
          backgroundColor: '',
          color: 'var(--colors-primary-default)',
        },
        '&:focus': {
          backgroundColor: '',
          color: 'var(--colors-primary-default)',
        },
      },
      props: {
        isInverse: {
          '&:hover': {
            color: 'var(--colors-neutral08)',
          },
          '&:focus': {
            color: 'var(--colors-neutral08)',
          },
        },
      },
    },
    isFullWidth: {
      default: {
        flexShrink: '1',
        width: '100%',
      },
    },
    isInverse: {
      default: {
        color: 'var(--colors-neutral08)',
        opacity: '0.7',

        '&:hover': {
          backgroundColor: 'var(--colors-shade02)',
          color: 'var(--colors-neutral08)',
        },
        '&:focus': {
          backgroundColor: 'var(--colors-shade02)',
          color: 'var(--colors-neutral08)',
          outline: '2px dotted var(--colors-focusInverse)',
        },
      },
    },
    orientation: {
      vertical: {
        justifyContent: 'flex-end',
        textAlign: 'left',
        width: '100%',
        alignItems: 'center',
      },
    },
    TabsIconPosition: {
      bottom: {
        flexDirection: 'column-reverse',
      },
      left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      right: {
        flexDirection: 'row-reverse',
      },
      top: {
        flexDirection: 'column',
      },
    },
  },
};
