<template>
  <div class="about" v-loading="loading2" element-loading-text="加载中">
    <div v-if="shows">
      <!-- <h2>Cause_XL</h2>
      <p><img src="" alt=""></p>
      <p>
        <a href="http://www.jianshu.com/u/d82ac7ac9b37" target="_blank">简书</a>
        <a href="" target="_blank">Github</a>&nbsp;&nbsp;
      </p> -->
      <p>关于网站</p>
      <p>本站服务端采用 express + mongoDB 搭建, 客户端采用Vue2全家桶</p>
      <p>主要功能包括: 后台登录, 注册, 管理, 标签, 文章, 支持markdown语法编辑, 支持代码高亮</p>
      <p>主要技术栈: express, mongoolass, vue2, vue2-router, vuex, axios, es6, element ui, jsonwebtoken登录验证, 密码加盐设计</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: false,
      loading2: true
    }
  },
  mounted() {
    this.$store.dispatch('changeHeadLine', '关于')
    setTimeout(() => {
      this.$store.dispatch('showProgress', 100)
      this.shows = true
      this.loading2 = false
    }, 300)
  }
}
</script>

<style scoped>
  .about {
    margin: auto;
  }
  .about a {
    display: inline-block;
    color: #4078c0;
    padding: 0.2rem 0.4rem;
    font-size: 1.6rem;
  }
  .about a:first-child{
    padding-left: 0;
  }
  .about a ,.about p,.about h2{
    margin: 1rem auto;
  }
  .about h2{
    font-weight: 400;
    font-size: 3rem;
    align-self: center;
    margin-top: 2rem;
  }
  @media screen and (max-width:480px){
    .about a,.about p{
      font-size: 1.4rem;
    }
    .about h2{
      margin-top: auto;
      font-size: 2.2rem;
    }
  }
</style>