import React from 'react';
import { Datagrid } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatagridProps } from './Datagrid';
import { TablePaginationProps, TableRowColor } from '../Table';
import { usePagination } from '../Pagination/usePagination';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { magma } from '../../theme/magma';
import { Spacer, SpacerAxis } from '../Spacer';

const rowsForPagination = [
  {
    id: 1,
    col1: '1 Lorem ipsum dolor sit amet consectetur',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 2,
    col1: '2 Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 3,
    col1: '3 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 4,
    col1: '4 Lorem ipsum dolor sit amet consectetur',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 5,
    col1: '5 Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 6,
    col1: '6 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 7,
    col1: '7  Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 8,
    col1: '8 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 9,
    col1: '9 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 10,
    col1: '10 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 11,
    col1: '11 Lorem ipsum dolor sit amet consectetur',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 12,
    col1: '12 Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 13,
    col1: '13 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 14,
    col1: '14 Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 15,
    col1: '15 Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 16,
    col1: '16 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 17,
    col1: '17 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 18,
    col1: '18 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 19,
    col1: '19 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 20,
    col1: '20 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 21,
    col1: '21 Lorem ipsum dolor sit amet consectetur',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 22,
    col1: '22 Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 23,
    col1: '23 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 24,
    col1: '24 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 25,
    col1: '25 Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
];

const Template: Story<Omit<DatagridProps, 'selectedRows'>> = args => (
  <Datagrid {...args}>Sample Text</Datagrid>
);

const ControlledTemplate: Story<
  Omit<DatagridProps, 'defaultSelectedRows'>
> = args => {
  const [selectedRows, updatedSelectedRows] = React.useState<
    (string | number)[]
  >([1]);

  return (
    <Datagrid
      {...args}
      selectedRows={selectedRows}
      onSelectedRowsChange={updatedSelectedRows}
    >
      Sample Text
    </Datagrid>
  );
};

const ControlledPaginatedTemplate: Story<DatagridProps> = ({
  paginationProps,
  ...args
}) => {
  const [page, updatePage] = React.useState<number>(1);
  const [rowsPerPage, updateRowsPerPage] = React.useState<number>(5);

  function handlePageChange(_: React.SyntheticEvent, newPage: number) {
    window.confirm('Do you really want to update the page?')
      ? updatePage(newPage)
      : alert('Did not update page');
  }

  function handleRowsPerPageChange(newRowsPerPage: number) {
    window.confirm(
      `Do you really want to update the rows per page to ${newRowsPerPage}?`
    )
      ? updateRowsPerPage(newRowsPerPage)
      : alert('Did not update rows per page');
  }

  const passedInPaginationProps = {
    page,
    rowsPerPage,
    rowsPerPageValues: paginationProps.rowsPerPageValues,
    onPageChange: handlePageChange,
    onRowsPerPageChange: handleRowsPerPageChange,
  };

  return <Datagrid {...args} paginationProps={passedInPaginationProps} />;
};

export default {
  component: Datagrid,
  title: 'Datagrid',
  argTypes: {
    isInverse: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const columns = [
  { field: 'col1', header: 'Col 1' },
  { field: 'col2', header: 'Col 2' },
  { field: 'col3', header: 'Col 3' },
  { field: 'col4', header: 'Col 4' },
];

const coloredRows = [
  {
    id: 1,
    color: TableRowColor.danger,
    col1: 'Lorem ipsum dolor sit amet consectetur',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 2,
    color: TableRowColor.info,
    col1: 'Lorem ipsum dolor sit amet',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
  {
    id: 3,
    color: TableRowColor.success,
    col1: 'Lorem ipsum dolor',
    col2: 'Lorem ipsum dolor',
    col3: 'Lorem ipsum dolor',
    col4: 'Lorem ipsum',
  },
];

const defaultArgs = {
  columns: columns,
  rows: rowsForPagination,
  hasHoverStyles: false,
  hasVerticalBorders: false,
  hasZebraStripes: false,
  isSelectable: false,
  paginationProps: {},
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const ColoredRows = Template.bind({});
ColoredRows.args = {
  ...defaultArgs,
  rows: coloredRows,
};

export const Selectable = Template.bind({});
Selectable.args = { ...defaultArgs, isSelectable: true };

export const ControlledSelectable = ControlledTemplate.bind({});
ControlledSelectable.args = {
  ...defaultArgs,
  isSelectable: true,
};

export const DisabledSelectableRow = Template.bind({});
DisabledSelectableRow.args = {
  ...defaultArgs,
  isSelectable: true,
  rows: [
    ...defaultArgs.rows,
    {
      id: 4,
      col1: 'Lorem ipsum dolor',
      isSelectableDisabled: true,
      col2: 'Lorem ipsum dolor',
      col3: 'Lorem ipsum dolor',
      col4: 'Lorem ipsum',
    },
  ],
};

export const PaginationChangedDefaults = Template.bind({});
PaginationChangedDefaults.args = {
  ...defaultArgs,
  paginationProps: {
    defaultPage: 2,
    defaultRowsPerPage: 5,
    rowsPerPageValues: [5, 10, 20],
  },
};

export const ControlledPagination = ControlledPaginatedTemplate.bind({});
ControlledPagination.args = {
  ...defaultArgs,
  paginationProps: {
    rowsPerPageValues: [5, 10, 20],
  },
};

export const WithoutPagination = Template.bind({});
WithoutPagination.args = {
  ...defaultArgs,
  hasPagination: false,
};

const CustomPaginationComponent: React.FunctionComponent<
  TablePaginationProps
> = props => {
  const { itemCount, rowsPerPage, onPageChange } = props;
  const { page, pageButtons } = usePagination({
    count: itemCount / rowsPerPage,
    numberOfAdjacentPages: 0,
    numberOfEdgePages: 0,
    onPageChange,
  });

  const previousButton = pageButtons[0];
  const nextButton = pageButtons[pageButtons.length - 1];

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      You are on page {page}
      <Spacer axis={SpacerAxis.horizontal} size={magma.spaceScale.spacing05} />
      <ButtonGroup>
        <Button
          disabled={previousButton.disabled}
          onClick={previousButton.onClick}
        >
          Previous Page
        </Button>
        <Button disabled={nextButton.disabled} onClick={nextButton.onClick}>
          Next Page
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const PaginationWithCustomComponent = Template.bind({});
PaginationWithCustomComponent.args = {
  ...defaultArgs,
  components: {
    Pagination: CustomPaginationComponent,
  },
};
