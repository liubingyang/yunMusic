let app=getApp();
Page({
  data: {
    songDetail:{}
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'songDetailId',
      success: res=> {
        this.getSongdetail(res.data)
      },
    })
  },
  //获取歌曲详情
  getSongdetail(id){
    wx.request({
      url: app.actionConf.songdetail+id,
      success: res => {
        console.log(res.data)
        this.setData({
          songDetail:res.data.songs[0]
        })
      }
    })
  }
})