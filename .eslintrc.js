module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 0,
    'react/jsx-no-duplicate-props': [0, { ignoreCase: true }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
