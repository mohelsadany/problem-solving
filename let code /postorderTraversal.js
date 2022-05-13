var postorderTraversal = function (root) {
  let res = []; // use res as another stack
  // empty tree case:
  if (root === null) return res;
  let stack = [];

  // postorder visit: left, right, root
  stack.push(root);
  while (stack.length !== 0) {
    let cur = stack.pop();
    // treat it as stack, store them in reverse order:
    // i.e root, left, right
    res.push(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }

  // we can pop all elements one by one, or just reverse them
  return res.reverse();
};
