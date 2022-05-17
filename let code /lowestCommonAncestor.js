var lowestCommonAncestor = function(root, p, q) {
    var count = 0;

    while(true){
        var value =  root.val;

        if(p.val >= value && value >= q.val || p.val <= value && value <= q.val){
            return root;
        } else if(p.val > value && q.val > value){
            root =  root.right;
        } else {
            root =  root.left;
        }
    }
};