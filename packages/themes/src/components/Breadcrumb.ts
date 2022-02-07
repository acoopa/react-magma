export const Breadcrumb = {
  components: {
    BreadcrumbItem: {
      default: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
      },
    },
    StyledSpan: {
      default: {
        color: 'var(--colors-neutral03)',

        svg: {
          margin: '0 var(--spacing-02)',
        },
      },
      props: {
        isInverse: {
          default: {
            color: 'var(--colors-neutral08)',
          },
        },
      },
    },
  },
  default: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 'var(--typeScale-size02-fontSize)',
    lineHeight: 'var(--typeScale-size02-lineHeight)',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};
