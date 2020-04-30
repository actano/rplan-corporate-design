module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  ignore: [
    /node_modules\/(?!@rplan)/,
  ],
}
