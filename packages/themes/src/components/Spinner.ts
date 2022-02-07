export const Spinner = {
  default: {
    animation: 'spinner-border 0.75s linear infinite',
    border: `2px solid var(--colors-primary-default)`,
    borderRightColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    height: 'var(--iconSize-xSmall)',
    width: 'var(--iconSize-xSmall)',

    '@keyframes spinner-border': {
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
};
