//app.js
let pageAddress = require('common/pageAddress.js')
let actionConf = require('common/actionConf.js')
App({
  actionConf: actionConf,
  gotoPath(toUrl){
    wx.navigateTo({
      url: pageAddress[toUrl]
    })
  }
})