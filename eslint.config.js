import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Ignore patterns
  {
    ignores: ['dist', 'build', 'node_modules', '*.config.js', '*.d.ts']
  },

  // Global ESLint configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
          experimentalObjectRestSpread: true
        },
        sourceType: 'module',
        requireConfigFile: false,
        allowImportExportEverywhere: true
      }
    },
    
    // React specific settings
    settings: {
      react: {
        version: '18.3',
        pragma: 'React',
        fragmentPragma: 'Fragment',
        createClass: 'createReactClass'
      },
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' }
      ],
      propWrapperFunctions: [
        'forbidExtraProps',
        { property: 'freeze', object: 'Object' }
      ],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx']
        }
      }
    },

    // Plugin configurations
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },

    // Combined rules
    rules: {
      // Include recommended configs
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // React specific rules
      'react/jsx-no-target-blank': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-deprecated': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-unknown-property': 'error',
      'react/require-render-return': 'error',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { 
          allowConstantExport: true,
          allowExportNames: ['metadata', 'config']
        }
      ],

      // General JavaScript rules
      'no-unused-vars': ['warn', { 
        vars: 'all', 
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }],
      'no-console': ['warn', { 
        allow: ['warn', 'error', 'info'] 
      }],
      'prefer-const': 'warn',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
      'no-duplicate-imports': 'error',
      'sort-imports': ['warn', {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }],

      // ES6+ features
      'arrow-parens': ['warn', 'always'],
      'no-confusing-arrow': ['error', { allowParens: true }],
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      'template-curly-spacing': ['warn', 'never']
    }
  },

  // Specific overrides for test files
  {
    files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'],
    rules: {
      'no-unused-expressions': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  }
]