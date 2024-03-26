module.exports = {
    // extends: ["@commitlint/config-conventional"],
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
                "[update]",
                "[style]",
                "[fix]",
                "[opt]"
            ]
        ],

        // 规则：'subject-full-stop' 确保提交信息的结尾有句号
        "subject-full-stop": [0, "never"],

        // 规则：'subject-case' 确保提交信息遵循给定的字符大小写
        "subject-case": [0, "never"]
    },

    // 提交规则应用的范围
    prompt: {
        messages: {
            type: "选择一个提交类型",
            scope: "输入更改影响的范围（可选）",
            customScope: " Denote the SCOPE of this change (optional)",
            subject: "简洁地描述更改 (使用英文)",
            body: "详细描述更改内容（使用英文）(可选)",
            footer: "列出更改的关联任务或 Breaking Changes (可选)",
            confirmCommit: "确认提交信息无误?"
        },
        // 是否启用范围选择
        scope: {
            required: false
        }
    }
};
