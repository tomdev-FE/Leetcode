/**
 * @param {string} s
 * @return {string}
 */
const reverse = (str)=>{
    str.split('');
    let left=0,right=str.length-1;
    while(left<right){
        let temp=str[left];
        str[left]=str[right];
        str[right]=str[left];
        left++;
        right--
    }
    str.join('');
}
var reverseWords = function(s) {
    const splitS = s.split(' ').filter(el=>el!=='')
    let left=0,right=splitS.length-1;

    while(left<right){
        let temp = splitS[left];
        splitS[left]=splitS[right];
        splitS[right]=temp;
        left++;
        right--
    }

    return splitS.join(' ')
};