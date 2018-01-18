<template>
  <div class="wrap-login">
    <input class="wrap-input" type="text" v-model.trim="token">
    <button class="wrap-btn" @click='login'>提交</button>
    <a href="https://github.com/settings/tokens/new" target="_blank" class="wrap-a">获取token</a>
    <!-- 1f3d7a64e8a8c4cbca80e8d4374a7407c89a48e4 -->
  </div>  
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      token: '',
    };
  },
  methods: {
    login() {
      if (this.token) {
        console.log('已输入token');
        this.$store.commit('login', this.token);
        this.$router.push('/list');
        return true;
      }
      console.log('未输入token');
      return false;
    },
  },
};
</script>


<style lang="scss" scoped>
.wrap-input {
  font-size: 12px;
  width: 200px;
  line-height: 24px;
  padding: 0 10px;
  border: 2px solid gray;
  outline: none;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
}
.wrap-btn, .wrap-a {
  display: block;
  margin: 0 auto;
  width: 2.666667rem;
  line-height: .666667rem;
  margin-bottom: .2rem;
  border: none;
  background: black;
  color: #fff;
  cursor: pointer;
}
.wrap-a {
  text-decoration: none;
}
</style>



