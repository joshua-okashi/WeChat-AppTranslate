//app.js
App({
  onLaunch: function () {
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '英文',
        'lang': 'en',
        'index': 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        'index': 1
      },
      {
        'chs': '法语',
        'lang': 'fra',
        'index': 2
      },
      {
        'chs': '日文',
        'lang': 'jp',
        'index': 3
      },
      {
        'chs': '德语',
        'lang': 'de',
        'index': 4
      }
    ]
  }
})