var app = getApp();
Page({
  data: {
  },
  onLoad: function (a) {

    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://hz.j6yx.com/mapi/sndjx/login.html',
            data: {
              code: res.code
            },
            success(r) {
              if (r.data.is_user) {
                if(r.data.is_path){
                  wx.reLaunch({ url:r.data.path});
                }else{
                  wx.reLaunch({ url: '/tool/font/font'});
                }
        
              } else {
                wx.redirectTo({
                  url: '/tool2/index/index',
                })
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },
});