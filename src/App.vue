<template>
  <div id="app">
    <div class="header">
      <h1>Token提交与Flexible适配方案</h1>
    </div>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  overflow: hidden;
}

.header {
  background: black;
  h1 {
    text-align: center;
    font-size: .466667rem;
    line-height: 2;
    padding-left: .133333rem;
    padding-top: .066667rem;
    margin: 0;
    color: white;
  }
}
.wrap {
  margin: 0 auto;
  text-align: center;
}
</style>
