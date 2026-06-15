class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        rest = {}
        for i, num in enumerate(nums):
            remainder = target - num
            if remainder in rest:
                return [rest[remainder], i]
            rest[num] = i
