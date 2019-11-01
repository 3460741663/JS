let url = require('url')
let request = {
  get url () { // 直接request.url即可获得返回值
    return this.req.url
  },
  get path () {
    return url.parse(this.req.url).pathname
  },
  get query () {
    return url.parse(this.req.url).query
  }
}

module.exports = request