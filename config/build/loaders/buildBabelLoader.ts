export function buildBabelLoader(isDev: boolean) {
  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            // TODO check extractedTranslations folder
            // Урок 17 Babel. Extract plugin [optional]
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
              saveMissing: true,

            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
