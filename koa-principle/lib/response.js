let response = {
  get body () {
    return this._body  // get 实现ctx.body这种方式获得到body
  },
  set body (value) {
    this.res.statusCode = 200
    this._body = value //当我们的body被修改时，先保存该方法
  }


}

module.exports = response