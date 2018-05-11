let publicPath = 'http://localhost:3000';

module.exports = {
  'personalized': publicPath + '/personalized?limit=6',//推荐歌单
  'newsong': publicPath + '/personalized/newsong',//最新音乐
  'playlistdetail': publicPath + '/playlist/detail?id=',//歌单详情
  "playlist": publicPath + '/comment/playlist?id=',//歌单评论
  "songdetail": publicPath + '/song/detail?ids=',//歌曲详情
}