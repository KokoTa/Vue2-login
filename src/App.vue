<template>
  <div id="app">
    <div class="header">
      <h1>TITLE</h1>
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
  width: 100%;
  background: black;
  h1 {
    margin: 0;
    padding: 10px;
    color: white;
  }
}
.wrap {
  width: 1200px;
  height: calc(100% - 56px);
  margin: 0 auto;
  text-align: center;
  overflow-y: auto;
}
</style>
