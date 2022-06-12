// pages/onLine/onLine.js
Page({
  toLogin: function () {
    wx.reLaunch({
      url: "/pages/index/index",
    })
  },
  toDetail: function (event) {
    console.log(event)
    var detailCode = event.currentTarget.dataset.id
    switch (detailCode) {
      case 1:
      case 2:
      case 3:
        wx.reLaunch({
          url: `/pages/lineDetail/lineDetail?detailCode=${detailCode}`,
        })
        break;
      case 4:
        wx.reLaunch({
          url: `/pages/lineDetail2/lineDetail?detailCode=${detailCode}`,
        })
        break;

      default:
        wx.reLaunch({
          url: `/pages/lineDetail2/lineDetail?detailCode=${detailCode}`,
        })
        break;
    }
   
  },
  // toDetail: function(event) {
  //   console.log(event)
  //   let detailCode = 0,
  //       y = Number(event.detail.y) 
  //       console.log(y < 192)
  //   if (y>140 && y < 200) {
  //     detailCode = 1
  //   }
  //   if (y >215 && y < 275) {
  //     detailCode = 2
  //   }
  //   if (y >290 && y < 350) {
  //     detailCode = 3
  //   }
  //   if (y >420 && y < 480) {
  //     detailCode = 4
  //   }
  //   if (y >555 && y < 615) {
  //     detailCode = 5
  //   }
  //   if (y >630 && y < 690) {
  //     detailCode = 6
  //   }
  //   if (y >705 && y < 765) {
  //     detailCode = 7
  //   }
  //   if (y >780 && y < 840) {
  //     detailCode = 8
  //   }
  //   if (y >855 && y < 915) {
  //     detailCode = 9
  //   }
  //   if (y >930 && y < 990) {
  //     detailCode = 10
  //   }
  //   if (y >1060 && y < 1120) {
  //     detailCode = 11
  //   }
  //   if (y >1135 && y < 1195) {
  //     detailCode = 12
  //   }
  //   if (y >1210 && y < 1270) {
  //     detailCode = 13
  //   }
  //   if (y >1285 && y < 1345) {
  //     detailCode = 14
  //   }
  //   if (y >1360 && y < 1420) {
  //     detailCode = 15
  //   }
  //   if (y >1435 && y < 1495) {
  //     detailCode = 16
  //   }

  //   console.log(detailCode)
  //   if (detailCode) {
  //     wx.reLaunch({
  //       url:`/pages/lineDetail/lineDetail?detailCode=${detailCode}`,
  //     })
  //   }

  // },
  /**
   * 页面的初始数据
   */
  data: {
    aList: [{
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/1..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 1
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/2..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 2
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/3..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 3
      }
    ],
    bList: [{
      url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/4..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
      detailCode: 4
    }, ],
    cList: [{
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/5..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 5
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/6..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 6
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/7..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 7
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/8..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 8
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/9..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 9
      },
      {
        url: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/10..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555',
        detailCode: 10
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = []
    for (let index = 11; index < 17; index++) {
      let obj = {
        url: `https://6465-dev-sgb12-1256211978.tcb.qcloud.la/online/${index}..png?sign=5ec922cfa7625fed9ad127d14a48e7d2&t=1644751555`,
        detailCode: index
      }
      arr.push(obj)
    }
    this.setData({
      dList: arr
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})