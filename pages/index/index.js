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
    var self = this;

    storage.init();
    storage.queryFreehero(function(data) {
      self.setData({
        freehero: data
      })
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})