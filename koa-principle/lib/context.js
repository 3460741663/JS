let proto = {}

function defineGetter(prop, name) {
  proto.__defineGetter__(name, function() {
    return this[prop][name] // this ===>ctx 所以
  })
}
function defineSetter(prop, name){
  proto.__defineSetter__(name, function(val){
    this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

defineGetter('response', 'body') // ctx.body代理ctx.respone.body
defineSetter('response', 'body')
module.exports = proto