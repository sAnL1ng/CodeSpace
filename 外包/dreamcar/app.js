// 应用
// Page() 页面
// 配置
App({
  globalData: {
    
  },
  onLaunch() {
    // 在应用启动时，发生接口请求
    // console.log('应用起动了')
    wx.request({
      url:'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response) =>{
        // console.log(response);
        Object.assign(this.globalData,
          response.data)
          // console.log(this,'----');
      }
    })
  }
})