<template>
  <div class="container">
    <el-form class="reg_form" :model="user" :rules="rules2" ref="user" label-position="left" label-width="0px">
      <h3 class="title">系统注册</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="user.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="user.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkRepeatPass">
        <el-input type="password" v-model="user.checkRepeatPass" auto-complete="off" placeholder="重复输入密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button class='reg_button' type="primary" style="width:40%;" @click="handleSubmit">注册</el-button>
        <el-button class='login_button' type="primary" style="width:40%;" @click="toLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    // 自定义验证函数
    var checkRepeatPass = (rule, value, callback) => {
      if (value == '') {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.user.checkPass) {
        return callback(new Error('两次输入的密码不一样'))
      } else {
        callback()
      }
    }
    return {
      loding: false,
      user: {
        account: '',
        checkPass: '',
        checkRepeatPass: ''
      },
      rules2: {
        account: [
          { require: true, message: '账号不能为空!', trigger: 'blur'}
        ],
        checkPass: [
          { required: true, message: '请输入密码!', trigger: 'blur' }
        ],
        checkRepeatPass:[
          { validator: checkRepeatPass, trigger:'blur'}
        ]
      }
    }
  },
  methods: {
    toLogin(){
      this.$router.push({path:'/login'})
    },
    handleSubmit() {
      this.$refs.user.validate((valid) => {
        if (valid) {
          this.$store.dispatch('UserReg', this.user)
        } else {
          console.log('error submit!!!')
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-form-item{
    text-align: center
  }
</style>