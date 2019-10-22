
const app = getApp()

Page({
  onLoad: function () {
    wx.request({
      url: 'https://hz.j6yx.com/mapi/sndjx/customize.html',
      data: { path:'/tool/main/main'},
      success(r) {
        if (r.data.is_jump) {
          wx.reLaunch({ url: r.data.path });
        }
      }
    })
  }

})
