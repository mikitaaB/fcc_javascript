function dropElements(arr, func) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      break;
    }
  }
  return res = arr.splice(i);
}

dropElements([1, 2, 3], function(n) {return n < 3; });