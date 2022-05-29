# maxDepth.py   
def maxDepth(root):
    if root is None:
        return 0
    return max(maxDepth(root.left), maxDepth(root.right)) + 1

    #class TreeNode:
    #    def __init__(self, x):
    #        self.val = x
    #        self.left = None
    #        self.right = None
    class   TreeNode:
        def __init__(self, x):
            self.val = x
            self.left = None
            self.right = None   
    root = TreeNode(3)
    root.left = TreeNode(9)
    root.right = TreeNode(20)
    root.right.left = TreeNode(15)
    root.right.right = TreeNode(7)
    print(maxDepth(root))
    # Output: 3
    # Explanation: The deepest node is level 3 (level 2 is the leaf level).
    #

    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, x):

    #     def __init__(self, x):
    #         self.val = x
    
