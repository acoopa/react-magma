export const Accordion = {
  default: {
    background: 'var(--colors-neutral08)',
    borderBottom: '1px solid var(--colors-neutral06)',
    color: 'var(--colors-neutral)',
  },
  props: {
    isInverse: {
      background: 'var(--colors-foundation)',
      color: 'var(--colors-neutral08)',
    },
  },
  components: {
    AccordionButton: {
      default: {
        background: 'var(--colors-neutral08)',
        border: '0',
        borderTop: '1px solid var(--colors-neutral06)',
        color: 'var(--colors-neutral)',
        cursor: 'pointer',
        display: 'flex',
        fontSize: 'var(--typeScale-size03-fontSize)',
        lineHeight: 'var(--typeScale-size03-lineHeight)',
        fontWeight: '600',
        padding: '12px 16px',
        textAlign: 'left',
        width: '100%',

        '&:focus': {
          outline: '2px dotted var(--colors-focus)',
          outlineOffset: '-3px',
        },

        '&&[disabled]': {
          color: 'var(--colors-disabledText)',
          cursor: 'not-allowed',
        },
      },
      props: {
        isInverse: {
          background: 'var(--colors-foundation)',
          borderTop: '1px solid var(--colors-tint04)',
          color: 'var(--colors-neutral08)',

          '&:focus': {
            outline: '2px dotted var(--colors-focusInverse)',
          },

          '&&[disabled]': {
            color: 'var(--colors-disabledInverseText)',
          },
        },
      },
    },
    AccordionItem: {
      default: {
        h1: {
          background: 'none',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'inherit',
          margin: '0',
          padding: '0',
        },
        h2: {
          background: 'none',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'inherit',
          margin: '0',
          padding: '0',
        },
        h3: {
          background: 'none',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'inherit',
          margin: '0',
          padding: '0',
        },
        h4: {
          background: 'none',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'inherit',
          margin: '0',
          padding: '0',
        },
        h5: {
          background: 'none',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'inherit',
          margin: '0',
          padding: '0',
        },
        h6: {
          background: 'none',
          color: 'inherit',
          font: 'inherit',
          lineHeight: 'inherit',
          margin: '0',
          padding: '0',
        },
      },
    },
    AccordionPanel: {
      default: {
        background: 'var(--colors-neutral08)',
        color: 'var(--colors-neutral)',
        padding: 'var(--spacing-03) var(--spacing-05) var(--spacing-04)',
      },
      props: {
        isInverse: {
          background: 'var(--colors-foundation)',
          color: 'var(--colors-neutral08)',
        },
      },
    },
    TextWrapper: {
      default: {
        flexGrow: '1',
      },
    },
  },
};
