// term_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    spell: '',
    des: '',
    bg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.randomColor();
    this.setData({
      name: options.name,
      spell: options.spell,
      des: options.des
    })
  },

  randomColor: function() {
    var color = ['#96ADC8', '#FFCD46', '#5D4CC7', '#7DCE94', '#F59ABE', '#FF5959', '#4A3E53'];
    var num = Math.floor(Math.random() * color.length);
    this.setData({
      bg: color[num]
    })
  }
})