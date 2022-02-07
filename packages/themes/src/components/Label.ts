export const Label = {
  default: {
    color: 'var(--colors-neutral)',
    display: 'inline-block',
    fontSize: 'var(--typeScale-size03-fontSize)',
    fontWeight: '600',
    lineHeight: 'var(--typeScale-size02-lineHeight)',
    margin: '0 0 var(--spacing-03)',
    maxWidth: '100%',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  props: {
    labelPosition: {
      left: {
        margin: '0 var(--spacing-05) 0 0',
      },
    },
    inputSize: {
      large: {
        fontSize: 'var(--typeScale-size02-fontSize)',
      },
    },
    isInverse: {
      color: 'var(--colors-neutral08)',
    },
  },
};
