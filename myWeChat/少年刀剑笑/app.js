var ald = require('./utils/ald-stat.js');
var startTime = Date.now();//启动时间
App({
  onLaunch: function () {
  },
  onShow: function () {
    // 比如记录小程序启动时长
    this.aldstat.sendEvent('小程序的启动时长', {
      time: Date.now() - startTime
    })
  },
  globalData: {
    userInfo: null
  }
})