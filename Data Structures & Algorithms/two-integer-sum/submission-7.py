class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        rest = {}
        for i in range(len(nums)):
            remainder = target - nums[i]
            if remainder in rest:
                return [rest[remainder], i]
            rest[nums[i]] = i
