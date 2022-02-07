export const Typography = {
  components: {
    Color: {
      danger: {
        color: 'var(--colors-danger)',
      },
      default: {
        color: 'var(--colors-neutral)',
      },
      success: {
        color: 'var(--colors-success)',
      },
      subdued: {
        color: 'var(--colors-neutral03)',
      },
    },
  },
  props: {
    isInverse: {
      Color: {
        danger: {
          color: 'var(--colors-dangerInverse)',
        },
        default: {
          color: 'var(--colors-neutral08)',
        },
        success: {
          color: 'var(--colors-successInverse)',
        },
        subdued: {
          color: 'var(--colors-focusInverse)',
        },
      },
    },
  },
};
