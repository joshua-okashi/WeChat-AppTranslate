// pages/change/change.j
const app = getApp()

Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },

  onShow: function(){
    this.setData({curLang: app.globalData.curLang})
  },
  onTapItem: function(e){
    let langObj = e.currentTarget.dataset
    // console.log(e.currentTarget.dataset)
    wx.setStorageSync('language',langObj)
    this.setData({'curLang': langObj})
    app.globalData.curLang = langObj
    console.log(app.globalData.curLang)
    wx.switchTab({ url:'/pages/index/index'})
  }
  
})