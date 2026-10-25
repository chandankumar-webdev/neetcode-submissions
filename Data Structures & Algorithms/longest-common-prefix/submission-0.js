class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let str = strs[0]
        let res = ''
        for (let i=1; i<strs.length; i++) {
            for (let j=0; j<strs[i].length; j++) {
                if (j==0 && str[j] != strs[i][j]) return ''
                if ( str[j] == strs[i][j] ) res = res + str[j]
            }
            str = res
            res = ''
        }
        return str
    }
}
