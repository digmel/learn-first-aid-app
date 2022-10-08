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
            "@configs": "./src/configs",
            "@router": "./src/router",
            "@store": "./src/store",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@data": "./src/data",
            "@svg": "./src/svg",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
