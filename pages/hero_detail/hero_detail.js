var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero_id: null,
    skill_index: 0,
    nav_index: 0,
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

  onShareAppMessage: function () {
    return {
      title: '【英雄详情】' + this.data.hero.hero_name,
      path: 'pages/hero_detail/hero_detail?' + this.data.hero_id
    }
  },

  toggleNav: function (event) {
    var index = event.currentTarget.dataset.tabindex;
    this.setData({
      nav_index: index
    });
  },

  toggle: function (event) {
    var skill_id = event.currentTarget.dataset.id,
        skill_arr = this.data.hero.skills;

    var obj = skill_arr.filter(function(el) {
      return el.id == skill_id;
    })[0];

    var index = skill_arr.indexOf(obj);

    this.setData({
      skill_index: index
    });
  }
})