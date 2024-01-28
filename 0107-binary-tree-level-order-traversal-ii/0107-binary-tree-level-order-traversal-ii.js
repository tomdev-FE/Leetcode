/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements at the start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move towards the center of the array
    start++;
    end--;
  }

  return arr;
}
var levelOrderBottom = function(root) {
       let result = []
    if(root===null){
        return result
    }
    
    const queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        const levelSize = queue.length;
        let currentLevel = []
        for(let i = 0; i<levelSize;i++){
            let currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left !== null){
                queue.push(currentNode.left)
            } 
            
            if(currentNode.right !== null){
                queue.push(currentNode.right)
            }
        }
        result.push(currentLevel)
    }
   
      return reverseArray(result)
};