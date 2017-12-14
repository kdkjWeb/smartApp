Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    indicatoColor:'rgba(254,52,83,1)',
    indicatorActiveColor:'#fe3453',
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    vertical:true,
    itemNum:"",
    itemTop:true,
    tabBar2List:[
      {
        text:"地区",
        isThis:false
      },{
        text: "工种",
        isThis: false
      },{
        text: "价格",
        isThis: false
      }
    ]
  },
  bindColor:function(e) {
    this.setData({ 
      itemNum:e.currentTarget.dataset.num
      })
    if (e.currentTarget.dataset.num == 2) {
      this.setData({
        itemTop:!this.data.itemTop
      });
    }
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
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
     wx.showToast({
       title: '这是一个toast',
       icon:'success',
       image:'../../img/one.png',
       mask:true,
       success:function(e){
         console.log(e);
         wx.stopPullDownRefresh();
       }
     })
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