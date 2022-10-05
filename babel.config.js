module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@router": "./src/router",
            "@store": "./src/store",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@utilities": "./src/utilities",
            "@data": "./src/data",
            "@svg": "./src/svg",
          },
        },
      ],
      "react-native-reanimated/plugin", //Added for React Native Animation V2
    ],
  };
};
