import Watch from '../../common/core/watch.js';
let app=getApp();
let watch;
Page({
  data: {
    songDetail:{},
    musicUrl:'',

    playing:false,//播放，暂停
  },
  watch:{
    playing:function(l,o){
      if(l){
        this.audioCtx.play()
      }else{
        this.audioCtx.pause()
      }
    }
  },
  onLoad: function (options) {
    watch=new Watch(this);
    // 
    this.audioCtx = wx.createAudioContext('myAudio')
    
    wx.getStorage({
      key: 'songDetailId',
      success: res=> {
        this.getSongdetail(res.data)
      },
    })
  },
  playControl(){
    watch.setData({
      playing: !this.data.playing
    })
    console.log(this.data.playing)
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
        //获取歌曲url
        this.getMusicUrl(res.data.songs[0].id)
      }
    })
  },
  // 获取歌曲url
  getMusicUrl(id){
    wx.request({
      url: app.actionConf.musicurl + id,
      success: res => {
        console.log(res.data)
        watch.setData({
          musicUrl: res.data.data[0].url,
          playing: true
        });   
      }
    })
  }
})