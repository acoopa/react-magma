import React from 'react';
import { Announce } from '.';
import { Button } from '../Button';

import { Story, Meta } from '@storybook/react';

const meta: Meta = {
  component: Announce,
  title: 'Announce',
};

export default meta;

export const Default = () => {
  const [announceContent, setAnnounceContent] = React.useState(
    'Initial content'
  );

  return (
    <>
      <p>This content will be read by a screen reader when it changes.</p>
      <p>
        <Button
          onClick={() =>
            setAnnounceContent('New content replacing the initial content')
          }
        >
          Update content
        </Button>
      </p>
      <Announce>{announceContent}</Announce>
    </>
  );
};
