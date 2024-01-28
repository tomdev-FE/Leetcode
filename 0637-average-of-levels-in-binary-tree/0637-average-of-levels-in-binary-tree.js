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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
      let result = [];
    if(root === null){
      return result
    }

    const queue =[];
    queue.push(root);

    while(queue.length > 0){
      const levelSize = queue.length;
      let currentLevel = [];
      let sum = 0;
      for(let i = 0;i<levelSize;i++){
        const currentNode = queue.shift();

        currentLevel.push(currentNode.val);

        if(currentNode.left !== null){
          queue.push(currentNode.left);
        }

        if(currentNode.right !== null){
          queue.push(currentNode.right)
        }
      }
      for(let j=0;j<currentLevel.length;j++){
        sum += currentLevel[j];
      }

      result.push(sum/currentLevel.length)
    }
    // TODO: Write your code here
    return result;
};