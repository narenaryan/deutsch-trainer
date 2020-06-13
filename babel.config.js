const plugins = [
  ['@babel/proposal-decorators', { decoratorsBeforeExport: true } ],
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread"
];

const presets = [
  "@babel/typescript"
];

module.exports = { plugins, presets };
