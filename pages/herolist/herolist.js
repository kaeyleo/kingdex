var storage = require('../../utils/storage.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    header: null,
    role: {
      1: {
        'name': '战士',
        'desc': '输出和生存能力都比较突出的近攻英雄。团战中站于坦克身后，有时也会充当先锋，承受大量伤害。',
        'cover': '../../img/role/cwarrior.png'
      },
      2: {
        'name': '法师',
        'desc': '生存能力较弱，但输出强力且兼具控制技能的英雄。团战中占据后排位置，对敌方英雄进行输出控制。',
        'cover': '../../img/role/cmage.png'
      },
      3: {
        'name': '坦克',
        'desc': '生存能力较强、输出能力一般的英雄。团战中占据前排位置，抵挡掉较多的敌方输出伤害。',
        'cover': '../../img/role/ctank.png'
      },
      4: {
        'name': '刺客',
        'desc': '生存能力较弱，但输出能力爆炸的英雄。团战中可绕后一套技能秒杀敌方后排的脆皮输出。',
        'cover': '../../img/role/cassassin.png'
      },
      5: {
        'name': '射手',
        'desc': '远程输出能力极高且带有控制技能的英雄。团战中利用自身“手长”的优势站于后排进行输出控制。',
        'cover': '../../img/role/carcher.png'
      },
      6: {
        'name': '辅助',
        'desc': '生存能力和输出能力略平庸的英雄，单靠强力的技能效果来为队友增加状态及控制敌方英雄。',
        'cover': '../../img/role/csupport.png'
      }
    },
    herolist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var id = parseInt(options.role),
        header_data = this.data.role[id];

    this.setData({
      header: header_data
    });

    storage.queryHeroList(id, function(data) {
      var arr = [];
      for(var i in data) {
        var hero = data[i].attributes;
        var hero_obj = {
          'hero_id': hero.hero_id,
          'hero_name': hero.hero_name,
          'hero_avatar': 'http://' + hero.hero_avatar,
          'isNew': hero.isNew
        }
        arr.push(hero_obj);
      }
      self.setData({
        herolist: arr
      })
    })
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
  
  },

  say: function(e) {
    console.log(e);
  }
})