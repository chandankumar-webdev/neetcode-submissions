class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    
longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let str = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let res = '';

        for (let j = 0; j < str.length; j++) {
            if (j >= strs[i].length || str[j] !== strs[i][j]) break;
            res += str[j];
        }

        str = res;
        if (str === '') return '';
    }

    return str;
}

}
