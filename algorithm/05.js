var quene = new Array();
function push(node)
{
    // write code here
    quene.push(node);
}
function pop()
{
    // write code here
    if(quene.length) return quene.shift();
}
push(1);
push(2);
push(3);
console.log(pop());
console.log(pop());
console.log(pop());
