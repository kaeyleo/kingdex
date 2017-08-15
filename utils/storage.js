var AV = require('../libs/av-weapp-min.js'),
    config = require('leancloud.config.js');

module.exports = {

  init: function () {
    AV.init({
      appId: config.appId,
      appKey: config.appKey
    });
    console.log('初始化leancloud...')
  },

  queryFreehero: function (handler) {
    var query = new AV.Query('Free_hero');
    query.find().then(function (res) {
      handler({
        status: 200,
        data: res
      });
    }, function (err) {
      handler({ status: 400 });
      console.error(err)
    })
  },

  queryHeroList: function (role, handler) {
    var query = new AV.Query('Hero');
    query.equalTo('hero_type', role);
    query.find().then(function (res) {
      handler(res);
    }, function (err) {
      console.error(err)
    })
  },

  queryHero: function (hero_id, handler) {
    var query = new AV.Query('Hero');
    query.equalTo('hero_id', hero_id);
    query.find().then(function (res) {
      handler(res[0].attributes);
    }, function (err) {
      console.error(err)
    });
  },

  queryEquipList: function(type, handler) {
    var query = new AV.Query('Equip');
    query.equalTo('item_type', type);
    query.find().then(function (res) {
      handler({ 
        status: 200,
        data: res
      });
    }, function (err) {
      handler({ status: 400 });
      console.error(err)
    })
  },

  queryEquip: function(id, handler) {
    var query = new AV.Query('Equip');
    query.equalTo('item_id', id);
    query.find().then(function (res) {
      handler({
        status: 200,
        data: res
      });
    }, function (err) {
      handler({ status: 400 });
      console.error(err)
    })
  },

  /**
   * {Object} condition: {grade: '1', type: 'green'}
   */
  queryMingList: function (condition, handler) {
    var query = new AV.Query('Ming');
    query.equalTo('ming_grade', condition.grade);
    query.equalTo('ming_type', condition.type);
    query.find().then(function (res) {
      handler({
        status: 200,
        data: res
      });
    }, function (err) {
      handler({ status: 400 });
      console.error(err)
    })
  },

  queryMing: function (id, handler) {
    var query = new AV.Query('Ming');
    query.equalTo('ming_id', id);
    query.find().then(function (res) {
      handler({
        status: 200,
        data: res
      });
    }, function (err) {
      handler({ status: 400 });
      console.error(err)
    })
  },

  queryTerm: function (handler) {
    var query = new AV.Query('Terminology');
    query.ascending('id');
    query.find().then(function (res) {
      handler({
        status: 200,
        data: res
      });
    }, function (err) {
      handler({ status: 400 });
      console.error(err)
    })
  }
}