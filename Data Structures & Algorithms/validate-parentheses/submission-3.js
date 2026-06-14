class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let newStr = s.split('');
        if (s.length <= 1) {
            return false;
        }
        const stack = [];
        const openBrackets = new Set(['(', '{', '[']);
        const closedBrackets = new Set([')', '}', ']']);
        const obj = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        let isValidStr = true;
        let i = 0;
        while (isValidStr && i < newStr.length) {
            let item = newStr[i];
            if (openBrackets.has(item)) {
                stack.push(item);
            }
            else if (closedBrackets.has(item)) {
                if (stack.pop() !== obj[item]) {
                    return false;
                }
            }
            i++;
        }

        return stack.length === 0 ? true: false;
    }
}
