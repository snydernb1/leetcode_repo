/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {

    // Define a variable for the hash map
    // Iterate through nums array
    // Subtract the current index value from the target to find missing pair and save to variable
    // Conditional to search hash map
    // If pair is in the hash map, return indices
    // Else add the current index and value to the hash map

    // nums = [2,7,11,15], target = 9

    let hashMap = {} // { 2:0,   }

    for (let i = 0; i <= nums.length - 1; i++) { // i = 1
        // console.log('This is the hashMap', hashMap)
        let difference = target - nums[i] // 9 - 7 = 2
        // console.log('Difference', difference)

        if (hashMap[`${difference}`] >= 0) { //
            return [i, hashMap[`${difference}`]] // [, ]
        } else {
            hashMap[nums[i]] = i // 
        }
    }


};
