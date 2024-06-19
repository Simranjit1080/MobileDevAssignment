module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@hooks': './src/hooks/',
          '@navigators': './src/navigators/',
          '@screens': './src/screens/',
          '@store': './src/store/',
          '@types': './src/types/',
        },
      },
    ],
  ],
};
