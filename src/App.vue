<template>
  <div id="app">
    <div class="header">
      <h1>Token提交与Flexible适配方案</h1>
    </div>
    <div class="wrap">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      // 根据地址进行过渡方向的改变
      // 其实应该像豆瓣项目那样，根据路由长度进行判断，然而这个demo并没有嵌套路由，so只能这样
      if (to.name === 'Login') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    },
  },
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

.slide-left-enter, .slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter, .slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-enter-active, 
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active  {
  transition: all .5s linear;
}
</style>
