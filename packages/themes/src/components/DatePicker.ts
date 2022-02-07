export const DatePicker = {
  components: {
    CalendarDay: {
      components: {
        CalendarDayCell: {
          default: {
            border: '1px solid var(--colors-neutral06)',
            color: 'var(--colors-neutral)',
            fontSize: 'var(--typeScale-size03-fontsize)',
            lineHeight: 'var(--typeScale-size03-lineHeight)',
            height: 'var(--spacing-09)',
            padding: '0',
            position: 'relative',
            textAlign: 'center',
            width: 'var(--spacing-09)',
          },
        },
        CalendarDayInner: {
          default: {
            alignItems: 'center',
            background: 'var(--colors-neutral08)',
            border: '2px solid transparent',
            borderRadius: '100%',
            color: 'var(--colors-neutral)',
            cursor: 'pointer',
            display: 'flex',
            height: 'calc(var(--spacing-09) - 4px)',
            justifyContent: 'center',
            margin: 'var(--spacing-01)',
            overflow: 'hidden',
            outlineOffset: '0',
            position: 'relative',
            transition: 'background 0.5s ease-in-out 0s',
            width: 'calc(var(--spacing-09) - 4px)',

            '&:focus': {
              outline: '2px dotted var(--colors-focus)',
            },

            '&:before': {
              background: 'var(--colors-neutral)',
              content: '',
              height: '200%',
              left: '0',
              opacity: '0',
              position: 'absolute',
              top: '-50%',
              transition: '0.2s',
              width: '200%',
            },

            '&:hover': {
              '&:before': {
                opacity: '0.1',
              },
            },
          },
          props: {
            disabled: {
              color: 'var(--colors-disabledText)',
              cursor: 'not-allowed',

              '&:hover': {
                '&:before': {
                  opacity: '0',
                },
              },
            },
            isChosen: {
              background: 'var(--colors-foundation02)',
              color: 'var(--colors-neutral08)',
            },
          },
        },
        EmptyCell: {
          default: {
            border: '0',
            padding: '0',
          },
        },
        TodayIndicator: {
          default: {
            borderLeft: '8px solid var(--colors-pop)',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            bottom: '-6px',
            display: 'block',
            height: '0',
            position: 'absolute',
            transform: 'rotate(45deg)',
            right: '-2px',
            width: '0',
          },
        },
      },
    },
    CalendarHeader: {
      components: {
        CalendarHeaderContainer: {
          default: {
            alignItems: 'center',
            display: 'flex',
            padding: 'var(--spacing10) 0 var(--spacing-03)',
            marginTop: 'calc(var(--spacing-01) * -1))',
          },
        },
        CalendarHeaderText: {
          default: {
            captionSide: 'initial',
            color: 'var(--colors-neutral)',
            fontSize: 'var(--typeScale-size03-fontSize)',
            lineHeight: 'var(--typeScale-size03-lineHeight)',
            order: '1',
            textAlign: 'center',
            flexGrow: '0',
            flexWidth: '90%',
            flexBasis: '90%',
          },
        },
        CalendarIconButton: {
          default: {
            flexGrow: '0',
            flexWidth: '10%',
            flexBasis: '10%',
            order: '0',
          },
          props: {
            next: {
              order: '2',
            },
          },
        },
      },
    },
    CalendarMonth: {
      components: {
        CalendarContainer: {
          default: {
            background: 'var(--colors-neutral08)',
            padding: '0 var(--spacing-05) var(--spacing-03)',
          },
        },
        CloseButton: {
          default: {
            position: 'absolute',
            right: 'var(--spacing-01)',
            top: 'var(--spacing-01)',
            zIndex: '1',
          },
        },
        HelperButton: {
          default: {
            bottom: 'var(--spacing-01)',
            position: 'absolute',
            right: 'var(--spacing-01)',
            zIndex: '2',
          },
        },
        MonthContainer: {
          default: {
            background: 'var(--colors-neutral08)',
            textAlign: 'center',
            userSelect: 'none',
            verticalAlign: 'top',
          },
        },
        Table: {
          default: {
            borderCollapse: 'collapse',
            borderSpacing: '0',
            marginBottom: 'var(--spacing-09)',
          },
        },
        Th: {
          default: {
            border: '0',
            color: 'var(--colors-neutral)',
            fontSize: 'var(--typeScale-size02-fontSize)',
            lineHeight: 'var(--typeScale-size02-lineHeight)',
            fontWeight: 'normal',
            padding: '0',
            textAlign: 'center',
          },
        },
      },
    },
    HelperInformation: {
      components: {
        KeyboardShortcutButtonWrapper: {
          default: {
            background: 'rgb(242, 242, 242)',
            fontFamily: 'monospace',
            fontSize: 'var(--typeScale-size02-fontSize)',
            lineHeight: 'var(--typeScale-size02-lineHeight)',
            marginRight: 'var(--spacing-03)',
            padding: 'var(--spacing-02) var(--spacing-04)',
            textTransform: 'uppercase',
          },
        },
        List: {
          default: {
            listStyle: 'none',
            margin: '0',
            padding: '0',
            textAlign: 'left',
          },
        },
        Item: {
          default: {
            display: 'flex',
            listStyle: 'none',
          },
        },
      },
    },
  },
  default: {
    border: '1px solid var(--colors-neutral06)',
    borderRadius: 'var(--borderRadius)',
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.15)',
    display: 'none',
    marginTop: 'calc(var(--spacing-07) * -1))',
    opacity: '0',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'opacity 0.2s ease-in-out 0s',
    width: '320px',
    zIndex: '-1',
  },
  props: {
    opened: {
      display: 'block',
      opacity: 1,
      zIndex: '998',
    },
  },
};
