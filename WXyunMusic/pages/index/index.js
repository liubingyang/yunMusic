let app=getApp();
Page({
  data: {
    personalizedList:[],//推荐歌单
    newSongList:[],//最新音乐
  },
  gotoPath:function(event){
    console.log(event)
    let dataset = event.currentTarget.dataset;
    app.gotoPath(dataset.urlTo);

    switch (dataset.urlTo){
      case "歌单页":
        wx.setStorage({
          key: 'songListsId',
          data: dataset.id
        });
        break;
      case "歌曲详情":
        wx.setStorage({
          key: 'songDetailId',
          data: dataset.id
        });
        break;
    }
  },
  onLoad: function (options) {
    this.getPersonalized();
    this.getNewSong();
  },
  //获取推荐歌单
  getPersonalized(){
    wx.request({
      url: app.actionConf.personalized,
      success: res=> {
        this.setData({
          personalizedList: res.data.result
        })
      }
    })
  },
  //获取最新音乐
  getNewSong() {
    wx.request({
      url: app.actionConf.newsong, 
      success: res => {
        this.setData({
          newSongList: res.data.result
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})