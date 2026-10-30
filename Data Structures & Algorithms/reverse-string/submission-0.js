class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const first = s[0]
        for(let i=0; i<s.length; i++){

            if (i != s.length - 1) s[i] = s[(s.length - 1) - i]
            else s[s.length - 1] = first
        }
    }
}
