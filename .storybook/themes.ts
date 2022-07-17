import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const themes = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme

  // Base color
  colorSecondary: '#0E367E',

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#0E367E',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'OneData Storybook',
  brandUrl: 'https://www.onedatasoftware.com',
  brandImage:
    'https://www.onedatasoftware.com/wp-content/uploads/2018/06/OD_LOGO_01.png',
})

addons.setConfig({
  themes,
})

export default themes;