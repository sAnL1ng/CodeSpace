# 复杂组件设计

- 搜索组件
   - tailwindcss 
     - 原子化css
     - 一个单位是0.25rem 一个rem是16px
         h- px/16/4

- components
   - 一般业务组件 
   - common
     - 通用组件
   - layout 布局组件

- 项目亮点
  - 在搜索的时候使用了防抖，做了性能优化  , lodash js的业务框架

- 简历
  - 先完成再完美 
  - pdf格式
  - 会员 金山office 格式
  - 不要有错别字 

- 搜索功能介绍
  - 使用了vue全家桶+ts， 项目结构清晰合理
  - 使用了Element-plus提供的El-Popover、ElInput组件，实现了搜索热点、搜索结果的展示
  - 使用lodash 实现防抖
  - 歌曲播放数，使用了扩展Number原型链的方式优化展示
  - 充分的数据流设计，将应用开发分为 UI组件 + store 

- 给面试官介绍pinia 使用
  - 数据驱动界面
  - 选用pinia 更简单，更hooks化
  - 基于dev-tools 页面状态和数据状态的统一
  - 搜索模块数据流的专门设计
    - state showSearchView控制页面显示 searchKeyword与输入框的value双向绑定
    - getters showHot
    - actions suggest 

- 请介绍一个你设计的比较复杂的组件
  - 搜索组件
  - 状态比较复杂
      除了keyword searchResult 之外
      我还打理了showPopview hotList组件
  - 引入pinia 并提前设计数据流
  - suggest 组件粒度很 OK
      searchPopover
        ELPopOver
          ElInput slot
          SearchSuggest
  - 还使用了ts models 定义了interface 