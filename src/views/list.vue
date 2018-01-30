<template>
  <div class="wrap-list" @scroll="getNewData($el)">
    <ul class="list">
      <li v-for="(value, key) in listData" :key="key" class="list-item">
        <div class="list-left">
          <a :href="value.owner.url">
            <img :src="value.owner.avatar_url" alt="#">
          </a>
        </div>
        <div class="list-right">
          <div class="list-header">
            <span class="list-name">{{ value.name }}</span>
            <span class="list-lang">{{ value.language }}</span>
          </div>
          <a :href="value.url"><button class="list-btn">查看项目</button></a>
        </div>
      </li>
    </ul>
    <button @click="loginout" class="login-btn">Login out</button>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      listData: [],
      throttleFlag: true,
      throttleSettimeout: null,
    };
  },
  methods: {
    getNewData(el) {
      const oldScrollHeight = el.scrollHeight;
      if (el.scrollTop === 0 && this.throttleFlag) {
        // 闭流
        this.throttleFlag = false;
        // 获取数据
        this.getData()
          .then(() => {
            const nowScrollHeight = el.scrollHeight;
            el.scrollTop = nowScrollHeight - oldScrollHeight;
            // 开流
            setTimeout(() => {
              this.throttleFlag = true;
            }, 500);
          });
      }
    },
    getData() {
      return this.axios.get('/user/repos', {
        sort: 'updated',
      }).then((res) => {
        this.listData.splice(0, 0, ...res.data);
        // 等待DOM更新后进行操作
        this.$nextTick(() => {
          const itemsData = this.listData;
          const itemsDom = document.querySelectorAll('.list-item');
          for (let i = 0; i < itemsData.length; i += 1) {
            if (!('bgColor' in itemsData[i])) {
              const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor((Math.random() * 6) + 5)})`;
              itemsData[i].bgColor = randomColor;
            }
            itemsDom[i].style.background = itemsData[i].bgColor;
          }
        });
      });
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
@mixin font-dpr($font-size){
    font-size: $font-size;
    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}

.wrap-list {
  .list-item {
    height: 1.6rem;
    background: lightblue;
    margin: .133333rem;
    padding: .066667rem;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    .list-left {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: .64rem;
      }
    }
    .list-right {
      flex: 10;
      text-align: left;
      .list-header {
        @include font-dpr(.32rem);
        display: flex;
        padding: .133333rem;
        .list-name, .list-lang {
          flex: 1;
        }
      }
      .list-btn {
        @include font-dpr(.186667rem);
        width: 1.6rem;
        line-height: .426667rem;
        margin-left: .133333rem;
        margin-top: .133333rem;
        padding: .066667rem;
        background: lightcyan;
        color: gray;
        border: none;
        outline: none;
        border-radius: .066667rem;
        cursor: pointer;
      }
    }
  }
  
  .login-btn {
    width: 2.666667rem;
    height: .666667rem;
    margin-bottom: .333333rem;
    border: none;
    background: black;
    color: #fff;
    cursor: pointer;
  }
}
</style>


