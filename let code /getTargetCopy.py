class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        if(original is None):
            return None
        l=self.getTargetCopy(original.left,cloned.left,target)
        r=self.getTargetCopy(original.right,cloned.right,target)
        if(original.val==target.val):
            return cloned
        return l or r