module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@app": "./src/app",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@zustand": "./src/zustand",
            "@generated": "./src/__generated__",
          },
        },
      ],
    ],
  };
};
