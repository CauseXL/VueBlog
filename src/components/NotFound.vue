<template>
  <div class="NotFound">
    <div class="wrap">
      <h1>不存在的页面</h1>
      <p><a @click="goHome" href="javascript:;">请重回主页</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.replace({path: '/home'})
      }
    }
  }
</script>

<style scoped>
  h1,p{
    margin:0;
  }
  .NotFound {
    display: flex;
    height: 100%;
    background:#0A7189;
    color:#fff;
    padding: 1rem;
  }
  .wrap{
    margin:auto;
    text-align: center;
  }
  .wrap h1{
    font-size:5rem;
    font-weight: 500;
  }
  .wrap p{
    margin-top: 4rem;
  }
  .wrap p a{
    display: block;
    color:#fff;
    text-decoration: underline;
    font-size: 2rem;
  }
  .wrap p a:hover{
    opacity: 0.8;
  }
</style>
