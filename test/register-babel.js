require('@babel/register')({
  ignore: [/node_modules\/(?!@rplan)/],
  extensions: ['.jsx', '.js', '.ts', '.tsx'],
})
