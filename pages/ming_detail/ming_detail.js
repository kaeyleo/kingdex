var storage = require('../../utils/storage.js'),
    parser = require('../../utils/parser.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ming: null,
    ming_id: null,
    grade_cn: {
      '1': '一',
      '2': '二', 
      '3': '三', 
      '4': '四',
      '5': '五'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      ming_id: id
    });
    this.fetchData();
  },

  onShareAppMessage: function () {
    return {
      title: '【铭文详情】' + this.data.ming.ming_name,
      path: 'pages/ming_detail/ming_detail?id=' + this.data.ming_id
    }
  },

  fetchData: function () {
    var self = this;
    var id = this.data.ming_id;
    storage.queryMing(id, function (data) {
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
      var item = data.data[0].attributes;
      item.ming_des = parser.mingDes(item.ming_des);

      self.setData({
        ming: item
      })
    });
  },

  imgErr: function () {
    this.data.ming.img = '//oupoyh9vv.bkt.clouddn.com/rune.png';
    this.setData({
      ming: this.data.ming
    })
  }
})