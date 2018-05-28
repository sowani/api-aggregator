exports.getIsoDate = function() {
  var d = new Date();
  var isoDate = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
  return isoDate;
}
