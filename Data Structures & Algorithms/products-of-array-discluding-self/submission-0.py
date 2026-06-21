class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = len(nums) * [1]
        for i in range(len(nums)):
            product = 1
            for j in nums[:i]:
                product = product * j
            for j in nums[i+1:]:
                product = product * j
            res[i] = product
        return res
