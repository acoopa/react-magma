export const Table = {
  components: {
    TableCell: {
      default: {
        borderRight: '0',
        borderColor: 'var(--colors-neutral06)',
        display: 'table-cell',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        padding: 'var(--spacing-04) var(--spacing-05)',
        textAlign: 'left',
      },
      props: {
        density: {
          compact: {
            padding: 'var(--spacing-02) var(--spacing-03)',
          },
          loose: {
            padding: 'var(--spacing-06) var(--spacing-08)',
          },
        },
        hasVerticalBorders: {
          borderRight: '1px solid',
        },
        isInverse: {
          borderColor: 'var(--colors-tint04)',
        },
        TableCellAlign: {
          center: {
            textAlign: 'center',
          },
          inherit: {
            textAlign: 'inherit',
          },
          justify: {
            textAlign: 'justify',
          },
          left: {
            textAlign: 'left',
          },
          right: {
            textAlign: 'right',
          },
        },
        TextTransform: {
          capitalize: {
            textTransform: 'capitalize',
          },
          lowercase: {
            textTransform: 'lowercase',
          },
          uppercase: {
            textTransform: 'uppercase',
          },
        },
      },
    },
    TableContainer: {
      default: {
        overflowX: 'auto',
      },
    },
    TableHeaderCell: {
      components: {
        IconWrapper: {
          default: {
            paddingLeft: 'var(--spacing-03)',
            position: 'relative',
            top: 'var(--spacing-02)',
          },
        },
        SortButton: {
          default: {
            alignItems: 'flex-end',
            background: 'none',
            border: '0',
            color: 'inherit',
            display: 'flex',
            justifyContent: 'flext-start',
            margin: '0',
            padding: 'var(--spacing-04) var(--spacing-05)',
            textAlign: 'left',
            width: '100%',

            '&:focus': {
              background: 'var(--colors-neutral06)',
              outline: '2px dotted var(--colors-focus)',
              outlineOffset: '-2px',

              svg: {
                fill: 'var(--colors-neutral)',
              },
            },

            '&:hover': {
              background: 'var(--colors-neutral06)',

              svg: {
                fill: 'var(--colors-neutral)',
              },
            },
          },
          props: {
            isInverse: {
              '&:focus': {
                background: 'var(--colors-tint)',
                outline: '2px dotted var(--colors-focusInverse)',

                svg: {
                  fill: 'var(--colors-neutral08)',
                },
              },
              '&:hover': {
                background: 'var(--colors-tint)',

                svg: {
                  fill: 'var(--colors-neutral08)',
                },
              },
            },
            TableCellAlign: {
              right: {
                textALign: 'flex-end',
              },
            },
            TableCellDensity: {
              compact: {
                padding: 'var(--spacing-02) var(--spacing-03)',
              },
              default: {
                padding: 'var(--spacing-04) var(--spacing-05)',
              },
              loose: {
                padding: 'var(--spacing-06) var(--spacing-08)',
              },
            },
          },
        },
      },
      default: {
        background: 'var(--colors-neutral07-default)',
        borderBottom: '2px solid',
        fontWweight: 'bold',
        verticalAlign: 'bottom',
      },
      props: {
        isInverse: {
          background: 'var(--colors-tint03)',
        },
        isSortable: {
          padding: '0',
        },
        width: {
          width: '100%',
        },
      },
    },
    TablePagination: {
      components: {
        PageCount: {
          default: {
            margin: '0 var(--spacing-08)',
          },
        },
        RowsPerPageLabel: {
          default: {
            fontWeight: '600',
            lineHeight: '20px',
            margin: '0 16px 0 0',
            textAlign: 'left',
          },
        },
      },
      default: {
        alignItems: 'center',
        background: 'var(--colors-neutral07-default)',
        borderTop: '1px solid var(--colors-neutral06)',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 'var(--spacing-02)',
      },
      props: {
        isInverse: {
          background: 'var(--colors-tint03)',
          borderTop: '1px solid var(--colors-neutral08)',
        },
      },
    },
    TableRow: {
      default: {
        borderBottom: '1px solid var(--colors-neutral06)',
        color: 'inherit',
        display: 'table-row',
        outline: '0',
        verticalAlign: 'top',
        background: 'none',

        '&:last-child': {
          borderBottom: '0',
        },
      },
      props: {
        color: {
          danger: {
            background: 'var(--colors-danger-default)',
            color: 'var(--colors-neutral08)',
          },
          default: {
            background: 'inherit',
            color: 'inherit',
          },
          info: {
            background: 'var(--colors-primary-default)',
            color: 'var(--colors-neutral08)',
          },
          success: {
            background: 'var(--colors-success-default)',
            color: 'var(--colors-neutral08)',
          },
          warning: {
            background: 'var(--colors-pop04)',
            color: 'var(--colors-neutral)',
          },
        },
        hasHoverStyles: {
          default: {
            '&:hover': {
              background: 'var(--colors-tone02)',
            },
          },
          props: {
            isInverse: {
              '&:hover': {
                background: 'var(--colors-tint02)',
              },
            },
          },
        },
        hasZebraStripes: {
          default: {
            '&:nth-of-type(even)': {
              background: 'var(--colors-tone)',
            },
          },
          props: {
            isInverse: {
              '&:nth-of-type(even)': {
                background: 'var(--colors-tint)',
              },
            },
          },
        },
        isInverse: {
          borderBottom: '1px solid var(--colors-tint04)',
        },
      },
    },
  },
  default: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    color: 'var(--colors-neutral)',
    display: 'table',
    fontSize: 'var(--typeScale-size03-fontSize)',
    lineHeight: 'var(--typeScale-size03-lineHeight)',
    minWidth: '600px',
    width: '100%',
  },
  props: {
    isInverse: {
      color: 'var(--colors-neutral08)',
    },
    TableCellAlign: {
      center: 'center',
      inherit: 'inherit',
      justify: 'justify',
      left: 'left',
      right: 'right',
    },
    TableDensity: {
      compact: 'compact',
      loose: 'loose',
      normal: 'normal',
    },
    TableRowColor: {
      danger: 'danger',
      info: 'info',
      success: 'success',
      warning: 'warning',
    },
    TableSortDirection: {
      ascending: 'ascending',
      descending: 'descending',
      none: 'none',
    },
  },
};
