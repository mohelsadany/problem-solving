var searchMatrix = function (matrix, target) {
  var row = searchRow(matrix, target, 0, matrix.length - 1);
  return row === -1
    ? false
    : searchArray(matrix[row], target, 0, matrix[row].length - 1);
};

var searchRow = function (matrix, target, top, bottom) {
  if (top > bottom) return -1;
  var mid = top + Math.floor((bottom - top) / 2);
  var len = matrix[mid].length;
  if (len === 0) return -1;
  if (matrix[mid][0] <= target && target <= matrix[mid][len - 1]) {
    return mid;
  } else if (target < matrix[mid][0]) {
    return searchRow(matrix, target, top, mid - 1);
  } else {
    return searchRow(matrix, target, mid + 1, bottom);
  }
};

var searchArray = function (arr, target, left, right) {
  if (left > right) return false;
  var mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] > target) {
    return searchArray(arr, target, left, mid - 1);
  } else {
    return searchArray(arr, target, mid + 1, right);
  }
};
