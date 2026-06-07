---
title: "Today I Learned: 我的第一篇 Bash 脚本笔记"
description: "记录今天学习 Bash 循环与变量碰到的坑"
pubDate: "2026-06-07"
heroImage: "/blog-placeholder-1.jpg"
---

## 今天学了什么？
今天正式开始精进 Linux 命令行，写下了我的第一个 Bash 脚本。

### 1. 变量定义不能有空格
在 Bash 中定义变量，`=` 两边千万不能加空格，否则会被当成命令执行：
\`\`\`bash
# 错误写法
name = "tmp" 

# 正确写法
name="tmp"
\`\`\`

### 2. 完美的条件判断
学会了如何用 `if [ -f file.txt ]` 来判断文件是否存在。