import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
    {
        plugins: {
            react,
            reactHooks
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'reactHooks/rules-of-hooks': 'error',
            'reactHooks/exhaustive-deps': 'warn',
            'react/button-has-type': 'error',
            'react/hook-use-state': 'error'
        }
    },
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
    ...tseslint.configs.recommended,
];