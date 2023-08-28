import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import README from './README.mdx';

import { SelectWrapper as SelectWrapperComponent } from '.';

export default {
  title: 'Components/ComponentLibrary/SelectWrapper',
  component: SelectWrapperComponent,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {},
} as Meta<typeof SelectWrapperComponent>;

const SelectWrapper: StoryFn<typeof SelectWrapperComponent> = (args) => {
  return <SelectWrapperComponent {...args} />;
};

export const DefaultStory = SelectWrapper.bind({});
DefaultStory.storyName = 'Default';

export const Demo = SelectWrapper.bind({});
Demo.args = {
  placeholder: 'This is a placeholder',
  children: 'This is a demo',
};
