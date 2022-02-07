export const LoadingIndicator = {
  components: {
    Message: {
      default: {
        opacity: '1',
        position: 'absolute',
        transition: 'opacity 0.3s',
        width: '100%',
      },
      props: {
        hide: {
          opacity: '0',
        },
      },
    },
    MessageContainer: {
      default: {
        fontSize: 'var(--typeScale-size02-fontSize)',
        lineHeight: 'var(--typeScale-size02-lineHeight)',
        marginTop: 'var(--spacing-05)',
        minHeight: '5em',
        position: 'relative',
        textAlign: 'center',
      },
    },
  },
  default: {
    textAlign: 'center',
  },
};
