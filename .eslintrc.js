module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  // https://eslint.bootcss.com/docs/rules/
  rules: {
    // 自定义规则
    // 第一个参数
    // "off"或0-关闭规则
    // "warn"或1-将该规则作为警告打开（不影响退出代码）
    // "error"或2-将规则作为错误打开（退出代码将为1）

    // 第二个参数
    // always（默认）：在语句末尾需要分号
    // never：不允许加分号
    semi: [0, "never"],
    "space-before-function-paren": ["error", "always"],
  },
}
