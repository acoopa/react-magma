export const Button = {
  components: {
    buttonStyles: {
      default: {
        alignItems: 'center',
        background: 'var(--colors-primary-default)',
        border: '0',
        borderColor: 'var(--colors-primary-default)',
        borderRadius: 'var(--borderRadius)',
        color: 'var(--colors-neutral08)',
        cursor: 'pointer',
        display: 'inline-flex',
        flexShrink: '0',
        fontFamily: 'var(--bodyFont)',
        fontSize: 'var(--typeScale-size03-fontSize)',
        fontWeight: '600',
        height: 'var(--spacing-09)',
        justifyContent: 'center',
        lineHeight: 'var(--typeScale-size03-lineHeight)',
        margin: 'var(--spacing-02)',
        minWidth: 'var(--spacing13)',
        overflow: 'hidden',
        padding: 'var(--spacing-04) var(--spacing-05)',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        touchAction: 'manipulation',
        transition:
          'background 0.35s, border-color 0.35s, box-shadow 0.35s, color 0.35s',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',

        svg: {
          flexShrink: '0',
        },

        '&:not(:disabled)': {
          '&:active': {
            background: 'darken(0.2, cssVar("--colors-primary")',
            color: 'var(--colors-neutral08)',

            '&:after': {
              opacity: '0.4',
              transform: 'translate(-50%, -50%) scale(0)',
              transition: 'transform 0s',
            },
          },
          '&:after': {
            background: 'var(--colors-neutral08)',
            borderRadius: '50%',
            content: '',
            height: 'var(--spacing-07)',
            left: '50%',
            opacity: '0',
            padding: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%) scale(1)',
            transition: 'opacity 1s, transform 0.5s',
            width: 'var(--spacing-07)',
          },
          '&:focus': {
            outline: '2px dotted var(--colors-focus)',
            outlineOffset: '3px',
          },
          '&:hover': {
            background: 'darken(0.1, cssVar("--colors-primary")',
            color: 'var(--colors-neutral08)',
          },
        },
      },
      props: {
        colors: {
          danger: {
            background: 'var(--colors-danger-default)',
            borderColor: 'var(--colors-danger-default)',
            color: 'var(--colors-danger-default)',

            '&:not(:disabled)': {
              '&:active': {
                background: 'tint(0.7, cssVar("--colors-danger")',
                color: 'darken(0.2, cssVar("--colors-danger")',
              },
            },
            '&:hover': {
              background: 'darken(0.1, cssVar("--colors-danger")',
              color: 'darken(0.1, cssVar("--colors-danger")',
            },
          },
          marketing: {
            background: 'var(--colors-pop04)',
            borderColor: 'var(--colors-pop04)',
            color: 'var(--colors-foundation02)',

            '&:not(:disabled)': {
              '&:active': {
                background: 'tint(0.7, cssVar("--colors-pop04")',
                color: 'darken(0.2, cssVar("--colors-pop04")',
              },
            },
            '&:hover': {
              background: 'lighten(0.1, cssVar("--colors-pop04")',
              color: 'var(--colors-foundation02)',
            },
          },
          secondary: {
            background: 'var(--colors-neutral08)',
            border: '2px solid',
            color: 'var(--colors-neutral)',

            '&:not(:disabled)': {
              '&:active': {
                background: 'tint(0.7, cssVar("--colors-neutral")',
                color: 'darken(0.2, cssVar("--colors-neutral")',
              },
            },
            '&:hover': {
              background: 'var(--colors-neutral)',
              color: 'darken(0.1, cssVar("--colors-neutral08")',
            },
          },
          solid: {
            isInverse: {
              danger: {
                '&:hover': {
                  background: 'tint(0.9, cssVar("--colors-danger")',
                  color: 'darken(0.1, cssVar("--colors-danger")',
                },
              },
              secondary: {
                '&:hover': {
                  background: 'tint(0.9, cssVar("--colors-neutral")',
                  color: 'darken(0.1, cssVar("--colors-neutral")',
                },
              },
              success: {
                '&:hover': {
                  background: 'tint(0.9, cssVar("--colors-success")',
                  color: 'darken(0.1, cssVar("--colors-success")',
                },
              },
            },
          },
          success: {
            background: 'var(--colors-success-default)',
            borderColor: 'var(--colors-success-default)',
            color: 'var(--colors-success-default)',

            '&:not(:disabled)': {
              '&:active': {
                background: 'tint(0.7, cssVar("--colors-success")',
                color: 'darken(0.2, cssVar("--colors-success")',
              },
            },
            '&:hover': {
              background: 'darken(0.1, cssVar("--colors-success")',
              color: 'darken(0.1, cssVar("--colors-neutral08")',
            },
          },
        },
        disabled: {
          default: {
            background: 'var(--colors-neutral06)',
            borderColor: 'var(--colors-neutral06)',
            color: 'var(--colors-disabledText)',
            cursor: 'not-allowed',
          },
          props: {
            isInverse: {
              props: {
                outline: {
                  borderColor: 'var(--colors-disabledInverseText)',
                  color: 'var(--colors-disabledInverseText)',
                },
              },
            },
          },
        },
        isFullWidth: {
          display: 'flex',
          margin: 'var(--spacing-02) 0',
          width: '100%',
        },
        isIconOnly: {
          default: {
            display: 'inline-flex',
            justifyContent: 'center',
            lineHeight: '1',
            minWidth: '0',
            padding: '0',
            width: 'var(--08)',
          },
          size: {
            small: {
              width: 'var(--08)',
            },
            large: {
              width: 'var(--08)',
            },
          },
        },
        isInverse: {
          default: {
            background: 'var(--colors-neutral08)',
            borderColor: 'var(--colors-neutral08)',
            color: 'var(--colors-neutral08)',

            '&:not(:disabled)': {
              '&:focus': {
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'var(--colors-neutral08)',
                outline: '2px dotted var(--colors-focusInverse)',
                outlineOffset: '3px',
              },
            },
          },
          props: {
            danger: {
              '&:not(:disabled)': {
                '&:active': {
                  background: 'darken(0.2, cssVar("--colors-danger")',
                  color: 'var(--colors-neutral08)',
                },
              },
            },
            secondary: {
              '&:not(:disabled)': {
                '&:active': {
                  background: 'darken(0.2, cssVar("--colors-neutral08")',
                  color: 'var(--colors-neutral08)',
                },
              },
            },
            success: {
              '&:not(:disabled)': {
                '&:active': {
                  background: 'darken(0.2, cssVar("--colors-success")',
                  color: 'var(--colors-neutral08)',
                },
              },
            },
          },
        },
        outline: {
          default: {
            border: '2px solid',
          },
        },
        shape: {
          leftCap: {
            borderRadius: 'var(--borderRadius) 0 0 var(--borderRadius)',
          },
          rightCap: {
            borderRadius: '0 var(--borderRadius) var(--borderRadius) 0',
          },
          round: {
            borderRadius: '100%',
          },
        },
        size: {
          large: {
            default: {
              fontSize: 'var(--typeScale-size04-fontSize)',
              height: 'var(--spacing11)',
              lineHeight: 'var(--typeScale-size04-lineHeight)',
              padding: 'var(--spacing-04) var(--spacing-06)',
            },
          },
          small: {
            default: {
              fontSize: 'var(--typeScale-size01-lineHeight)',
              height: 'var(--spacing-07)',
              lineHeight: 'var(--typeScale-size01-lineHeight)',
              minWidth: '0',
              padding: 'var(--spacing-02) var(--spacing-03)',
            },
          },
        },
      },
    },
  },
};
