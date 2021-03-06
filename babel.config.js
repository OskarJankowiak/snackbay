module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@services': './src/services',
            '@assets': './assets',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@providers': './src/providers',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  };
};
