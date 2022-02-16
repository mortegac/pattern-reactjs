import { create } from '@storybook/theming';
import LogoRia from './Ria_logo.svg';
import Logo from './logo.svg';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: 'hotpink',

  // UI
  appBg: '#363a45',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: '#363a45',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Public Site',
  brandUrl: 'https://app.riamoneytransfer.com/',
  brandImage: Logo,
});