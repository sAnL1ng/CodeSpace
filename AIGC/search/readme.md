# 搜索

- 项目亮点
    搜索比较难，可作为面试考点干货
- 全栈
    - 前端 防抖和节流
    - 后端
        - SQL posts LIKE `%${ keyword }%`
        - 各种数据放入hadop fink
        - Elastic Search    node
    - AIGC

- 数据？
    - python 爬虫
    - AIGC 生成数据
        get_respnse
        prompt  电商网站    手机    50条数据

        给我生成50条关于手机信息的数据，并以下列格式
        {
            id:1,
            name:'华为Mete60Pro'
            price:9999
        }
# 数据清洗
- pandas    来处理aigc 生成的txt文本
    - split ('\n') 按换行符切割生成的txt文本 因为 DataFrame  是  pd  最常用的数据结构 , 而且它只有一列
    - pandas 提供了DataFrame 实例
        pd.DataFrame({'product_name'})  column_name
    - pd.head() 
        默认给5条

- 文本 如何转成向量 数学表达    openai  提供embedding 接口
    cosin 值
- openai Completion \ chat \ embedding
- embedding
    openai的新接口
    查询 keyword + 数据 都进行向量计算
    cosin_similarity 两个向量间的相似度 => 0 代表相同，或相似的
    负值    则代表相反的
    