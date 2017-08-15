module.exports = {

  mingDes: function (str) {
    var arr = [];
    arr = str.replace(/\<p\>/g, '').split('</p>');
    arr.pop();
    return arr;
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