module.exports = {
  root: true,
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: ['react-app', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['styles', './src/styles'],
          ['types', './src/types'],
        ],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
