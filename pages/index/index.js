var storage = require('../../utils/storage.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: [
      {
        'name': '坦克',
        'id': 3,
        'bg': '../../img/role/tank.png'
      },
      {
        'name': '战士',
        'id': 1,
        'bg': '../../img/role/warrior.png'
      },
      {
        'name': '刺客',
        'id': 4,
        'bg': '../../img/role/assassin.png'
      },
      {
        'name': '法师',
        'id': 2,
        'bg': '../../img/role/mage.png'
      },
      {
        'name': '射手',
        'id': 5,
        'bg': '../../img/role/archer.png'
      },
      {
        'name': '辅助',
        'id': 6,
        'bg': '../../img/role/support.png'
      }
    ],
    freehero: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.fetchData();
  },

  fetchData: function () {
    var self = this;

    storage.init();
    storage.queryFreehero(function (data) {
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
      
      var freeheroData = data.data[0].attributes.freehero;
      self.setData({
        freehero: freeheroData
      })
    });
  }
})