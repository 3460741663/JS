<template>
  <div class="search-wrap">
    <div class="title-wrap">
      <span>标题</span>
      <div>&gt;</div>
    </div>
    <div class="icon-back">
      <span>&lt;</span>
    </div>
    <div class="search-input">
      <input type="text" class="search"/>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.search-wrap {
  z-index: 110;
  width: 100%;
  height: 94px;
  background-color: white;
}
.title-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  text-align: center;
}
.title-wrap div {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  padding-right: 10px;
}
.icon-back {
  position: absolute;
  left: 10px;
  top: 0;
  z-index: 110;
  height: 42px;
}
.search-input {
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 100;
  display: flex;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
.search {
  border: 1px solid #eee;
  color: #666;
  width: 100%;
  height: 22px;
  background: transparent;
  font-size: 12px;
  margin-left: 10px;
  padding: 4px;
  border-radius: 5px;
}
</style>
