export const Dropdown = {
  components: {
    DropdownContent: {
      components: {
        StyledCard: {
          default: {
            display: 'none',
            left: 'var(--spacing-02)',
            opacity: '0',
            outline: '0',
            overflowY: 'auto',
            padding: 'var(--spacing-03) 0',
            position: 'absolute',
            transition: 'opacity 0.3s',
            whiteSpace: 'nowrap',
          },
          props: {
            dropAlignment: {
              end: {
                left: 'auto',
                right: 'var(--spacing-02)',
                dropDirection: {
                  left: {
                    bottom: 'var(--spacing-02)',
                    top: 'auto',
                    left: 'unset',
                    right: 'unset',
                  },
                  right: {
                    bottom: 'var(--spacing-02)',
                    top: 'auto',
                    left: 'unset',
                    right: 'unset',
                  },
                },
              },
            },
            dropDirection: {
              left: {
                left: 'auto',
                right: '100%',
                top: 'var(--spacing-02)',
              },
              right: {
                left: '100%',
                top: 'var(--spacing-02)',
              },
              up: {
                top: 'auto',
                bottom: '100%',
              },
            },
            isOpen: {
              display: 'block',
              opacity: '1',
            },
            maxHeight: {
              maxHeight: 'var(--dropdown-content-maxHeight)',
            },
            width: {
              whiteSpace: 'normal',
            },
          },
        },
        StyledDiv: {
          default: {
            padding: 'var(--spacing-02) 0',
          },
        },
      },
    },
    DropdownDivider: {
      components: {
        StyledHr: {
          default: {
            background: 'var(--colors-neutral06)',
            border: '0',
            height: '1px',
            margin: 'var(--spacing-02) 0',
          },
        },
      },
    },
    DropdownHeader: {
      components: {
        StyledDiv: {
          default: {
            color: 'var(--colors-neutral03)',
            fontSize: 'var(--typeScale-size01-fontSize)',
            lineHeight: 'var(--typeScale-size01-lineHeight)',
            fontWeight: 'bold',
            margin: ',',
            padding: 'var(--spacing-03) var(--spacing-05) var(--spacing-02)',
            textTransform: 'uppercase',
          },
        },
      },
    },
    DropdownMenuItem: {
      components: {
        IconWrapper: {
          default: {
            color: 'var(--colors-neutral03)',
            display: 'inline-flex',
            marginRight: 'var(--spacing-05)',

            svg: {
              height: 'var(--iconSizes-medium) px',
              width: 'var(--iconSizes-medium) px',
            },
          },
        },
        MenuItemStyles: {
          default: {
            alignItems: 'center',
            color: 'var(--colors-neutral)',
            cursor: 'pointer',
            display: 'flex',
            fontSize: 'var(--typeScale-size03-fontSize)',
            lineHeight: 'var(--typeScale-size03-lineHeight)',
            margin: '0',
            padding: 'var(--spacing-03) var(--spacing-05)',
            whiteSpace: 'nowrap',

            '&:hover': {
              background: 'var(--colors-neutral07-default)',
            },

            '&:focus': {
              background: 'var(--colors-neutral07-default)',
              outlineOffset: '-3px',
            },
          },
          props: {
            disabled: {
              color: 'var(--colors-disabledText)',
              cursor: 'not-allowed',

              '&:hover': {
                background: 'none',
              },

              '&:focus': {
                background: 'none',
              },
            },
            isFixedWidth: {
              whiteSpace: 'normal',
            },
            isInactive: {
              padding:
                'var(--spacing-03) var(--spacing-05) var(--spacing-03) var(--spacing11)',
            },
          },
        },
      },
    },
    DropdownMenuNavItem: {
      components: {
        StyledItem: {
          default: {
            textDecoration: 'none',
          },
        },
      },
    },
  },
  default: {
    display: 'inline-block',
    position: 'relative',
  },
};
