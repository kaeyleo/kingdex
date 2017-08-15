var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'yellow',
    grade: '1',
    ming: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  fetchData: function () {
    var self = this;
    var condition = {
      'grade': self.data.grade,
      'type': self.data.type
    };

    storage.queryMingList(condition, function (data) {
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
        console.log(item);
      }
      self.setData({
        ming: arr
      })
    });
  },

  setType: function(event) {
    var type = event.currentTarget.dataset.type;
    this.setData({
      type: type
    })
  },

  setGrade: function(event) {
    var grade = event.detail.value.toString();
    this.setData({
      grade: grade
    })
  }
})