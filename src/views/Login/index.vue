<template>
  <div class="login">
    <div class="title">注入井配注与调控知识应用平台</div>
    <div class="login-box">
      <h3>登录你的账号</h3>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="请输入用户姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="loginForm.password" placeholder="请输入用户密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;padding-top: 10px;" type="primary" @click="loginHandle">登录</el-button>
          <br />
          <el-button style="width: 100%;margin-top: 20px;" @click="registryHandle">注册账号</el-button>
          <br />
          <el-button type="text" style="width: 100%;margin-top: 20px;">忘记密码？</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123"
      }
    }
  },
  methods: {
    registryHandle() {
      this.$router.push("/registry")
    },
    loginHandle() {
      // axios.get("assets/user.json").then(res => {
      //   console.log(res)
      // })
      this.$router.push("/")
    }
  }
}
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("../../assets/img/bg3.jpg") no-repeat;
}
.login .login-box {
  background: #fff;
  width: 420px;
  height: 440px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  padding: 10px 50px;
  border-radius: 8px;
}
.login .title{
  padding: 40px;
  color: #0252cc;
  font-size: 24px;
  font-weight: 500;
}
.login .login-box h3 {
  text-align: center;
  padding: 40px 0;
  font-weight: 400;
  color: #646464;
}
</style>


