class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = n * [1]
        left_product = 1
        right_product = 1
        for i in range(n):
            res[i] = left_product * right_product
            left_product *= nums[i]
        for i in range(n - 1, -1, -1):
            res[i] *= right_product
            right_product *= nums[i]
        return res
