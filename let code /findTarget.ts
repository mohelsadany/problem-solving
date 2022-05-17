var findTarget = function(root, k) {
    const map = {}
  let valid = false
  const aux = (node) => {
    if (node) {
      if (map[k - node.val]) {
        valid = true
        return
      }
      map[node.val] = true
      aux(node.left)
      aux(node.right)
    }
  }
  aux(root)
  return valid
};