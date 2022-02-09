import { breakpoints } from '../breakpoints';

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
    ParagraphStyles: {
      default: {
        color: 'var(--colors-neutral)',
        fontFamily: 'var(--bodyFont)',
        fontWeight: 'normal',
      },
      large: {
        default: {
          margin: 'var(--spaceScale-spacing06) 0',
          fontSize: 'var(--typographyVisualStyles-bodyLarge-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodyLarge-mobile-lineHeight)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyLarge-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyLarge-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-bodyLarge-mobile-fontSize)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-bodyLarge-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-bodyLarge-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-bodyLarge-desktop-lineHeight)',
              },
            },
          },
        },
      },
      medium: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodyMedium-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodyMedium-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing06) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyMedium-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyMedium-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
        },
      },
      small: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodySmall-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodySmall-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing05) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodySmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodySmall-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
        },
      },
      Xsmall: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodyXSmall-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodyXSmall-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing03) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyXSmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyXSmall-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
        },
      },
    },
    HeadingStyles: {
      default: {
        borderBottom: '2px solid transparent',
        fontFamily: 'var(--headingFont)',
        padding: '0',

        '&:focus': {
          borderBottom: '2px dotted var(--colors-focus)',
          outline: '0',
          transition: 'border 0.1s linear',
        },

        props: {
          contextVariant: {
            expressive: {
              fontFamily: 'var(--headingExpressiveFont)',
            },
            narrative: {
              fontFamily: 'var(--headingNarrativeFont)',
            },
          },
          isInverse: {
            borderBottom: '2px dotted var(--colors-focusInverse)',
          },
        },
      },
      headingXLarge: {
        default: {
          fontSize:
            'var(--typographyVisualStyles-headingXLarge-mobile-fontSize)',
          fontWeight: 'var(--typographyVisualStyles-headingXLarge-fontWeight)',
          lineHeight:
            'var(--typographyVisualStyles-headingXLarge-mobile-lineHeight)',
          margin: '0 0 var(--spaceScale-spacing05)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-headingXLarge-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-headingXLarge-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-headingXLarge-mobile-fontSize)',
              fontWeight:
                'var(--typographyExpressiveVisualStyles-headingXLarge-fontWeight)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-headingXLarge-mobile-lineHeight)',
              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-headingXLarge-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-headingXLarge-desktop-lineHeight)',
              },
            },
            narrative: {
              fontSize:
                'var(--typographyNarrativeVisualStyles-headingXLarge-mobile-fontSize)',
              fontWeight:
                'var(--typographyNarrativeVisualStyles-headingXLarge-fontWeight)',
              lineHeight:
                'var(--typographyNarrativeVisualStyles-headingXLarge-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyNarrativeVisualStyles-headingXLarge-desktop-fontSize)',
                lineHeight:
                  'var(--typographyNarrativeVisualStyles-headingXLarge-desktop-lineHeight)',
              },
            },
          },
        },
      },
      headingLarge: {
        default: {
          fontSize:
            'var(--typographyVisualStyles-headingLarge-mobile-fontSize)',
          fontWeight: 'var(--typographyVisualStyles-headingLarge-fontWeight)',
          lineHeight:
            'var(--typographyVisualStyles-headingLarge-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing10) 0 var(--spaceScale-spacing05)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyLarge-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyLarge-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-bodyLarge-mobile-fontSize)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-bodyLarge-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-bodyLarge-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-bodyLarge-desktop-lineHeight)',
              },
            },
          },
        },
      },
      headingMedium: {
        default: {
          fontSize:
            'var(--typographyVisualStyles-headingMedium-mobile-fontSize)',
          fontWeight: 'var(--typographyVisualStyles-headingMedium-fontWeight)',
          lineHeight:
            'var(--typographyVisualStyles-headingMedium-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing09) 0 var(--spaceScale-spacing05)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-headingMedium-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-headingMedium-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-headingMedium-mobile-fontSize)',
              fontWeight:
                'var(--typographyExpressiveVisualStyles-headingMedium-fontWeight)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-headingMedium-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-headingMedium-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-headingMedium-desktop-lineHeight)',
              },
            },
            narrative: {
              fontSize:
                'var(--typographyNarrativeVisualStyles-headingMedium-mobile-fontSize)',
              fontWeight:
                'var(--typographyNarrativeVisualStyles-headingMedium-fontWeight)',
              lineHeight:
                'var(--typographyNarrativeVisualStyles-headingMedium-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyNarrativeVisualStyles-headingMedium-desktop-fontSize)',
                lineHeight:
                  'var(--typographyNarrativeVisualStyles-headingMedium-desktop-lineHeight)',
              },
            },
          },
        },
      },
      headingSmall: {
        default: {
          fontSize:
            'var(--typographyVisualStyles-headingSmall-mobile-fontSize)',
          fontWeight: 'var(--typographyVisualStyles-headingSmall-fontWeight)',
          lineHeight:
            'var(--typographyVisualStyles-headingSmall-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing08) 0 var(--spaceScale-spacing05)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-headingSmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-headingSmall-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-headingSmall-mobile-fontSize)',
              fontWeight:
                'var(--typographyExpressiveVisualStyles-headingSmall-fontWeight)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-headingSmall-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-headingSmall-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-headingSmall-desktop-lineHeight)',
              },
            },
            narrative: {
              fontSize:
                'var(--typographyNarrativeVisualStyles-headingSmall-mobile-fontSize)',
              fontWeight:
                'var(--typographyNarrativeVisualStyles-headingSmall-fontWeight)',
              lineHeight:
                'var(--typographyNarrativeVisualStyles-headingSmall-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyNarrativeVisualStyles-headingSmall-desktop-fontSize)',
                lineHeight:
                  'var(--typographyNarrativeVisualStyles-headingSmall-desktop-lineHeight)',
              },
            },
          },
        },
      },
      headingXSmall: {
        default: {
          fontSize:
            'var(--typographyVisualStyles-headingXSmall-mobile-fontSize)',
          fontWeight: 'var(--typographyVisualStyles-headingXSmall-fontWeight)',
          lineHeight:
            'var(--typographyVisualStyles-headingXSmall-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing06} 0 var(--spaceScale-spacing05)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-headingXSmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-headingXSmall-desktop-lineHeight)',
          },
        },
        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-headingXSmall-mobile-fontSize)',
              fontWeight:
                'var(--typographyExpressiveVisualStyles-headingXSmall-fontWeight)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-headingXSmall-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-headingXSmall-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-headingXSmall-desktop-lineHeight)',
              },
            },
            narrative: {
              fontSize:
                'var(--typographyNarrativeVisualStyles-headingXSmall-mobile-fontSize)',
              fontWeight:
                'var(--typographyNarrativeVisualStyles-headingXSmall-fontWeight)',
              lineHeight:
                'var(--typographyNarrativeVisualStyles-headingXSmall-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyNarrativeVisualStyles-headingXSmall-desktop-fontSize)',
                lineHeight:
                  'var(--typographyNarrativeVisualStyles-headingXSmall-desktop-lineHeight)',
              },
            },
          },
        },
      },
      heading2XSmall: {
        default: {
          fontSize:
            'var(--typographyVisualStyles-heading2XSmall-mobile-fontSize)',
          fontWeight: 'var(--typographyVisualStyles-heading2XSmall-fontWeight)',
          lineHeight:
            'var(--typographyVisualStyles-heading2XSmall-mobile-lineHeight)',
          textTransform: 'uppercase',
          margin: 'var(--spaceScale-spacing06) 0 var(--spaceScale-spacing03)',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-heading2XSmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-heading2XSmall-desktop-lineHeight)',
          },
        },
        props: {
          noMargins: {
            margin: '0',
          },
          expressive: {
            fontSize:
              'var(--typographyExpressiveVisualStyles-heading2XSmall-mobile-fontSize)',
            fontWeight:
              'var(--typographyExpressiveVisualStyles-heading2XSmall-fontWeight)',
            lineHeight:
              'var(--typographyExpressiveVisualStyles-heading2XSmall-mobile-lineHeight)',
            textTransform: 'none',

            [`@media (min-width: ${breakpoints.small})`]: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-heading2XSmall-desktop-fontSize)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-heading2XSmall-desktop-lineHeight)',
            },
          },
          narrative: {
            fontSize:
              'var(--typographyNarrativeVisualStyles-heading2XSmall-mobile-fontSize)',
            fontWeight:
              'var(--typographyNarrativeVisualStyles-heading2XSmall-fontWeight)',
            lineHeight:
              'var(--typographyNarrativeVisualStyles-heading2XSmall-mobile-lineHeight)',

            [`@media (min-width: ${breakpoints.small})`]: {
              fontSize:
                'var(--typographyNarrativeVisualStyles-heading2XSmall-desktop-fontSize)',
              lineHeight:
                'var(--typographyNarrativeVisualStyles-heading2XSmall-desktop-lineHeight)',
            },
          },
        },
      },
    },
    BodyStyles: {
      default: {
        color: 'var(--colors-neutral)',
        fontFamily: 'var(--bodyFont)',
        fontWeight: 'normal',
      },
      bodyLarge: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodyLarge-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodyLarge-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing06) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyLarge-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyLarge-desktop-lineHeight)',
          },
        },
        props: {
          noMargins: {
            margin: '0',
          },
          contextVariant: {
            expressive: {
              fontSize:
                'var(--typographyExpressiveVisualStyles-bodyLarge-mobile-fontSize)',
              lineHeight:
                'var(--typographyExpressiveVisualStyles-bodyLarge-mobile-lineHeight)',

              [`@media (min-width: ${breakpoints.small})`]: {
                fontSize:
                  'var(--typographyExpressiveVisualStyles-bodyLarge-desktop-fontSize)',
                lineHeight:
                  'var(--typographyExpressiveVisualStyles-bodyLarge-desktop-lineHeight)',
              },
            },
          },
        },
      },
      bodyMedium: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodyMedium-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodyMedium-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing06) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyMedium-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyMedium-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
        },
      },
      bodySmall: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodySmall-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodySmall-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing05) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodySmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodySmall-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
        },
      },
      bodyXSmall: {
        default: {
          fontSize: 'var(--typographyVisualStyles-bodyXSmall-mobile-fontSize)',
          lineHeight:
            'var(--typographyVisualStyles-bodyXSmall-mobile-lineHeight)',
          margin: 'var(--spaceScale-spacing03) 0',

          [`@media (min-width: ${breakpoints.small})`]: {
            fontSize:
              'var(--typographyVisualStyles-bodyXSmall-desktop-fontSize)',
            lineHeight:
              'var(--typographyVisualStyles-bodyXSmall-desktop-lineHeight)',
          },
        },

        props: {
          noMargins: {
            margin: '0',
          },
        },
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
