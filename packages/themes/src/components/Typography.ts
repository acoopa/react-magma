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
    ContextVariant: {
      default: {
        fontFamily: 'var(--bodyFont)',
        fontWeight: 'normal',
      },
      expressive: {},
      narrative: {},
    },
    ParagraphStyles: {
      default: {},
      large: {},
      props: {},
    },
    VisualStyle: {
      headingXLarge: {},
      headingLarge: {},
      headingMedium: {},
      headingSmall: {},
      headingXSmall: {},
      heading2XSmall: {},
      bodyLarge: {},
      bodyMedium: {},
      bodySmall: {},
      bodyXSmall: {},
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
