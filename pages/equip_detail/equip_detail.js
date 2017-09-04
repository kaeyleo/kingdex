var storage = require('../../utils/storage.js'),
    parser = require('../../utils/parser.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    equip_id: null,
    equip: null,
    currentType: 1,
    type: {
      1: { name: '攻击', color: '#F37474' },
      2: { name: '法术', color: '#71D0B0' },
      3: { name: '防御', color: '#B183FF' },
      4: { name: '移动', color: '#FFD459' },
      5: { name: '打野', color: '#60A4FF' },
      7: { name: '辅助', color: '#FF89C3' }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = parseInt(options.id);
    var bgColor = this.setBgColor(id);

    this.setData({
      equip_id: id,
      bg: bgColor
    });
    this.fetchData();
  },

  onShareAppMessage: function () {
    return {
      title: '【装备详情】' + this.data.equip.item_name,
      path: 'pages/equip_detail/equip_detail?id=' + this.data.equip_id
    }
  },

  fetchData: function() {
    var self = this;
    var eid = self.data.equip_id;
    storage.queryEquip(eid, function (data) {
      // 请求失败
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
      // 请求成功
      var item = data.data[0].attributes;
      item.des1 = parser.equipDes(item.des1);

      if (typeof(item.des2) !== 'undefined') {
        item.des2 = parser.equipDes(item.des2)
      }
      
      self.setData({
        equip: item,
        currentType: item.item_type
      })
    });
  },

  setBgColor(id) {
    var color;
    switch (id) {
      case 1124:
      case 1126:
      case 1129: 
      case 1132: 
      case 1133:
      case 1136:
      case 1222:
      case 1240:
      case 1311:
      case 1328: 
      case 1331: 
      case 1334: 
      case 1523: 
      case 1533: 
      case 1721:
      case 1711:
        color = '#E64848';
        break;
      case 1117:
      case 1137:
      case 1214:
      case 1221:
      case 1225:
      case 1232:
      case 1233:
      case 1237:
      case 1238:
        color = '#8B5CAF';
        break;
      case 1114:
      case 1123:
      case 1134:
      case 1211:
      case 1135:
      case 12211:
      case 1239: 
      case 1426:
      case 1724:
      case 1723:
      case 1714:
      case 1713:
        color: '#FFCD46';
        break;
      case 1121:
      case 1127:
      case 1128:
      case 1138:
      case 1212:
      case 1229:
      case 1223:
      case 1227:
      case 13310:
      case 1337:
      case 1423:
      case 1424:
      case 1521:
      case 1531:
        color = '#148FFF';
        break;
      case 1122:
      case 1224:
      case 1314:
      case 1421:
      case 1722:
      case 1712:
      case 1701: 
        color = '#45D277';
        break;
      case 1216:
      case 1234:
      case 1235:
      case 1336:
        color = '#66D8EF';
        break;
      case 1131:
      case 1231:
      case 1335:
        color = '#5D4CC7';
        break;
      case 91040:
      case 11210:
      case 1125:
      case 1236:
      case 1322:
      case 1333:
        color = '#FFA246';
        break;
      case 1327:
      case 1332:
      case 1338:
      case 1522:
      case 1532:
        color = '#C45FB7';
        break;
      default:
        color = '#424052';
    }
    return color;
  }
})