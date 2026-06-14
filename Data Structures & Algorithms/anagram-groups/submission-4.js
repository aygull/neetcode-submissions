class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(keys, str) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].length !== str.length) {
                continue;
            }
            let sortedKey = [...keys[i]];
            if (sortedKey.sort().join() === [...str].sort().join()) {
                return keys[i];
            }
        }
        return false;
    }
    groupAnagrams(strs) {
        if (strs.join.length === 0) {
            return [strs];
        }
        const res = {};

        for (let i = 0; i < strs.length; i++) {
            if (!res[strs[i]]) {
                res[strs[i]] = [];
            }
            const anagramRes = this.isAnagram(Object.keys(res), strs[i]);
            if (anagramRes !== false) {
                res[anagramRes].push(strs[i]);
            }
        }
        return Object.values(res).filter(item => item.length > 0);
    }
}
