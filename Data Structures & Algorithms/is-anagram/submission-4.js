class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len = s.length;
        if (len !== t.length) {
            return false;
        }
        const tSorted = [...t].sort();
        const sSorted = [...s].sort();
        return tSorted.join() === sSorted.join();
        // let result = true;
        // let index = 0;
        // while (tSorted[index] === sSorted[index] && index < len) {
        //     index++;
        // }
        // if (index !== len) {
        //     return false;
        // }
        // tSorted.forEach((char, index) => {
        //     if (sSorted[index] !== char) {
        //         result = false;
        //         return false;
        //     }
        // })
        // return result;
        // return true;
    }
}
