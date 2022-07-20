// git commit -m <type>[optional scope]: <description>
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 系统构建
        'ci', // CI/CD 调整
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'perf', // 性能提升
        'refactor', // 重构（既不是新增功能，也不是修改bug的代码变动）
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'docs', // 文档（documentation）
        'style', // 格式调整（不影响代码运行的变动）
        'chore' // 不属于以上类型的其他类型(日常事务)
      ]
    ]
  }
};
