module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/(?!@babel/runtime)'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  setupFiles: ['core-js'],
};
