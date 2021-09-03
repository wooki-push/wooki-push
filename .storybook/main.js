// .storybook/main.js
const path = require("path");
module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../components"),
      "@assets": path.resolve(__dirname, "../assets"),
    };
    return config;
  },
};
