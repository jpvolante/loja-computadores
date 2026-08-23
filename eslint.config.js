import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import _import from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/node_modules/",
    "**/build/",
    "**/dist/",
    "**/*.config.js",
    "**/*.config.ts",
    "**/node_modules/",
    "**/build/",
    "**/dist/",
    "**/out/",
    "**/package-lock.json",
    "**/yarn.lock",
    "**/pnpm-lock.yaml",
    "**/*.config.js",
    "**/*.config.ts",
    "**/vite.config.*",
    "**/webpack.config.*",
    "**/rollup.config.*",
    "**/babel.config.*",
    "**/.vscode/",
    "**/.idea/",
    "**/.DS_Store",
    "**/*.log",
    "**/coverage/",
    "**/.cache/",
    "**/.parcel-cache/",
    "**/.eslintcache",
    "**/.stylelintcache",
    "**/tmp/",
    "**/temp/",
    "**/public/",
    "**/*.min.js",
    "**/*.min.css",
    "**/sw.js",
    "**/workbox-*",
    "**/.storybook/",
    "**/storybook-static/",
]), {
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "prettier",
    )),

    plugins: {
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        import: fixupPluginRules(_import),
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },

        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "error",
        "react/jsx-key": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/no-array-index-key": "warn",
        "react/no-children-prop": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "warn",
        "react/require-render-return": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],

        "no-console": "warn",
        "no-debugger": "error",
        "no-alert": "warn",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-extra-boolean-cast": "error",
        "no-irregular-whitespace": "error",

        "no-multiple-empty-lines": ["error", {
            max: 2,
        }],

        "no-trailing-spaces": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-arrow-callback": "error",
        "arrow-spacing": "error",
        "comma-dangle": ["error", "never"],

        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        semi: ["error", "always"],

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],

        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
        }],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "import/order": ["error", {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
            "newlines-between": "always",

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],

        "import/no-unresolved": "off",
        "import/named": "error",
        "import/default": "error",
        "import/no-absolute-path": "error",
        "import/no-self-import": "error",
        "import/no-cycle": "error",
        "import/no-duplicates": "error",
        "jsx-a11y/alt-text": "error",
        "jsx-a11y/anchor-has-content": "error",
        "jsx-a11y/anchor-is-valid": "error",
        "jsx-a11y/aria-props": "error",
        "jsx-a11y/aria-proptypes": "error",
        "jsx-a11y/aria-unsupported-elements": "error",
        "jsx-a11y/heading-has-content": "error",
        "jsx-a11y/img-redundant-alt": "error",
        "jsx-a11y/no-access-key": "error",
        "jsx-a11y/role-has-required-aria-props": "error",
        "jsx-a11y/role-supports-aria-props": "error",

        "prettier/prettier": ["error", {}, {
            usePrettierrc: true,
        }],
    },
}]);