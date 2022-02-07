export const SelectionControls = {
  components: {
    InputStyles: {
      components: {
        DisplayInputActiveStyles: {
          default: {
            opacity: '0.4',
            transform: 'scale(0)',
            transition: 'transform 0s',
          },
        },
        DisplayInputStyles: {
          default: {
            alignItems: 'center',
            display: 'flex',
            height: 'var(--spacing-06)',
            flexShrink: '0',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.2s ease-out',
            width: 'var(--spacing-06)',

            '&:before': {
              content: '',
              position: 'absolute',
            },

            '&:after': {
              content: '',
              position: 'absolute',
              borderRadius: '50%',
              height: 'var(--spacing-09)',
              left: 'calc(var(--spacing-03) * -1)',
              opacity: '0',
              padding: '50%',
              top: 'calc(var(--spacing-03) * -1)',
              transform: 'scale(1)',
              transition: 'opacity 1s, transform 0.5s',
              width: 'var(--spacing-09)',
            },
          },
        },
      },
    },
    StyledContainer: {
      default: {
        alignItems: 'baseline',
        display: 'flex',
        flexWrap: 'nowrap',
        position: 'relative',
      },
    },
    StyledLabel: {
      default: {
        alignItems: 'flex-start',
        color: 'inherit',
        display: 'flex',
        fontSize: 'var(--typeScale-size03-fontSize)',
        lineHeight: 'var(--typeScale-size03-lineHeight)',
        margin: '0',
        padding: 'var(--spacing-03) 0',
      },
      props: {
        isInverse: {
          color: 'var(--colors-neutral08)',
        },
      },
    },
  },
};
