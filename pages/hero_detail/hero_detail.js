var storage = require('../../utils/storage.js');

// hero_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero_id: null,
    curr_skill: {
      name: '修罗之魂',
      value: '(冷却值：0  消耗：0)',
      des: '被动：铠拥有精湛的战斗技巧，如果铠的挥砍（普攻与2技能）只命中了一个单位，则这个单位将受到50%额外伤害。',
      tips: '小提示：在铠利用2技能攻击敌方英雄时候尽可能多的利用普攻来造成额外伤害。',
      isPri: 0,
      isSec: 0
    },
    skills: [
      { "id": "19300", "name": "修罗之魂", "img": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/19300.png", "value": "(冷却值：0  消耗：0)", "des": "被动：铠拥有精湛的战斗技巧，如果铠的挥砍（普攻与2技能）只命中了一个单位，则这个单位将受到50%额外伤害。", "tips": "小提示：在铠利用2技能攻击敌方英雄时候尽可能多的利用普攻来造成额外伤害。", "isPri": 0, "isSec": 0 },
      { "id": "19310", "name": "回旋之刃", "img": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/19310.png", "value": "(冷却值：10  消耗：60)", "des": "铠向前投掷刀刃，在敌人中最多弹射4次，对目标造成150/180/210/240/270/300（+60%物理加成）点物理伤害与减速效果；命中的第一个目标将会受到额外减速效果；如果该技能命中至少一个单位，则会增加移动速度，回复105/126/147/168/189/210（+42%物理加成）点生命值与30%的冷却时间", "tips": "小提示：这个技能需要预判对手走位释放，加速效果使得他在追人时能保证他粘住敌人", "isPri": 1, "isSec": 0 },
      { "id": "19320", "name": "极刃风暴", "img": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/19320.png", "value": "(冷却值：6  消耗：50)", "des": "铠向前方连续挥砍，造成80/96/112/128/144/160（+30%物理加成）点物理伤害，第二刀会造成额外的击飞效果，同时使得下一次普通攻击获得额外80（+30%物理加成）点成物理伤害和冲锋效果。被动：脱离战斗后铠的生命、能量恢复每秒回复1%、移动速度提升10/12/14/16/18/20点", "tips": "小提示：这是铠的突进和主要控制技能，命中将敌人轻微击退，被动带来的移速提升能够让他更好的游走支援", "isPri": 0, "isSec": 1 },
      { "id": "19330", "name": "不灭魔躯", "img": "http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/19330.png", "value": "(冷却值：50/45/40  消耗：120)", "des": "在1秒的延迟后铠召唤魔铠，造成范围300/400/500点法术伤害，并强化自身100/150/200点攻击力、50点移动速度、40/60/80点伤害格挡，同时对周围敌人造成60点法术伤害并持续8秒", "tips": "小提示：铠的大招在短暂延迟后才能造成伤害，需要注意走位和大招造成伤害的时机配合。同时，开启大招铠的各项属性在一段时间内都将得到极大的增强", "isPri": 0, "isSec": 0 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hero_id: options.id
    });

    storage.init();
    storage.queryHero(191, function (data) {
      console.log(data);
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
  
  },

  changeText(str) {
    return str + '0000';
  } 
})