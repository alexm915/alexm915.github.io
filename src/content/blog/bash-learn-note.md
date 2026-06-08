---
title: "Bash Scripts Guide"
description: "A simple bash script guide"
pubDate: "2026-06-08"
---

# 1. Shebang 是什么？

> 告诉系统：这个文件应该由谁解释执行

Bash 脚本以 `shebang` 开头。Shebang 是 `bash #` 和 `bang !` 的组合，后跟 bash shell 路径。这是脚本的第一行。Shebang 告诉 shell 通过 bash shell 执行它。Shebang 指向 bash 解释器的绝对路径。

```bash
#!/bin/bash
```

查看bash位置：
```bash
which bash
```

`set -e` 出故障立即跳出脚本
```bash
#!/bin/bash
set -e
```

# 2. 变量

bash的变量
1. 区分大小写；
2. 不能含有"\_", "-"符号

```bash
# 正确
name=Alex
# 错误
name = Alex

# 使用
echo $name
newName=$name
```

# 3. 输入与输出

## 收集输入

> `read` 等同 `cin`

```bash
#!/bin/bash 

# 1. 读取用户输入并将其存储在变量中
echo "What's your name?" 
read entered_name 
echo -e "\nWelcome to bash tutorial" $entered_name

# 2. 从文件读取, 读取input.txt中的每一行
while read line
do
  echo $line
done < input.txt

# 3. 命令行参数
## greating.sh
#!/bin/bash
echo "Hello, $1, $2, $3!"
## 在terminal中输入 ./greating.sh Alex Bob Coco, 替代123参数，输出
Hello, Alex, Bob, Coco

```

## 显示输出
```bash
# 1. printout to terminal
echo "Hello, World!" 

# 2. 覆盖写入文件
echo "Hello, World!" > file.md
# 3. 追加写入文件
echo "Hello, World!" >> file.md

# 4. 重定向输出
ls > files.txt
```

## 012描述符，错误输出
Linux 中每个程序启动时，系统都会给它打开 3 个默认文件描述符（File Descriptor）。

| 编号  | 名称              | 简写     | 默认位置 |
| --- | --------------- | ------ | ---- |
| 0   | Standard Input  | stdin  | 键盘   |
| 1   | Standard Output | stdout | 终端   |
| 2   | Standard Error  | stderr | 终端   |

```bash
# 错误输出
program 2> error.log
# 标准输出+错误输出，都写入log.txt
program > log.txt 2>&1


```

| **命令**                   | **标准输出（stdout）去向** | **标准错误（stderr）去向** | **实际应用场景**                    |
| ------------------------ | ------------------ | ------------------ | ----------------------------- |
| `program > log.txt 2>&1` | `log.txt`          | `log.txt`          | 需要收集所有运行日志（包括报错信息）到一个文件中。     |
| `program 2>&1 > log.txt` | `log.txt`          | 屏幕（终端）             | 只想把正常输出存盘，而把错误信息实时打印在屏幕上以便排查。 |


# 4. 条件判断if/else, switch/case

## if else

| Bash | 含义  |
| ---- | --- |
| -eq  | ==  |
| -ne  | !=  |
| -gt  | >   |
| -lt  | <   |
| -ge  | >=  |
| -le  | <=  |

```bash
if [[ condition ]]; then
	statement
elif [[ condition ]]; then
	statement 
else
	do this by default
fi

# -a = AND, -o = OR
if [ $a -gt 60 -a $b -lt 100 ]
```


## switch case

```bash
fruit="apple"

case $fruit in
    "apple")
        echo "This is a red fruit."
        ;;
    "banana")
        echo "This is a yellow fruit."
        ;;
    "orange")
        echo "This is an orange fruit."
        ;;
    *)
        echo "Unknown fruit."
        ;;
esac
```


# 5. 循环Loop
## while

```bash
i=1

while [ $i -le 5 ]
do
    echo $i
    ((i++))
done
```

## for

```bash
for i in {1..5}
do
    echo $i
done
```


---
# 6. 使用 cron 定时运行脚本

```bash
# 查看所有定时脚本
crontab -l
# edit定时脚本
crontab -e
# * 代表分别的分钟、小时、日、月、周几
* * * * * sh /path/to/script.sh
```

| **安排**        | **描述**                 | **示例**                           |
| ------------- | ---------------------- | -------------------------------- |
| `0 0 * * *`   | 每天午夜运行一个脚本             | `0 0 * * * /path/to/script.sh`   |
| `*/5 * * * *` | 每 5 分钟运行一个脚本           | `*/5 * * * * /path/to/script.sh` |
| `0 6 * * 1-5` | 从星期一到星期五每天早上 6 点运行一个脚本 | `0 6 * * 1-5 /path/to/script.sh` |
| `0 0 1-7 * *` | 每个月的前 7 天运行一个脚本        | `0 0 1-7 * * /path/to/script.sh` |
| `0 12 1 * *`  | 每个月的第一天中午 12 点运行一个脚本   | `0 12 1 * * /path/to/script.sh`  |


# Resource
1. [Bash 脚本教程——Linux Shell 脚本和命令行入门教程](https://www.freecodecamp.org/chinese/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/#pre-requisites)
