var app = getApp();
Page({
  data: {
    classData:[],
    oid:''
  },
  onLoad: function (options) {
    var that = this;
    //that.data.oid = options.oid;
    var oid = options.oid;
    var amount = options.amount;
    var user_id = options.user_id;

    that.setData({ classData: {
      oid: oid,
      amount: amount,
      user_id: user_id
    } });



    var that = this;
    wx.request({
      url: 'https://hz.j6yx.com/mapi/sndjx/config.html', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.wxapp_card);
        that.setData({ wxapp_card: res.data.wxapp_card });
      }
    })
  }
});