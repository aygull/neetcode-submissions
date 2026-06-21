class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(len(nums)):
            product = 1
            for j in nums[:i]:
                product = product * j
            for j in nums[i+1:]:
                product = product * j
            res.append(product)
        return res
