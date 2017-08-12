var storage = require('../../utils/storage.js');

// pages/index/index.js
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
    role: {
      1: {
        'name': '战士',
        'desc': '攻守兼备，输出和生存能力都比较突出的近攻英雄。团战中站于坦克身后，有时也会充当先锋，承受大量伤害。'
      },
      2: {
        'name': '法师',
        'desc': ''
      },
      3: {
        'name': '坦克',
        'desc': ''
      },
      4: {
        'name': '刺客',
        'desc': ''
      },
      5: {
        'name': '射手',
        'desc': ''
      },
      6: {
        'name': '辅助',
        'desc': ''
      }
    },
    free: [
      {
        'id': 121,
        'name': '芈月', 
        'role': 2
      },
      {
        'id': 112,
        'name': '鲁班七号',
        'role': 5
      },
      {
        'id': 134,
        'name': '达摩',
        'role': 1
      },
      {
        'id': 114,
        'name': '刘禅',
        'role': 3
      },
      {
        'id': 191,
        'name': '大乔',
        'role': 6
      },
      {
        'id': 173,
        'name': '李元芳',
        'role': 5
      },
      {
        'id': 113,
        'name': '庄周',
        'role': 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    storage.init();
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