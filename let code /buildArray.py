class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(0, len(nums)):
            res.append(nums[nums[i]])
        return res