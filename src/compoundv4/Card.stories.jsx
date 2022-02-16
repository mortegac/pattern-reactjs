import React from 'react';

import { Cardv4, Img, Btn, Heading } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-COMPONENTS/Card v4',
  component: Cardv4,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  size: {
    table: {
      category: 'Sizes',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Cardv4 {...args}>
<Heading>{args.title}</Heading>
<Img
    src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
    alt="La llama que llama"
    type={"avatar"}
/>
<Btn>Go </Btn>
</Cardv4>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
  type:'',
  title: 'Button',
};

export const SolidPink = Template.bind({});
SolidPink.args = {
  type:'solid-pink',
  title: 'Button',
};

export const OutlineBlue = Template.bind({});
OutlineBlue.args = {
  type:'outline-blue',
  title: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
