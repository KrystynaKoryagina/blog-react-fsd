export function buildSvgLoader() {
  return {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          // TODO remove???
          // svgoConfig: {
          //   plugins: [
          //     {
          //       name: 'convertColors',
          //       params: {
          //         currentColor: true,
          //       }
          //     }
          //   ]
          // }
        },
      },
    ],
  };
}
