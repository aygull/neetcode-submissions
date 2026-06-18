class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = defaultdict(list)
        for string in strs:
            arr = [0] * 26
            for char in string:
                arr[ord(char) - ord('a')] += 1
            hashmap[tuple(arr)].append(string)
        return list(hashmap.values())

        