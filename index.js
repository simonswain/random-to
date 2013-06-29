module.exports.from0to = function (max) {
  return Math.floor( Math.random() * (max + 1));
}

module.exports.from1to = function (max) {
  return 1 + Math.floor( Math.random() * max );
}
