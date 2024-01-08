/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let result = [];
    if(firstList.length === 0 || secondList.length === 0){
        return [];
    }
    let i=0,j=0;
    
    while(i<firstList.length && j<secondList.length){
        let [start1,end1]= firstList[i];
        let [start2,end2] = secondList[j];
        
         if (end1 >= start2 && end2 >= start1) {
             let start = Math.max(start1,start2);
             let end = Math.min(end1,end2);
             result.push([start,end])
         }
         if(end1<end2){
             i++
         } else {
             j++
         }
    }
    return result
};