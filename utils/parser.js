module.exports = {

  mingDes: function (str) {

  },

  equipDes: function (str) {
    var arr = [];
    str = str.replace(/\<p\>|\<\/p\>/g, '').split('<br>');
    for (var i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }
}