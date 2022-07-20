module.exports = {
  singleQuote: true, // 使用单引号
  useTabs: false, /// 使用tab缩进
  printWidth: 140, //每行最多多少个字符换行
  tabWidth: 2, // tab缩进大小
  semi: true, // 使用分号
  htmlWhitespaceSensitivity: 'strict', // 指定 HTML 文件的全局空白区域敏感度
  arrowParens: 'always', // 总是使用箭头函数参数括号
  bracketSpacing: true, // 对象中的空格
  quoteProps:'as-needed', // 仅在需要时使用引号包裹对象的键名
  proseWrap: 'preserve', // 不处理换行
  trailingComma: 'all', // 多行时尽可能使用尾后逗号
  endOfLine: 'auto', // 行尾符
  plugins: [require('prettier-plugin-tailwindcss')],
};
