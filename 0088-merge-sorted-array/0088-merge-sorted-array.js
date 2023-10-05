/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    console.log('nums1', nums1) // there are extra 0s that need to be replaced with the proper vals
    console.log('nums2', nums2)
    
    // outer loop through nums2
    // use the length of nums2 to find the largest val in nums 1, acts as pointer?

    
    if (m === 0) {
        for (let k = 0; k < nums1.length; k++) {
            nums1[k] = nums2[k]
        }
        
        return nums1
    }
    
    // nums1 = [4,0,0,0,0,0]
    // nums2 = [1,2,3,5,6]
    
    // nums1 = [4,0,0,0,0,0]
    // nums2 = [1,2,3,5,6]
    let j = m - 1 // 4
    let currentI = j // 4
      
    for (let i = 0; i < nums2.length; i++) { // i = 0
        
        if (nums1[j] < nums2[i] && nums1[j] !== 0) { // 0 < 1
            nums1[j+1] = nums2[i]
            currentI++
        }  else {
                    
            while (nums1[j] > nums2[i]) { // 0 > 1
                
                nums1[j+1] = nums1[j] // 
                j--
                
                
            }
            
            nums1[j + 1] = nums2[i]
            currentI++
        }
        
        j = currentI
        

        
    }
    
    return nums1

    
};