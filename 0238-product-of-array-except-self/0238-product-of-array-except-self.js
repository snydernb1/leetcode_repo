/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   
    //Pseudo:
    
    // Create a left elements arr
    // iterate through nums 
    // on index 0 push 1 into left elements arr
    // going forward multiply the last element of the left elements arr by the left num in nums
    
    // create a right elements arr
    // iterate through nums backwards
    // on index 0 push 1 into right elements arr
    // going forward multiply the last element of the right elements arr by the right num in nums
    
    // create a res arr
    // establish a left and right pointer at L0 and R3
    // iterate through either arr
    // multiple left at left pointer and right at right pointer and push into arr
    // increment both pointers and repeat
    
    // finally return arr
    
    let leftArr = [1] // [1, 1, 2, 6]
    
    for (let l = 1; l < nums.length; l++) {
        
        let val = leftArr[leftArr.length - 1] * nums[l-1]
        leftArr.push(val)
    }
    
    let rightArr = [1] // [1,4,12,24]
    
    for (let r = nums.length - 2; r >= 0; r--) {
        
        let val = rightArr[rightArr.length - 1] * nums[r+1]
        rightArr.push(val)
    }
    
    let leftPointer = 0
    let rightPointer = rightArr.length - 1
    
    let res = []
    
    for (let i = 0; i < nums.length; i++) {
        res.push(leftArr[leftPointer] * rightArr[rightPointer])
        leftPointer++
        rightPointer--
    }
    
    return res
};