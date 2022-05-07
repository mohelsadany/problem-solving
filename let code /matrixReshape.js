const matrixReshape = function (mat, r, c) {
  let count = mat.length * mat[0].length;
  if (count !== r * c) return mat;

  let arr = [],
    res = [],
    idx = 0;
  for (let v of mat) {
    arr.push(...v);
  }

  for (let i = 0; i < r; i++) {
    res.push([]);
    for (let j = 0; j < c; j++) {
      res[i][j] = arr[idx];
      idx++;
    }
  }

  return res;
};
