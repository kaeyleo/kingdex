// pages/herolist/herolist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: null,
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
    herolist: [{
      "hero_id": 196,
      "hero_name": "百里守约",
      "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg",
      "hero_type": 5,
      "isNew": 1
    }, {
      "hero_id": 193,
      "hero_name": "铠",
      "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg",
      "hero_type": 1,
      "isNew": 1
      }, {
        "hero_id": 189,
        "hero_name": "鬼谷子",
        "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg",
        "hero_type": 6,
        "isNew": 0
      }, {
        "hero_id": 182,
        "hero_name": "干将莫邪",
        "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg",
        "hero_type": 2,
        "isNew": 0
      }, {
        "hero_id": 192,
        "hero_name": "黄忠",
        "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg",
        "hero_type": 5,
        "isNew": 0,
      }, {
        "hero_id": 190,
        "hero_name": "诸葛亮",
        "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg",
        "hero_type": 2,
        "isNew": 0,
      }, {
        "hero_id": 180,
        "hero_name": "哪吒",
        "hero_avatar": "//game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg",
        "hero_type": 1,
        "isNew": 0,
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.role
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var id = this.data.id,
        obj = this.data.role[id];

    this.setData({
      header: obj
    });
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