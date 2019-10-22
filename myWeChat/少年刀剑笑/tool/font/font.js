var app = getApp();
Page({
  data: {
    classData:[]
  },
  onLoad: function (options) {
    var that = this;
    var cid = options.cid;
    console.log(cid);

    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://hz.j6yx.com/mapi/sndjx/login.html',
            data: {
              code: res.code,
              cid: cid,
              mode:1
            },
            success(r) {
              console.log(r.data.url);
              that.setData({ classData: r.data });
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },
});