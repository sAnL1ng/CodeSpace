# 机器学习任务
transformers huggingface的核心库
- pipeline 分发任务
    pipeline(task,model)
- 数组和 hashTable|Dict 
    - 相同点
        数据容器 线性
    - 区别
        数组 Dict(O (1) ) 栈 队列 链表 连续和不连续 内存空间
        非线性 二叉树 图
        查找线性容器是否有某个值等于5
- transformers 支持哪些nlp 任务
    SUPPORTED_TASKS 常量
    items 值是一个Dict JS JSON
    1. for k,v in  
    2. for 计数循环
    图解HTTP协议
    计算机组成原理
- 读/写 操作系统 I/O 操作  Input 内存中 
Output 硬盘 
    同步代码 I/O  远程=> 内存|硬盘 网络传输的耗时
    for() ms 结束 多进程切换 轮循
    阻塞 
- 人生苦短 我用python
    requests.get(url, stream=True).raw
    http 请求的方法 get 明文请求 a 
    post 提交表单
    - PIL库 图片的读写等...
        Image   r
        ImageDraw   w   
    - object-de