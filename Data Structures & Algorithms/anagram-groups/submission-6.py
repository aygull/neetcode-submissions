class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = {}
        for string in strs:
            arr = [0] * 26
            for i in range(len(string)):
                arr[ord(string[i]) - ord('a')] += 1
            if tuple(arr) in hashmap:
                hashmap[tuple(arr)].append(string)
            else:
                hashmap[tuple(arr)] = []
                hashmap[tuple(arr)].append(string)
        return list(hashmap.values())

        