let obj = {
    a: 1,
    field4: {
      child: 'child',
      child2: {
        child2: 'child2'
      }
    }
  }
//   function clone(target) {
//     let cloneTarget = {}; //浅拷贝要的 内存空间
//     for (const key in target) {
//       cloneTarget[key] = target[key];
//     }
//     return cloneTarget;
//   }
  //加强版
  function Clone(target){
      if(typeof target == 'object'){
          let cloneTarget = Array.isArray(target) ? [] : {};
          //性能开销
          for(const key in target){
              cloneTarget[key] = clone(target[key]);
          }
          return cloneTarget;
      }
      return target;
  }
  let obj1 = clone(obj);
  obj1.a = 2
  obj1.field4.child = 'newChild';
  console.log(obj.field4.child);