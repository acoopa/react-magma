import { breakpoints } from '../breakpoints';

export const Modal = {
  components: {
    CloseBtn: {
      default: {
        position: 'absolute',
        top: '0',
        right: '0',
      },
    },
    H1: {
      default: {
        fontSize: 'var(--typographyVisualStyles-headingSmall-desktop-fontSize)',
        lineHeight:
          'var(--typographyVisualStyles-headingSmall-desktop-lineHeight)',
        margin: '0',
        paddingRight: 'var(--spacing10)',
      },
    },
    ModalBackdrop: {
      default: {
        backdropFilter: 'blur(3px)',
        background: 'rgba(0, 0, 0, 0.6)',
        bottom: '0',
        left: '0',
        right: '0',
        top: '0',
        zIndex: '997',
        position: 'fixed',
      },
    },
    ModalBody: {
      default: {
        padding: 'var(--spacing-05)',

        [`@media (max-width: ${breakpoints.small})`]: {
          padding: 'var(--spacing-06)',
        },
      },
    },
    ModalContent: {
      default: {
        background: 'var(--colors-neutral08)',
        border: '1px solid',
        borderColor: 'var(--colors-neutral06)',
        borderRadius: 'var(--borderRadius)',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
        color: 'var(--colors-neutral)',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1000',

        [`@media (max-width: ${breakpoints.small})`]: {
          margin: 'var(--spacing-08) auto',
        },
      },
      props: {
        size: {
          default: {
            maxWidth: 'var(--modal-width-medium)',
          },
          large: {
            maxWidth: 'var(--modal-width-large)',
          },
          small: {
            maxWidth: 'var(--modal-width-small)',
          },
        },
      },
    },
    ModalHeader: {
      padding: 'var(--spacing-03) var(--spacing-05) 0 var(--spacing-05)',

      [`@media (max-width: ${breakpoints.small})`]: {
        padding: 'var(--spacing-05) var(--spacing-06) 0 var(--spacing-06)',
      },
    },
  },
  default: {
    bottom: '0',
    left: '0',
    overflowY: 'auto',
    padding: 'var(--spacing-03)',
    right: '0',
    top: '0',
    zIndex: '998',
  },
};
