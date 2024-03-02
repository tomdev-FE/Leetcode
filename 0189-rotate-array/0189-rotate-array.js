/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArr = (arr,left,right)=>{
    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--
    }
}
var rotate = function(nums, k) {    
    k = k % nums.length
    rotateArr(nums,0,nums.length-1);
    rotateArr(nums,0,k-1);
    rotateArr(nums,k,nums.length-1);
};