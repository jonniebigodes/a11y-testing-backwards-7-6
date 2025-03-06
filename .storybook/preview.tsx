import type { Preview } from "@storybook/react";
import { withRouter, withThemeProvider } from "./decorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider, withRouter],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Theme for the components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "light" },
          { value: "dark", icon: "moon", title: "dark" },
          { value: "purple", icon: "lightning", title: "purple" },
          { value: "pink", icon: "heart", title: "pink" },
          { value: "eighties", icon: "star", title: "80's" },
        ],
      },
    },
  },
};

export default preview;
