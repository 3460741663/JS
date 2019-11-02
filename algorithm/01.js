function Find(target, array)
{
    // write code here
    let y = array[0].length - 1;
    let x = 0;
    while( y >= 0 && x < array[0].length){
      if(array[x][y] === target) return true
      else if (array[x][y] < target){
        x ++;
      } else {
        y --;
      }
    }
    return false;
}
array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 10, 11],
  [12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21],
  [33, 40, 48, 50, 61]
]
console.log(Find(77, array));