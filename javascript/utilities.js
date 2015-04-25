// so things dont get dupped all over the place

module.exports.dsalgo = {utils: {}}
var utils = module.exports.dsalgo.utils;

// techincally the return here is unnecessary since we never make a deepCopy of the array 
// so its muting the original. But I just like this interface better
utils.swap = function (list, firstIndex, secondIndex) {
  var temp = list[firstIndex];
  list[firstIndex] = list[secondIndex];
  list[secondIndex] = temp;
  return list;
}

utils.isTruthy = function (thing) {
  // https://github.com/jasmine/jasmine/blob/master/src/core/matchers/toBeTruthy.js
  // http://nfriedly.com/techblog/2009/07/advanced-javascript-operators-and-truthy-falsy/
  return !!thing;
}

utils.isFalsy = function (thing) {
  // https://github.com/jasmine/jasmine/blob/master/src/core/matchers/toBeFalsy.js
  return !utils.isTruthy(thing);
}

utils.makeRandomArray = function (config) {
  var conf = config || {};
  var precision = (utils.isFalsy(config.precision)) ? 2 : conf.precision;
  var multiplier = 100;
  var size = 100;
  var result = [];

  for (var i = size; i > 0; i -= 1) {
    result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
  }
  return result;
}

