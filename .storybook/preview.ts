
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
    },
  },
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
