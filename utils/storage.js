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
      handler(res[0].attributes.freehero);
    }, function (err) {
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
  }



}