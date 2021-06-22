module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  },
  rules: {
    'react/prop-types': 'off'
  },
  globals: {
    React: true
  }
}
