import type { Preview } from "@storybook/react";
import "../src/css/globals.css";

import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      routing: { path: '/', useStoryElement: true },
    }),
  },

  decorators: [
    withRouter,
    withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  })]
};

export default preview;
