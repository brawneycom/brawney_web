import * as React from "react";

/** @type { import('@storybook/react').Preview } */
import { themes } from "@storybook/theming";
import "../libraries/baseline/compiled/baseline.css";

const preview = {
  docs: {
    theme: themes.dark,
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
