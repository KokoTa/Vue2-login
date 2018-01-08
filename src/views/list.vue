<template>
  <button @click="loginout">Login out</button>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {

    };
  },
  methods: {
    getData() {
      this.axios.get('/user/repos', {
        sort: 'updated',
      }).then(res => console.log(res));
    },
    loginout() {
      this.$store.commit('loginout');
      this.$router.replace('/login');
      console.log('登出成功，已清除token');
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>

</style>


