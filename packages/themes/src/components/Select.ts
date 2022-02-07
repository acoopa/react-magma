export const Select = {
  components: {
    ChildrenContainer: {
      default: {
        alignItems: 'center',
        display: 'flex',
        flexGrow: '1',
        flexWrap: 'wrap',
      },
    },
    InputMessageContainer: {
      default: {
        flexGrow: '1',
      },
    },
    NoItemsMessage: {
      default: {
        color: 'var(--colors-neutral04)',
        display: 'block',
        paddingTop: 'var(--spacing-03)',
        textAlign: 'center',
      },
    },
    SelectContainerElement: {
      default: {
        alignItems: 'baseline',
        display: 'block',
        position: 'relative',
      },
      props: {
        left: {
          display: 'flex',
        },
      },
    },
    Shared: {
      components: {
        IconWrapper: {
          default: {
            paddingLeft: '12px',
          },
        },
        SelectContainer: {
          default: {
            position: 'relative',
          },
        },
        SelectText: {
          default: {
            flexGrow: '1',
            padding: '0 8px 0 4px',
          },
        },
        SelectedItemButton: {
          default: {
            alignSelf: 'center',
            background: 'var(--colors.neutral06)',
            borderRadius: '4px',
            border: '0',
            boxShadow: '0 0 0',
            display: 'flex',
            fontSize: '12px',
            lineHeight: '16px',
            height: '24px',
            margin: '4px 2px 4px 4px',
            padding:
              'var(--spacing-02) var(--spacing-02) var(--spacing-02) var(--spacing-03)',
            position: 'relative',
            whiteSpace: 'nowrap',
          },
        },
        SelectedItemsWrapper: {
          default: {
            display: 'flex',
            flexGrow: '1',
            flexWrap: 'wrap',
            padding: '0 0 0 4px',
          },
        },
        StyledButton: {
          default: {
            alignItems: 'center',
            display: 'flex',
            textAlign: 'left',
          },
        },
        StyledCard: {
          default: {
            display: 'none',
            left: '4px',
            marginTop: '4px',
            padding: '4px 0 0',
            position: 'absolute',
            right: '4px',
            top: 'auto',
            zIndex: '2',
          },
          props: {
            isOpen: {
              display: 'block',
            },
          },
        },
        StyledItem: {
          default: {
            alignSelf: 'center',
            background: 'transparent',
            border: '2px dotted',
            borderColor: 'transparent',
            cursor: 'default',
            lineHeight: '24px',
            margin: '0',
            padding: '8px 16px',
          },
          props: {
            isFocused: {
              background: 'var(--colors-neutral06)',
              borderColor: 'var(--colors-focus)',
            },
          },
        },
        StyledList: {
          default: {
            display: 'none',
            listStyle: 'none',
            margin: '0 0 4px',
            outline: 'none',
            padding: '0',
            maxHeight: '250px',
            overflowY: 'auto',
          },
          props: {
            isOpen: {
              display: 'block',
            },
          },
        },
      },
    },
    StyledButton: {
      default: {
        alignItems: 'center',
        display: 'flex',
        height: 'auto',
        minHeight: 'var(--spacing-09)',
        padding: '0 var(--spacing-03) 0 var(--spacing-02)',
        textAlign: 'left',
      },
    },
  },
};
