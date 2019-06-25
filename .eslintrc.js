module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-new": ["off"],
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        printWidth: 120,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingCooma: "none",
        jsxBracketSameLine: false
      }
    ],
    "vue/html-closing-bracket-newline": "off",
    "vue/multiline-html-element-content-newline": "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  }
};
