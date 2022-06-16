// pages/goujian/goujian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgAtext: [{
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/goujian/爱奥尼柱式.png",
        text: "爱奥尼柱式"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/goujian/爱奥尼柱式.png",
        text: "科林斯柱式"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/goujian/塔司干柱式.png",
        text: "塔司干柱式"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/goujian/组合柱式.png",
        text: "组合柱式"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/goujian/多利科柱式.png",
        text: "多利科柱式"
      },
    ]
  },
  tapName: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.showModal({
      title: '提示',
      content: '尚在开发中',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})