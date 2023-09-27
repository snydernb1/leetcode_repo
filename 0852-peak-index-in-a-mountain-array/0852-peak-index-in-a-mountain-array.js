/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    
    // [12321]
// [1231]
// We have an arr that represents a mnt
// Start vals are increasing, we will get to a peak and then they start decreasing
// The values won't always be even
// return index of peak

// Questions:
// Always one peak
// Always one val
//  [1234256 ] - there will not be sub peaks
//  [123321] - strictly increasing and decreasing
// The peak could be anywhere
// no valleys


// General thoughts:
// Save a max peak val and iterate through the arr check each index to determine if current val is larger than peak - then update 
// We could use a two pointer system starting at the start and end and then work towards each other till we find the peak
    // if we check the adjacent val to determine if it's higher or lower 
    
// Pseudo:

// conditional to check the length of the mnt, if 1 return mnt[0]
// declare a left and right pointer
// while, the left pointer is less than the right pointer 
// conditional to check if left + 1 is greater than left val
// else if check that right - 1 is greater than right val
// return the index (left + 1) or (right - 1)
// increment our left and right pointers
// when we exit the loop, return left pointer


// Log(n) == [1234]
         //     lr
// declare left and right pointer
// While loop, while left is less than right
// if left + 1 === right return whatever is higher
// Find the center of the arr => adding the left and right then dividing by 2 and rounding down
// if both left and right are less than the center - we found the peak, return
// else if, left val is less - peak is on right
    // move left pointer to the center 
// else if, right val is less - peak is on left
    // move right pointer to the center
    
// 


    
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
        
        if (left + 1 === right) {
            
            // arr[left] > arr[right] ? return left : return right
            if (arr[left] > arr[right]) {
                return left
            } else {
                return right
            }
        }
        
        let center = Math.floor((left + right) / 2)
        
        if (arr[center - 1] < arr[center] && arr[center + 1] < arr[center]) {
            // console.log('did we hit this return?')
            //  console.log('right', right)
            //  console.log('left', left)
            //  console.log('center', center)
            return center
        } else if (arr[center + 1] < arr[center]) {
            right = center
        } else if (arr[center - 1] < arr[center]) {
            left = center
        }
        
        
    }
    


// const largestPeak = (mnt) => { //mnt = [0]

    
    
//     let left = 0 // 0
//     let right = mnt.length - 1 // 0
    
//     while (left < right) { // 0 < 0
        
//         if (mnt[left] > mnt[left + 1]) { // 4 > 3
//             return left
//         } else if (mnt[right] > mnt[right - 1]) { //  > 
//             return right
//         }
        
//         left++
//         right--
//     }
    
//     return left
    
    
// }





};