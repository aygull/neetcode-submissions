class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
       return (parseInt(digits.toString().replaceAll(',', '')) + 1).toString().split('');
    }
}