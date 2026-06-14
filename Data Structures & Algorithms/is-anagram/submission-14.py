class Solution:
    # Sorting (O(logn*n + mlogm))
    # def isAnagram(self, s: str, t: str) -> bool:
    #     if (len(s) != len(t)):
    #         return False
    #     return sorted(s) == sorted(t)

    # HashMap
    #  def isAnagram(self, s: str, t: str) -> bool:
    #     if (len(s) != len(t)):
    #         return False
    #     hashmapS, hashmapT = {}, {}

    #     for i in range(len(s)):
    #         hashmapS[s[i]] = 1 + hashmapS.get(s[i], 0)
    #         hashmapT[t[i]] = 1 + hashmapT.get(t[i], 0)
    #     return hashmapS == hashmapT

    #HashTable
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False
        chars = [0] * 26

        for c in s:
            chars[ord(c) - ord('a')] +=1
        for c in t:
            chars[ord(c) - ord('a')] -=1
        return not any(chars)

