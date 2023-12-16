<!-- git 是一个分布式代码管理工具 -->
1. git init 初始化本地仓库 （让git掌管文件夹）
    - git-learn 工作区
    - .git 隐藏文件夹 

2. git status 查看该仓库中的文件状态
3. git add . 提交所有的文件到git暂存区
    先add 再commit
    这其中过程分几步？
    并且带业务场景
    IF 在网易上班 要求：请写一个vue + langchain 聊天功能
    1. py
    2. vue页面
    一共有两个文件 暂存区
    - 多次git add 
    git add 1. py
    git add 2. vue页面
    git commit -m '' （这是老板要看的）
    一上午 大概会提交3次
    两个文件
- 当我们在写代码时，有可能会改到别人的代码，或者摸了会🐟 忘了提交了什么代码时
    git status 查看当前仓库状态
    对比修改？
    git diff 作用：在add之前，再次确认你改了哪些？
4.git commit -m '你的注释' 将暂存区的文件提交到master区域 
5.git push origin master 将文件推送到远程仓库


- test