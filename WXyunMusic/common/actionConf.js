// let publicPath = 'http://localhost:3000';
let publicPath = 'http://106.12.11.41:3000';

module.exports = {
  'personalized': publicPath + '/personalized?limit=6',//推荐歌单
  'newsong': publicPath + '/personalized/newsong',//最新音乐
  'playlistdetail': publicPath + '/playlist/detail?id=',//歌单详情
  "playlist": publicPath + '/comment/playlist?id=',//歌单评论
  "songdetail": publicPath + '/song/detail?ids=',//歌曲详情
  "musicurl": publicPath + '/music/url?id=',//歌曲播放地址
  "hotplaylist": publicPath + '/playlist/detail?id=3778678',//歌曲播放地址

  "hotsearch": publicPath + '/search/hot',//热门搜索标签
  "searchresult": publicPath + '/search?limit=15&keywords=',//搜索列表
  "searchsuggest": publicPath + '/search/suggest?keywords=',//搜索建议
}