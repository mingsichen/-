//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShow: true,

    ajxtrue: false,

    tabBar: [{
      image: "/tool2/static/img/yuyuo.png",
      image1: "/tool2/static/img/yuyuo1.png",
      id: 0
    },

    {
      image: "/tool2/static/img/ziliao.png",
      image1: "/tool2/static/img/ziliao1.png",
      id: 1
    }
    ]

  },
  close_tap: function() {

    this.setData({

      isShow: true

    })

  },
  open_tap: function() {

    this.setData({

      isShow: false

    })

  },

  dataInfo: function (e) {
    
  },

  // 手机号验证
  blurPhone: function (e) {
    var phone = e.detail.value;
    let that = this
    if (!(/^1[34578]\d{9}$/.test(phone))) {

      this.setData({
        ajxtrue: false
      })
      if (phone.length >= 11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      console.log('验证成功', that.data.ajxtrue)
    }

  },
  // 表单提交
  formSubmit(e) {
    let that = this
    let val = e.detail.value
    let ajxtrue = this.data.ajxtrue
    if (ajxtrue == true) {
      //表单提交进行
    } else {
      wx.showToast({
        title: '手机号有误',
        icon: 'success',
        duration: 2000
      })
    }
  },
  submit:function(){
        wx.showToast({
          title: '预约成功',
          icon: 'success',
          duration: 2000
        })
     
  
  },
 
  methods: {
   
  },

  onLoad: function() {
   




    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})