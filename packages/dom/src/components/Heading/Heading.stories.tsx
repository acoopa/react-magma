import React from 'react';
import { Heading } from '.';
import { Meta } from '@storybook/react';

const meta: Meta = {
  component: Heading,
  title: 'Heading',
};

export default meta;

export const Default = () => {
  return (
    <>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </>
  );
};
