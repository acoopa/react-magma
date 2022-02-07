export const Input = {
  components: {
    InputMessage: {
      default: {
        alignItems: 'center',
        borderRadius: 'var(--borderRadius)',
        color: 'var(--colors-neutral03)',
        display: 'flex',
        fontSize: 'var(typeScale-size02-fontSize)',
        lineHeight: 'var(typeScale-size02-lineHeight)',
        marginTop: 'var(--spacing-02)',
        minHeight: 'var(--spacing-06)',
        textAlign: 'left',
      },
      props: {
        hasError: {
          color: 'var(--colors-danger-default)',
        },
        InputSize: {
          large: {
            marginTop: 'var(--spacing-03)',
          },
        },
        isInverse: {
          color: 'var(--colors-neutral08)',
          hasError: {
            color: 'var(--colors-dangerInverse)',
          },
        },
      },
    },
    IconWrapper: {
      default: {
        display: 'inline-flex',
        flexShrink: '0',
        paddingRight: 'var(--spacing-02)',
      },
    },
  },
};

// {
//   components: {
//     IconButtonContainer: {
//       default: {
//         backgroundColor: 'var(--colors-neutral08)',
//         height: 'auto',
//         margin: '0',
//         position: 'relative',
//         right: 'var(--spacing-01)',

//         svg: {
//           height: 'var(--iconSizes-medium)px',
//           width: 'var(--iconSizes-medium)px',
//         },
//       },
//       props: {
//         disabled: {
//           backgroundColor: 'var(--colors-neutral07-default)',
//         },
//         InputSize: {
//           large: {
//             right: 'var(--spacing-02)',

//             svg: {
//               height: 'var(--iconSizes-large)px',
//               width: 'var(--iconSizes-large)px',
//             },
//           },
//         },
//       },
//     },
//     IconWrapper: {
//       color: 'var(--colors-neutral)',
//       left: 'auto',
//       position: 'absolute',
//       top: 'var(--spacing-03',

//       props: {
//         IconPosition: {
//           left: {
//             left: 'var(--spacing-03)',
//           },
//           right: {
//             right: 'var(--spacing-03)',
//           },
//         },
//         IconSize: {
//           large: {
//             left: 'auto',
//             right: 'auto',
//             top: 'var(--spacing-04)',

//             props: {
//               IconPosition: {
//                 left: {
//                   left: 'var(--spacing-04)',
//                 },
//                 right: {
//                   right: 'var(--spacing-04)',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//     IsClearableContainer: {
//       backgroundColor: 'var(--colors-neutral08)',
//       position: 'relative',
//       right: 'var(--spacing-01)',

//       props: {
//         disabled: {
//           backgroundColor: 'var(--colors-neutral07-default)',
//         },
//         InputSize: {
//           large: {
//             right: 'var(--spacing-02)',
//           },
//         },
//       },
//     },
//   },
//   default: {
//     border: '0',
//     borderRadius: 'var(--borderRadius)',
//     background: 'var(--colors-neutral08)',
//     color: 'var(--colors-neutral)',
//     display: 'block',
//     fontSize: 'var(--typeScale-size03-fontSize)',
//     lineHeight: 'var(--typeScale-size03-lineHeight)',
//     fontFamily: 'var(--bodyFont)',
//     height: 'var(--spacing-09)',
//     padding: 'var(--spacing-03)',
//     '-webkit-appearance': 'none',
//     width: '100%',

//     '&::placeholder': {
//       color: 'var(--colors-neutral03)',
//       opacity: '1',
//     },

//     '&:focus': {
//       outline: '0',
//     },

//     '&[type="search"]': {
//       '&::-webkit-search-decoration': {
//         display: 'none',
//       },
//       '&::-webkit-search-cancel-button': {
//         display: 'none',
//       },
//       '&::-webkit-search-results-button': {
//         display: 'none',
//       },
//       '&::-webkit-search-results-decoration': {
//         display: 'none',
//       },
//     },
//   },
//   props: {
//     disabled: {
//       background: 'var(--colors-neutral07-default)',
//       color: 'var(--colors-disabledText)',
//       cursor: 'not-allowed',

//       '&::placeholder': {
//         color: 'var(--colors-disabledText)',
//       },
//     },
//     iconPosition: {
//       left: {
//         paddingLeft: 'var(--spacing-09)',

//         inputSize: {
//           large: {
//             paddingLeft: 'var(--spacing10)',
//           },
//         },
//       },
//       right: {
//         paddingRight: 'var(--spacing-09)',

//         inputSize: {
//           large: {
//             paddingRight: 'var(--spacing10)',
//           },
//         },
//       },
//     },
//     inputSize: {
//       large: {
//         fontSize: 'var(--typeScale-size04-fontSize)',
//         lineHeight: 'var(--typeScale-size04-lineHeight)',
//         height: 'var(--spacing11)',
//         padding: '0 var(--spacing-04)',
//       },
//     },
//   },
// }
