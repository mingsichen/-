// app-service
Page({
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  onLoad: function(){
    wx.setNavigationBarTitle({
            title: '音频展示'
        }) 
  },
  audioPlay: function () {
    this.setData({
      action: {
        method: 'play'
      }
    })
  },
  audioPause: function () {
    this.setData({
      action: {
        method: 'pause'
      }
    })
  },
  audioPlaybackRateSpeedUp: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 2
      }
    })
  },
  audioPlaybackRateNormal: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 1
      }
    })
  },
  audioPlaybackRateSlowDown: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 0.5
      }
    })
  },
  audio14: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 14
      }
    })
  },
  audioStart: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 0
      }
    })
  }
})