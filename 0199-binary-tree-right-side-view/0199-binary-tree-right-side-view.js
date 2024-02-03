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
var rightSideView = function(root) {
    let result = [];
    if(root===null){
        return result;
    }
    const queue=[];
    queue.push(root);
    
    while(queue.length>0){
        const levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            const currentNode = queue.shift();
            if(i===levelSize-1){
                result.push(currentNode.val)
            }
            if(currentNode.left !==null){
                queue.push(currentNode.left)
            }
            if(currentNode.right !== null){
                queue.push(currentNode.right)
            }        
        }
    }
    return result
};