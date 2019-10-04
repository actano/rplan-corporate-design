module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
    }],
    '@babel/preset-react',
  ],
  ignore: [
    /node_modules\/(?!@rplan)/,
  ],
}
