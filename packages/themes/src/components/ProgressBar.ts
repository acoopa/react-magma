export const ProgressBar = {
  components: {
    Bar: {
      default: {
        background: 'var(--colors-primary-default)',
        borderRadius: '50em',
        display: 'flex',
        transition: 'width 0.3s',
        width: '0',
      },
      props: {
        isAnimated: {
          backgroundImage:
            'linear-gradient( to right, "var(--colors-primary-default)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-primary-default)" 40%, "var(--colors-primary-default)" 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1800px 104px',
          display: 'inline-block',
          position: 'relative',
          animation: 'hasAnimation',

          isInverse: {
            backgroundImage:
              'linear-gradient( to right, "var(--colors-primaryInverse)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-primaryInverse)" 40%, "var(--colors-primaryInverse)" 100%)',

            danger: {
              backgroundImage:
                'linear-gradient( to right, "var(--colors-dangerInverse)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-dangerInverse)" 40%, "var(--colors-dangerInverse)" 100%)',
            },
            success: {
              backgroundImage:
                'linear-gradient( to right, "var(--colors-successInverse)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-successInverse)" 40%, "var(--colors-successInverse)" 100%)',
            },
          },

          danger: {
            backgroundImage:
              'linear-gradient( to right, "var(--colors-danger-default)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-danger-default)" 40%, "var(--colors-danger-default)" 100%)',
          },
          pop: {
            backgroundImage:
              'linear-gradient( to right, "var(--colors-pop)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-pop)" 40%, "var(--colors-pop)" 100%)',
          },
          pop02: {
            backgroundImage:
              'linear-gradient( to right, "var(--colors-pop02)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-pop02)" 40%, "var(--colors-pop02)" 100%)',
          },
          success: {
            backgroundImage:
              'linear-gradient( to right, "var(--colors-success-default)" 0%, rgba(255, 255, 255, 0.5) 20%, "var(--colors-success-default)" 40%, "var(--colors-success-default)" 100%)',
          },
        },
        isInverse: {
          danger: {
            background: 'var(--colors-dangerInverse)',
          },
          default: {
            background: 'var(--colors-primaryInverse)',
          },
          success: {
            background: 'var(--colors-successInverse)',
          },
        },
      },
    },
    Container: {
      default: {
        alignItems: 'center',
        display: 'flex',
      },
      props: {
        isLoadingIndicator: {
          display: 'block',
        },
      },
    },
    Percentage: {
      default: {
        fontSize: 'var(--typeScale-size02-fontSize)',
        lineHeight: 'var(--typeScale-size02-lineHeight)',
        marginLeft: 'var(--spacing-03)',
      },
    },
    TopPercentage: {
      default: {
        fontSize: 'var(--typeScale-size05-fontSize)',
        lineHeight: 'var(--typeScale-size05-lineHeight)',
        marginBottom: 'var(--spacing-03)',
        textAlign: 'center',
      },
    },
    Track: {
      default: {
        background: 'var(--colors-neutral08)',
        boxShadow: 'inset 0 0 0 1px var(--colors-neutral04)',
        borderRadius: '50em',
        overflow: 'hidden',
        display: 'flex',
        height: 'var(--spacing-03)',
        width: '100%',
      },
      props: {
        isInverse: {
          background: 'rgba(0,0,0,0.25)',
          boxShadow: 'inset 0 0 0 1px var(--colors-tint)',
        },
      },
    },
  },
};
