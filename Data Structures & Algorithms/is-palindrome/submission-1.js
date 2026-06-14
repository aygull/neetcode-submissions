class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let middle = Math.floor(s.length / 2);
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

        let i = 0;
        let res = true;
        while (i <= middle && res) {
            if (s[i] !== s[s.length-i -1]) {
                console.log(s[i], s[s.length-i - 1]);
                res = false;
            }
            i++;
        }

        return res;
    }
}
