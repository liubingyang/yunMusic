// pages/search/search.js
let app = getApp();
Page({
  data: {
    searchValue: '',
    showStep: 1,//1热搜及记录，2搜索列表，3搜索结果
    hotSearchTag: [],//热搜图标
    searchHistoryList: [],//搜索记录
    searchSuggestList:[],//搜索建议
    searchResult:[],//搜索结果
  },
  onLoad: function (options) {
    this.hotSearch()
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
  saveHistoryList(val){
    this.data.searchHistoryList.unshift(val)
    this.setData({ searchHistoryList: this.data.searchHistoryList })
  },
  //删除历史记录
  shiftHistory(event){
    this.data.searchHistoryList.splice(event.currentTarget.dataset.shift,1)
    this.setData({ searchHistoryList: this.data.searchHistoryList })
  },
  //搜索结果
  searchResult(event) {
    console.log(event)
    if (event.currentTarget){
      let suggest = event.currentTarget.dataset.suggest;
        this.setData({ searchValue: suggest })
        this.saveHistoryList(suggest)
    }
    this.setData({showStep:3})
    
    wx.request({
      url: app.actionConf.searchresult + this.data.searchValue,
      success: res => {
        console.log(res.data)
        this.setData({ searchResult:res.data.result.songs})
      }
    })
  },
  //搜索建议
  searchSuggest(){
    wx.request({
      url: app.actionConf.searchsuggest + this.data.searchValue,
      success:res=>{
        this.setData({ searchSuggestList:res.data.result.songs})
      }
    })
  },
  //聚焦
  searchInputFoucs() {
    if (this.data.searchValue) {
      this.setData({showStep: 2})
    }
  },
  //失焦
  searchInputBlur() {
    if (this.data.showStep==3){return}
    this.setData({showStep: 1})
  },
  //清空输入框
  clearSearchVlue() {
    this.setData({
      searchValue: '',
      showStep:1,
      searchResult:[]
      })
  },
  //输入获取建议列表
  searchInput(event) {
    this.setData({searchValue: event.detail.value})
    if (this.data.searchValue) {
      this.setData({ showStep: 2 })
    } else {
      this.setData({ showStep: 1 })
    }
    if (event.detail.value.replace(/\s/g, '')){
      this.searchSuggest();
    }
  },
  //回车搜索
  toSearch: function (event) {
    if (!event.detail.value.replace(/\s/g, '')) { return };
    // 保存记录
    this.saveHistoryList(event.detail.value);
    // 搜索结果
    this.searchResult(event.detail.value);
  },
  //获取热搜标签
  hotSearch: function () {
    wx.request({
      url: app.actionConf.hotsearch,
      success: res => {
        this.setData({hotSearchTag: res.data.result.hots})
      }
    })
  }
})