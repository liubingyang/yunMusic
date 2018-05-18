// pages/hotSong/hotSong.js

let app=getApp();
Page({
  data: {
    hotPlayList:[]
  },
  
  onLoad: function (options) {
    this.getHotPalyList()
  },

  gotoPath: function (event) {
    console.log(event)
    let dataset = event.currentTarget.dataset;
    app.gotoPath(dataset.urlTo);

    switch (dataset.urlTo) {
      case "歌曲详情":
        wx.setStorage({
          key: 'songDetailId',
          data: dataset.id
        });
        break;
    }
  },
  //获取热歌单
  getHotPalyList: function() {
    wx.request({
      url: app.actionConf.hotplaylist,
      success: res => {
        res.data.result.updateTimeName = new Date(res.data.result.updateTime).toLocaleDateString()
        this.setData({
          hotPlayList: res.data.result
        })
      }
    })
  },
})