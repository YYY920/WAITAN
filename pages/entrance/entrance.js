// pages/entrance/entrance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgAtext: [{
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/1.外滩2号——英伦风情的大班俱乐部.png",
        text: "外滩2号——英伦风情的大班俱乐部"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/2.外滩6号——第一家中国人创办的商业银行.png",
        text: "外滩6号——第一家中国人创办的商业银行"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/3.外滩20号——一个摩登的“老贵族”.png",
        text: "外滩20号——一个摩登的“老贵族”"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/4.外滩建筑的三次变迁.png",
        text: "外滩建筑的三次变迁"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/5.柱.png",
        text: "柱"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/6.窗.png",
        text: "窗"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/7.门.png",
        text: "门"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/8.屋顶.png",
        text: "屋顶"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/9.楼梯.png",
        text: "楼梯"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/10.中西融合建筑元素.png",
        text: "中西融合建筑元素"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/11.外滩脉络.png",
        text: "外滩脉络"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/12.外滩历史建筑改造更新.png",
        text: "外滩历史建筑改造更新"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/13.案例解读——和平饭店.png",
        text: "案例解读——和平饭店"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/14.案例解读——东风饭店.png",
        text: "案例解读——东风饭店"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/15.案例解读——轮船招商局大楼.png",
        text: "案例解读——轮船招商局大楼"
      },
      {
        img: "cloud://thebund-9gtwo84bc6956c3a.7468-thebund-9gtwo84bc6956c3a-1312470352/entrance/16.案例解读——麦加利银行大楼.png",
        text: "案例解读——麦加利银行大楼"
      },
    ]
  },
  cartoon: function () {
    wx.navigateTo({
      url: '../signIn/signIn'
    })
  },
  rebuild: function () {
    wx.navigateTo({
      url: '../buildingR/buildingR'
    })
  },
  story: function () {
    wx.navigateTo({
      url: '../waitanStory/waitanStory'
    })
  },
  styleChange: function () {
    wx.navigateTo({
      url: '../styleChange/styleChange'
    })
  },
  building: function () {
    wx.navigateTo({
      url: '../buildingE/buildingE'
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