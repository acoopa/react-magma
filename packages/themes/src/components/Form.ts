export const Form = {
  components: {
    FormAction: {
      default: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
  },
  default: {
    background: 'var(--colors-neutral08)',
    color: 'var(--colors-neutral)',
  },
  props: {
    isInverse: {
      background: 'var(--colors-foundation)',
      color: 'var(--colors-neutral08)',
    },
  },
};
