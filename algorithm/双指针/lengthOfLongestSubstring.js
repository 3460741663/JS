var lengthOfLongestSubstring = function(s) {
  // 滑动窗口思想
  let len = s.length;
  let left = 0, right=0;
  let map = new Map();
  let res = 0; // 返回值
  let last = 0; // 表示这个字符的上次数值
  while(right<len){
    // 扩大窗口直到不满足条件
    let tempChar = s[right];
    last = map.get(tempChar)
    if(last){map.set(tempChar,++last)
    }else{last = 1;map.set(tempChar,last)}
    right ++;
    // console.log(map)
    while(map.get(tempChar)>1){
      let tempChar1 = s[left];
      last = map.get(tempChar1);
      map.set(tempChar1,--last)
      left ++;
    }
    res = Math.max(res, right-left)
  }
  return res
};
console.log(lengthOfLongestSubstring("pwwkew"))