//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isAbout:false
  },
  //跳转到修改用户信息页面
  alterUserInfo(){
    wx.navigateTo({
      url: '../more/userInfo',
    })
  },
  //跳转到修改公告页面
  alternotice(){
    wx.navigateTo({
      url: '../more/notice',
    })
  },
  //跳转到修改赞赏页面
  altermoney() {
    wx.navigateTo({
      url: '../more/money',
    })
  },
//跳转到修改关于页面
  alterabout() {
    wx.navigateTo({
      url: '../more/about',
    })
  },
  //跳转到修改反馈页面
  alterback() {
    wx.navigateTo({
      url: '../more/back',
    })
  },
  onLoad: function () {
    var that = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
