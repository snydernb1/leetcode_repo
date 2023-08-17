/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    // Constrain Questions:
    // 1. if there are multiple elements with the same frequency, what do i return?
    // 2. looks like output is arr but what should the output type be?
    // 3. is the array (nums) ordered?
    
    
    // General thoughts and approaches:
    // 1. possibly use hash map to count instances of unique elements and then find the key value pairs and iterate through saving the k num of elements in res arr (brute force) 
    // 2. use arr to track counts where the element is the index and the count is the value
    
    
    // Pseudo code:
    
    // Create a new hash map to hold the element as the key and frequency as the value
    // define an array to hold the answer we will return
    // Iterate through nums array 
    // Conditional to check if nums[i] in new hash map:
    // a. if not, add to hash map
    // b. else, increment count
    
    // get hash map entries
    // iterate through new entries array
    // conditional to check if the if answer array length is strictly equal to k
    // if the answer array is less than k, we can just add the next index
    // else, we need to iterate through the answer array
    // conditional to check if the index frequency is lower than current
    // if yes, replace
    // else skip
    
    // finally, return answer array
    
    
//     let frequencyHashMap = {} // [-,3,2,1]
//     let answerArr = [] // [1, 2]
    
//     for (let i = 0; i < nums.length; i++) {
//         if (!frequencyHashMap[nums[i]]) {
//             frequencyHashMap[nums[i]] = 1
//         } else {
//             frequencyHashMap[nums[i]] += 1
//         }
//     }
    
    
//     // console.log('this is the hash map', frequencyHashMap)
//     let hashMapEntries = Object.entries(frequencyHashMap)
//     console.log('this is the hash map arr of entries', hashMapEntries)
    
    
//     for (let j = 0; j < hashMapEntries.length; j++) { // [-,3,2,(1)]
//             console.log('this is the answerArr', answerArr)
//             if (answerArr.length !== k) { // answerArr.length === 2 < k === 2
//                 answerArr.push(+hashMapEntries[j][0])
//             } else {
                
//                 for (let n = 0; n < answerArr.length; n++) { // [1,(2)]
//                     if (hashMapEntries[j][1] > frequencyHashMap[`${answerArr[n]}`]) { // 1 > 2
//                         answerArr[n] = hashMapEntries[j][0]
//                         break
//                     }
//                 }
//             }
        
//     }
    
//     return answerArr
    
    let frequencyHashMap = {} // [-,3,2,1]
    let answerArr = []

    
    for (let i = 0; i < nums.length; i++) { // O(n) where n is the length of nums
        if (!frequencyHashMap[nums[i]]) {
            frequencyHashMap[nums[i]] = 1
        } else {
            frequencyHashMap[nums[i]] += 1
        }
    }
    
    
    let freqArr = Array(nums.length + 1) // [-,-,-,-,-,-,-]
    let pairs = Object.entries(frequencyHashMap) // [['1',3], ['2',2], ['3',1]] 0(n) where n is the length of entries
    
    for (let j = 0; j < pairs.length; j++) {
        
        if (freqArr[pairs[j][1]] === undefined) {
            freqArr[pairs[j][1]] = [+pairs[j][0]]
        } else {
            freqArr[pairs[j][1]].push(+pairs[j][0])
        }
        
        
    }
    
    // console.log('this is the freqArr', freqArr)
    let n = freqArr.length - 1 
    
    while (answerArr.length < k) {
        
        if (freqArr[n] !== undefined) {
            answerArr = [...answerArr, ...freqArr[n]]
        }
        
        n--
        
    }
    
        
    return answerArr
    
    

    
};