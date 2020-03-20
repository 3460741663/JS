/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  // console.log(s)
  if(!s.length) return true;
  let left = findChar(0,0);
  let right = findChar(s.length - 1,1); 
  console.log(left,right)
  function findChar(index,direction){
    // console.log(index,'___')
    while(index>=0 && index <= s.length){
      if(direction == 0){
        if((s[index] >= 'a' && s[index] <= 'z') || (s[index] >= '0'&& s[index] <='9')){return index}
        index ++;
      }else{
        if((s[index] >= 'a' && s[index] <= 'z') || (s[index] >= '0'&& s[index] <='9')){return index}
        index --;
      }
    }
    return index
  }
  let leftChar,rightChar;
  while(left<right){
    // console.log(left,right,'___****')
    // console.log(findChar(left,0),findChar(right,1))
    left = findChar(left,0);
    right = findChar(right,1);
    leftChar = s[left];
    rightChar = s[right];
    // console.log(leftChar,rightChar)
    if(leftChar == rightChar){
      left ++;right --;
    }else{
      return false
    }
    
  }
  return true
};
console.log(isPalindrome("1a2"))
// console.log('a'<'b')
// console.log('A' > 'a')