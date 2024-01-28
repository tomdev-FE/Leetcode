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
var zigzagLevelOrder = function(root) {
      let result = [];
    if (root === null) {
      return result;
    }

    const queue = [];
    queue.push(root);
    let reverse = false;

    while (queue.length > 0) {
      const levelSize = queue.length;
      let currentLevel = [];
      for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();

        // add the node to the current level
        if (reverse) {
          currentLevel.unshift(currentNode.val);
        } else {
          currentLevel.push(currentNode.val);
        }

        // insert the children of the current node in the queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }


      result.push(currentLevel);
      reverse = !reverse; // Switch the direction for the next level
    }

    return result;
};