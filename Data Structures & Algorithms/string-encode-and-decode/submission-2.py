class Solution:

    def encode(self, strs: List[str]) -> str:
        res = []
        for i in strs:
            res.append(str(len(i)) + '#' + i)
        return "".join(res)
    
    def decode(self, s: str) -> List[str]:
        i = 0
        res = []
        while (i < len(s)):
            j = i
            while (s[j] != "#"):
                j+=1
            num = int(s[i:j])
            res.append(s[j + 1: j + num + 1])
            i = j + 1 + num
        return res
