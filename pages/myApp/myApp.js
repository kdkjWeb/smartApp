Page({

  /**
   * 页面的初始数据
   */
  data: {
     workers:[
       {
          name: "张三",
          age: 30,
          gender: "male",
          mainType: "搬砖",
          credit: "4.7",
          technology: "5.0"
       },
       {
          name: "李四",
          age: 20,
          gender: "female",
          mainType: "挖洞",
          credit: "4.7",
          technology: "5.0"
       },
       {
          name: "王麻子",
          age: 39,
          gender: "male",
          mainType: "搬砖",
          credit: "4.7",
          technology: "5.0"
       }
     ]
  },

  refuseWorker(index) {
    let workers = Object.assign([], this.data.workers)
    workers.splice(index,1)
    this.setData({
      workers: workers
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("距离底部50px的时候被触发");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})