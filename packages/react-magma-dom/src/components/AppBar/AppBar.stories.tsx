import React from 'react';
import { AppBar, AppBarProps } from './index';
import { NavTabs, NavTab } from '../NavTabs';
import { Search } from '../Search';
import { Spacer } from '../Spacer';
import { TabsIconPosition } from '../Tabs';
import { magma } from '../../theme/magma';
import { ImageIcon, FavoriteIcon, WorkIcon } from 'react-magma-icons';
import { Story, Meta } from '@storybook/react/types-6-0';

const Template: Story<AppBarProps> = args => (
  <AppBar {...args}>{args.children}</AppBar>
);

export default {
  title: 'AppBar',
  component: AppBar,
} as Meta;

export const Default = Template.bind({});
Default.args = {
  children: 'Simple AppBar',
  isCompact: false,
  isInverse: false,
};

const TabsTemplate: Story<AppBarProps> = args => (
  <AppBar {...args}>
    <strong
      style={{
        alignItems: 'center',
        display: 'flex',
        whiteSpace: 'nowrap',
      }}
    >
      <ImageIcon size={args.isCompact ? 24 : 40} />
      <Spacer size={magma.spaceScale.spacing03} />
      LOGO
    </strong>
    <Spacer size={magma.spaceScale.spacing12} />
    <Search
      isInverse={args.isInverse}
      onSearch={() => {}}
      placeholder="Search for content..."
    />
    <Spacer size={magma.spaceScale.spacing06} />
    <NavTabs
      aria-label="Navigation"
      backgroundColor="transparent"
      iconPosition={TabsIconPosition.left}
      isInverse={args.isInverse}
    >
      <NavTab icon={<FavoriteIcon />} isActive to="#">
        Favorites
      </NavTab>
      <NavTab icon={<WorkIcon />} to="#">
        Workspace
      </NavTab>
    </NavTabs>
  </AppBar>
);

export const Tabs = TabsTemplate.bind({});
Tabs.args = {
  ...Default.args,
  children: null,
};
