<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import './assets/css/common.css'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
import {mapState} from 'vuex'
export default {
  computed:mapState(['progress']),
  watch:{
    progress(val){
      if(val==0){
        // NProgress.set(0)
        NProgress.start();
      }else if(val==100){
        NProgress.done();
      }else{
        NProgress.set(val/100)
        NProgress.start();
      }
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  #app{
    height: 100%;
  }
</style>
