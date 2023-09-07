import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { SelectButton } from '../select-button/select-button';
import { SelectOption } from './select-option';
import README from './README.mdx';

import {
  SelectWrapper,
  // useSelectWrapperContext,
  // SelectWrapperContextProvider,
} from '.';

// const SelectWrapperDecorator = (Story, context) => (
//   <SelectWrapperContextProvider>
//     <Story {...context} />
//   </SelectWrapperContextProvider>
// );

export default {
  title: 'Components/ComponentLibrary/SelectWrapper',
  component: SelectWrapper,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {},
  // decorators: [SelectWrapperDecorator],
} as Meta<typeof SelectWrapper>;

const Template: StoryFn<typeof SelectWrapper> = (args) => {
  return <SelectWrapper {...args} />;
};

export const DefaultStory = Template.bind({});
DefaultStory.storyName = 'Default';

export const Demo = Template.bind({});
Demo.args = {
  placeholder: 'This is a placeholder',
  children: 'This is a demo',
};

export const Children: StoryFn<typeof SelectWrapper> = (args) => {
  // const { toggleOpen } = useSelectWrapperContext();

  // const handleButtonClick = () => {
  //   toggleOpen(); // This will toggle the close state of the SelectWrapper
  // };

  return (
    <>
      <SelectWrapper triggerComponent={<SelectButton>Click Me</SelectButton>}>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectWrapper>
      <SelectWrapper triggerComponent={<SelectButton>Click Me</SelectButton>}>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectWrapper>
    </>
  );
};
