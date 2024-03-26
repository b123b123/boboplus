module.exports = {
    extends: ["@commitlint/config-conventional"],
    // 规则集
    rules: {
        // 规则：'type-enum' 定义提交类型的枚举
        "type-enum": [
            2,
            "always",
            [
                "feat", // 新功能
                "fix", // 修复
                "docs", // 文档变更
                "style", // 格式（不影响代码运行的变动）
                "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
                "perf", // 性能优化
                "test", // 增加测试
                "chore", // 构建过程或辅助工具的变动
                "revert", // 回退到之前的版本
                "build", // 打包
                "ci", // 持续集成
                "wip", // 工作进行中的提交
                "[new]", // 新功能
                "[style]",
                "[fix]",
                "[opt]",
                "update"
            ]
        ],

        // 规则：'subject-full-stop' 确保提交信息的结尾有句号
        "subject-full-stop": [0, "never"],

        // 规则：'subject-case' 确保提交信息遵循给定的字符大小写
        "subject-case": [0, "never"],
        "type-case": [0],
        "type-empty": [0],
        "scope-empty": [0],
        "scope-case": [0],
        "header-max-length": [0, "always", 72]
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[?(\w+)\]?:\s(.*)$/, // 设置提交消息的正则匹配规则，允许方括号包裹类型
            headerCorrespondence: ["type", "subject"]
        }
    }
};
