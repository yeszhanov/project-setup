module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 1,
    'linebreak-style': 0,
    // 'no-unused-vars': 'warn',
  },
};
