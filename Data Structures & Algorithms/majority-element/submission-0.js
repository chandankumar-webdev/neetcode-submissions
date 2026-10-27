class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const occr = { }
        for (let val of nums) {
            if(val in occr) occr[val] = occr[val] + 1
            else occr[val] = 0
        }

        let highOccKey = 0, highOccValue = 0
        for (let [key, val] of Object.entries(occr)) {
           if (val > highOccValue) {
             highOccValue = val
             highOccKey = key
           }
        }

        return highOccKey
    }
}
