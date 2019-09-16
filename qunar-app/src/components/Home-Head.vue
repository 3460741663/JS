<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe61f;</span>
        </div>
        <div class="header-input">
            <span class="iconfont search-icon">&#xe693;</span>
            <input type="text" placeholder="输入城市/景点">
        </div>
        <div class="header-right">
            {{city}}
            <span class="iconfont arrow-icon">&#xe6dc;</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  computed: {
    city () {
      return '北京'
    }
  }
}
</script>
<style scope lang="scss">
@import '../assets/style/variable.scss';
.header {
  display: flex;
  align-items: center;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: .64rem;
    .back-icon {
      margin-left: .12rem;
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input {
    display: inline-block;
    position: relative;
    flex: 1;
    height:.64rem;
    line-height: .64rem;
    padding-right: .2rem;
    padding-left: .5rem;
    border-radius: .1rem;
    background: #fff;
    .search-icon {
      position: absolute;
      left: .1rem;
      color: #aaa;
    }
    .header-input-in {
      width: 100%;
      font-size: .26rem;
      color: #aaa;
      font-family: "微软雅黑";
    }
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    text-align: center;
    color: #fff;
    .arrow-icon{
      margin-left:-.04rem;
      font-size: .23rem;
    }
  }
}

</style>
