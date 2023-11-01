/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;

    let maxArea = -Infinity;

    while (left < right) {
        let length = right - left;
        let heightNum = height[right] > height[left] ? height[left] : height[right];

        if (length * heightNum > maxArea) {
            maxArea = length * heightNum;
        };

        if (height[right] > height[left]) {
            left++;
        } else {
            right--;
        };

    };

    return maxArea;
    
};