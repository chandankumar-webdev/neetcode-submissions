class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=''
        for(let i = 0; i<s.length; i++) {
          const charCode = s.charCodeAt(i)
          if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            str += s[i]
          }
        }
        console.log('str', str)
        for(let i = 0; i<str.length/2; i++) { 
           if(str[i].toLowerCase() != str[(str.length - 1) - i].toLowerCase()) return false
        }
        return true
    }
}
