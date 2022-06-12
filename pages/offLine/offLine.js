// pages/offLine/offLine.js
let myaudio = wx.createInnerAudioContext({});
Page({
  toLogin: function() {
    wx.reLaunch({
      url:  "/pages/index/index",
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    isplay: false,
    imgSrc: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/audio/1.png?sign=ccabfc70ad1c57a53102b16df513480c&t=1645017893',
    audioSrc: 'https://6465-dev-sgb12-1256211978.tcb.qcloud.la/audio/1.mp3?sign=b288782aadc425da6f957d79ee144de6&t=1645018110'
  },
  //播放
  play: function () {
    myaudio.play();
    console.log(myaudio.duration);
    this.setData({ isplay: true });
  },
   // 停止
  stop: function () {
    myaudio.pause();
    this.setData({ isplay: false });
  },

  refresh: function () {
    myaudio.stop()
    myaudio.src = null
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    let num = (Math.random() * 9 + 1).toFixed(0)
    // myaudio.pause();
    this.setData({ 
      imgSrc:`https://6465-dev-sgb12-1256211978.tcb.qcloud.la/audio/${num}.png?sign=ccabfc70ad1c57a53102b16df513480c&t=1645017893`,
      audioSrc: `https://6465-dev-sgb12-1256211978.tcb.qcloud.la/audio/${num}.mp3?sign=b288782aadc425da6f957d79ee144de6&t=1645018110`,
      isplay: false
     });
     myaudio.src = this.data.audioSrc
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
    this.refresh()
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
    myaudio.stop();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    myaudio.stop();
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