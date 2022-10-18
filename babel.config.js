module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
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
            "@utils": "./src/utils",
            "@data": "./src/data",
            "@svg": "./src/svg",
            "@theme": "./src/theme",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
