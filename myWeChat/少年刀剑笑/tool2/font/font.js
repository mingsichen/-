var app = getApp();

Page({
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://hz.j6yx.com/mapi/sndjx/customize.html',
      data: { path: '/tool2/index/index' },
      success(res) {
        if (res.data.is_jump) {
          wx.reLaunch({ url: res.data.path });
        }
      }
    })
  }

})