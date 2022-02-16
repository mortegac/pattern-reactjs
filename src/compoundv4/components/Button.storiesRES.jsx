import React from 'react';

import { Btn } from "./_button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-COMPONENTS/Button',
  component: Btn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Btn
  style={{backgroundColor: 'gray'}}
  innerText={args.innerText}
  fullwidth={args.fullwidth}
  // type='solid-orange'
  type={args.type }
  onClick={(e)=>alert(e)}
  className= {args.classname }
  disabled={ args.disabled }
/>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
  type:'default',
  innerText:'Get Started',
  fullwidth: true,
  disabled: true,
  classname: 'disabled',
};

export const SolidOrange = Template.bind({});
Default.args = {
  type:'solid-orange',
  innerText:'Get Started',
  fullwidth: true,
  disabled: false,
  classname: '',
};

// export const SolidPink = Template.bind({});
// SolidPink.args = {
//   type:'solid-pink',
//   title: 'Button',
// };

// export const OutlineBlue = Template.bind({});
// OutlineBlue.args = {
//   type:'outline-blue',
//   title: 'Button',
// };
