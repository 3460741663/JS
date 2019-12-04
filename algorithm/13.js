function reOrderArray(array)
{
    // write code here
    var oddNumber = [];
    var evenNumber = [];
    for(let item of array){
      if(item % 2 === 0) evenNumber.push(item)
      else oddNumber.push(item)
    }
    return oddNumber.concat(evenNumber);
}
module.exports = {
    reOrderArray : reOrderArray
};