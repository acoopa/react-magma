import React from 'react';
import {
  Dropdown,
  DropdownProps,
  DropdownDropDirection,
  DropdownAlignment,
} from './index';
import { DropdownButton } from './DropdownButton';
import { DropdownContent } from './DropdownContent';
import { DropdownDivider } from './DropdownDivider';
import { DropdownMenuGroup } from './DropdownMenuGroup';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuNavItem } from './DropdownMenuNavItem';
import { DropdownSplitButton } from './DropdownSplitButton';
import { Button, ButtonColor, ButtonSize, ButtonVariant } from '../Button';
import { Card, CardBody } from '../Card';
import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import { PasswordInput } from '../PasswordInput';
import { SettingsIcon, MenuIcon } from 'react-magma-icons';
import { Story, Meta } from '@storybook/react/types-6-0';

const Template: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <DropdownButton>Basic Dropdown</DropdownButton>
    <DropdownContent>
      <DropdownMenuItem>Menu item 1</DropdownMenuItem>
      <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
    </DropdownContent>
  </Dropdown>
);

const HeaderIconTemplate: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <DropdownButton>Full Content Dropdown</DropdownButton>
    <DropdownContent>
      <DropdownMenuGroup header="Section title A">
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item 2</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownDivider />
      <DropdownMenuGroup header="Section title B">
        <DropdownMenuItem icon={<MenuIcon />}>Menu item 3</DropdownMenuItem>
        <DropdownMenuItem icon={<SettingsIcon />}>Menu item 4</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownDivider />
      <DropdownMenuGroup>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownContent>
  </Dropdown>
);

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    dropDirection: {
      control: {
        type: 'select',
        options: DropdownDropDirection,
      },
    },
    alignment: {
      control: {
        type: 'select',
        options: DropdownAlignment,
      },
    },
    onClose: {
      action: 'onClose',
    },
  },
} as Meta;

export const Default = Template.bind({});
Default.args = {};

export const HeaderAndIcons = HeaderIconTemplate.bind({});
Default.args = {};

export const OnClickOutside = Template.bind({});
OnClickOutside.args = {
  ...Default.args,
  onClose: event => alert('I am closing'),
};

const AlignmentTemplate: Story<DropdownProps> = args => (
  <>
    <Dropdown
      {...args}
      dropDirection={DropdownDropDirection.right}
      activeIndex={1}
    >
      <DropdownButton>Right Aligned Dropdown</DropdownButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <Dropdown {...args} dropDirection={DropdownDropDirection.left}>
      <DropdownButton>Left Aligned Dropdown</DropdownButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <br />
    <Dropdown {...args} dropDirection={DropdownDropDirection.up}>
      <DropdownButton>Top Aligned Dropdown</DropdownButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <Dropdown {...args} dropDirection={DropdownDropDirection.down}>
      <DropdownButton>Bottom Aligned Dropdown</DropdownButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
  </>
);

export const AlignmentButton = AlignmentTemplate.bind({});
AlignmentButton.args = { ...Default.args };

const LargeTemplate: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <DropdownButton size={ButtonSize.large}>Basic Dropdown</DropdownButton>
    <DropdownContent>
      <DropdownMenuItem>Menu item 1</DropdownMenuItem>
      <DropdownMenuItem>Menu item number two</DropdownMenuItem>
    </DropdownContent>
  </Dropdown>
);

export const LargeButton = LargeTemplate.bind({});
LargeButton.args = { ...Default.args };

const CustomTemplate: Story<DropdownProps> = args => (
  <>
    <Dropdown {...args}>
      <DropdownButton
        aria-label="Extra icon example"
        color={ButtonColor.secondary}
        size={ButtonSize.large}
        variant={ButtonVariant.link}
        icon={<SettingsIcon />}
      ></DropdownButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <br />
    <Dropdown>
      <DropdownButton
        aria-label="Extra icon example"
        size={ButtonSize.large}
        icon={<MenuIcon />}
      />
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <br />
    <Dropdown isInverse>
      <DropdownButton
        aria-label="Extra icon example"
        size={ButtonSize.large}
        icon={<MenuIcon />}
      />
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
  </>
);

export const CustomIconButton = CustomTemplate.bind({});
CustomIconButton.args = { ...Default.args };

const SmallTemplate: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <DropdownButton size={ButtonSize.small}>Basic Dropdown</DropdownButton>
    <DropdownContent>
      <DropdownMenuItem>Menu item 1</DropdownMenuItem>
      <DropdownMenuItem>Menu item number two</DropdownMenuItem>
    </DropdownContent>
  </Dropdown>
);

export const SmallButton = SmallTemplate.bind({});
SmallButton.args = { ...Default.args };

const SplitTemplate: Story<DropdownProps> = args => (
  <>
    <Dropdown {...args}>
      <DropdownSplitButton aria-label="Split" size={ButtonSize.medium}>
        Split Dropdown
      </DropdownSplitButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <br />
    <Dropdown {...args}>
      <DropdownSplitButton
        aria-label="Split"
        size={ButtonSize.medium}
        variant={ButtonVariant.solid}
        color={ButtonColor.danger}
      >
        Split Dropdown
      </DropdownSplitButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
    <br />
    <Dropdown isInverse>
      <DropdownSplitButton
        aria-label="Split"
        size={ButtonSize.medium}
        variant={ButtonVariant.solid}
      >
        Split Dropdown Inverse
      </DropdownSplitButton>
      <DropdownContent>
        <DropdownMenuItem>Menu item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu item number two</DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
  </>
);
export const SplitButton = SplitTemplate.bind({});
SplitButton.args = { ...Default.args };

const LinkMenuTemplate: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <DropdownButton>Dropdown of links</DropdownButton>
    <DropdownContent>
      <DropdownMenuNavItem
        icon={<SettingsIcon />}
        to="http://www.google.com"
        target="_blank"
      >
        Google
      </DropdownMenuNavItem>
      <DropdownMenuNavItem
        icon={<MenuIcon />}
        to="http://www.cengage.com"
        target="_blank"
      >
        Cengage
      </DropdownMenuNavItem>
    </DropdownContent>
  </Dropdown>
);

export const LinkMenu = LinkMenuTemplate.bind({});
LinkMenu.args = { ...Default.args };

const FormTemplate: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <DropdownButton>Dropdown with form</DropdownButton>
    <DropdownContent>
      <form style={{ margin: 0, padding: '16px' }}>
        <Input labelText="Email Address" />
        <PasswordInput labelText="Password" />
        <Checkbox labelText="Remember me" />
        <div style={{ textAlign: 'center' }}>
          <p>
            By signing in, you agree to our <a href="#terms">Terms of use</a>.
          </p>
          <Button isFullWidth>Sign In</Button>
          <p>
            <a href="#password">Forgot password?</a>
          </p>
        </div>
      </form>
    </DropdownContent>
  </Dropdown>
);

export const Form = FormTemplate.bind({});
Form.args = { ...Default.args };

export const Inverse = HeaderIconTemplate.bind({});
Inverse.args = {
  ...Default.args,
  isInverse: true,
};

Inverse.decorators = [
  Story => (
    <Card isInverse>
      <CardBody>
        <Story />
      </CardBody>
    </Card>
  ),
];
