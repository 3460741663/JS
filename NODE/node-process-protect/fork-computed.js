const forkComputed = () => {
  let sum = 0;
  for (let i = 0; i < 10000; i ++){
    sum += i;
  }
  return sum;
}
process.on('message', msg => {
  console.log(msg);
  const sum = forkComputed();
  process.send(sum);
})