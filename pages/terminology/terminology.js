var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    term: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData()
  },

  onShareAppMessage: function () {
    return {
      title: 'MOBA游戏术语宝典',
      path: 'pages/terminology/terminology'
    }
  },

  fetchData: function () {
    var self = this;

    storage.queryTerm(function (data) {
      // 请求失败
      if (data.status === 400) {
        wx.showModal({
          title: '网络错误',
          content: '数据获取失败，请重新尝试',
          success: function (res) {
            if (res.confirm) {
              self.fetchData();
            }
          }
        });
        return;
      }

      // 请求成功
      var arr = [];
      for (var i in data.data) {
        var item = data.data[i].attributes;
        arr.push(item);
      }
      self.setData({
        term: arr
      })
    });
  },

  getDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var data = this.data.term.filter(function(el) {
      return el.id === id
    })[0];
  }
})