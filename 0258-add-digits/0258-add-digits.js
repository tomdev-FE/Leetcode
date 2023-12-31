/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<=9){
        return num
    }
    let numberString = String(num);
let result = 0;
for(let i = 0;i<numberString.length;i++){
    result += parseInt(numberString[i])
}
// Access individual digits

   if(result>9){
       return addDigits(result)
   } else{
       return result
   }
 
};