var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: 1,
    equip: [],
    type: {
      1: '攻击',
      2: '法术',
      3: '防御',
      4: '移动',
      5: '打野',
      7: '辅助'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.fetchData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  fetchData: function() {
    var self = this;

    wx.showLoading({
      title: '加载中'
    });

    storage.queryEquipList(self.data.currentType, function (data) {
      wx.hideLoading();
      
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
      console.log(data);
      var arr = [];
      for (var i in data.data) {
        var item = data.data[i].attributes;
        arr.push(item);
      }
      self.setData({
        equip: arr
      })
    });
  },

  toggle: function(event) {
    var type = parseInt(event.currentTarget.dataset.type);
    this.setData({
      currentType: type
    });
    this.fetchData();
  }
})