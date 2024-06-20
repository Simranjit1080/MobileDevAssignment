module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components/',
          '@navigators': './src/navigators',
          '@screens': './src/screens/',
          '@types': './src/types',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
