/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let max=-Infinity,left=0,right=height.length-1;
    
    while(left<right){
        max = Math.max(max,Math.min(height[left],height[right])*(right-left));
         if (height[left] < height[right])
            left += 1;
        else
            right -= 1;
    }
    return max;
};