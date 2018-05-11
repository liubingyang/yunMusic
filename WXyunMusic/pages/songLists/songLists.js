let app = getApp();
Page({
  data: {
    songListsId:'',
    playlistdetail: {},
    playlist:[],//评论
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'songListsId',
      success: res => {
        this.setData({
          songListsId:res.data
        })
        this.getPlaylistdetail(res.data)
        this.getPlaylist(res.data)
      }
    })
  },
  //获取歌单详情
  getPlaylistdetail(id) {
    wx.request({
      url: app.actionConf.playlistdetail + id,
      success: res => {
        console.log(res.data)
        this.setData({
          playlistdetail: res.data.result
        })
      }
    })
  },
  //获取歌单评论
  getPlaylist(id) {
    wx.request({
      url: app.actionConf.playlist + id,
      success: res => {
        console.log(res.data)
        this.setData({
          playlist: res.data.comments
        })
      }
    })
  }
})