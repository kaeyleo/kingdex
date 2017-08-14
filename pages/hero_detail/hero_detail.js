var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero_id: null,
    curIndex: 0,
    hero: {},
    type: {
      "1": "战士",
      "2": "法师",
      "3": "坦克",
      "4": "刺客",
      "5": "射手",
      "6": "辅助"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this,
        heroid = parseInt(options.id);

    storage.queryHero(heroid, function(data) {
      var desData = [];

      for (var i in data['ming']) {
        var des = data['ming'][i].des;
        var obj = {};
        des = des.replace(/\<p\>/g, '').split('</p>');

        for (var j = 0; j < des.length - 1; j++) {
          obj[j] = des[j];
        }

        desData.push(obj);
        data['ming'][i].des = desData[i];
      }

      self.setData({
        hero: data
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var hero_id = this.data.hero_id;
    // storage.queryHero(hero_id, function (data) {
    //   console.log(data);
    // });

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

  toggle: function (event) {
    var skill_id = event.currentTarget.dataset.id,
        skill_arr = this.data.hero.skills;

    var obj = skill_arr.filter(function(el) {
      return el.id == skill_id;
    })[0];

    var index = skill_arr.indexOf(obj);

    this.setData({
      curIndex: index
    });
  },

  mingDesParser: function(str) {
    return str + 'SB';
  }
})