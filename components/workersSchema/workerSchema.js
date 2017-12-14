/**
 * 工人概要组件
 * 主要复用于工人申请列表，工程详情中的工人信息列表等
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     model:{
       type: Object
     }
  },
  observer() {
    console.log(1)
  },
  /**
   * 组件的初始数据
   */
  data: {
    header: '../../img/workerHeader.jpg',
    mode: '',
    animationData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    receive() {
      //执行接收员工的api,成功后调用以下方法
       wx.showToast({
          title: "接收成功",
          icon: "success",
          duration: 1000
       })
       //执行删除动画，然后发送删除index给调用者
       let animation = wx.createAnimation({
         duration: 1000,
         timingFunction: 'ease'
       })

       this.animation = animation
       animation.opacity(0).height(0).step()

       this.setData({
         animationData: animation.export()
       })
       setTimeout(function () {
         this.triggerEvent('refuseWorker', this.__wxExparserNodeId__)
       }.bind(this), 1000)
       
    },
    refuse(event) {
      console.log(event)
      //执行拒绝员工的api,成功后调用以下方法
      wx.showToast({
        title: "拒绝成功",
        icon: "success",
        duration: 1000
      })
    },
    enterDetail() {
      console.log("进入工人详情页面")
    }
  },

  ready() {
    let animation = wx.createAnimation({
       duration: 1000,
       timingFunction: 'ease'
    })

    this.animation = animation
    animation.opacity(1).height(150).step()

    this.setData({
       animationData: animation.export()
    })
  },
  detached() {
    console.log("销毁了")
    
  }
})
