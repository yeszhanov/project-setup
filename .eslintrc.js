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
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],

  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['/node_modules/**', '/build/**'],

  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 1,
    'linebreak-style': 0,
    'no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: 'req|res|next|val' },
    ],
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
