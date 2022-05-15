/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if(root == null) return false;
        return has(root, 0, sum);
    }

    boolean has(TreeNode root, int cur, int target){
        if(root.left == null && root.right == null){
            return target == cur+root.val;
        }
        cur += root.val;

        boolean res = false;
        if(root.left != null){
            res = has(root.left, cur, target);
        }
        if(res ) return true;

        if(root.right != null){
            res = has(root.right, cur,target);
        }

        return res;

    }
}