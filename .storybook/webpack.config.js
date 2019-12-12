const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
