<template>
  <div class="registry">
    <h3>欢迎注册注入井配注与调控知识应用平台</h3>
    <div class="content-body">
     <div class="left">
      <h1>知识应用平台, 知识改变石油</h1>
      <h3>现在注册可以使用一下功能</h3>
      <div class="function-list">
        <div class="function-item" v-for="item in funList" :key="item.id">
          <i :class="item.icon"></i>
          {{ item.name }}
        </div>
      </div>
      <h3>目前仅支持网页版</h3>
      <div>
        <svg style="width: 40px;height: 40px;" t="1679728860415" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2746" width="200" height="200"><path d="M832 160 192 160c-38.4 0-64 32-64 64l0 448c0 38.4 32 64 64 64l256 0 0 64L352 800C332.8 800 320 812.8 320 832c0 19.2 12.8 32 32 32l320 0c19.2 0 32-12.8 32-32 0-19.2-12.8-32-32-32L576 800l0-64 256 0c38.4 0 64-32 64-64l0-448C896 192 864 160 832 160zM832 672l-640 0 0-448 640 0 0 0L832 672z" p-id="2747"></path></svg>
      </div>
     </div>
     <div class="right">
      <div class="right-content">
        <h1>开始使用</h1>
        <el-form label-position="top" :model="registryForm" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registryForm.username" placeholder="请输入用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input type="password" v-model="registryForm.password" placeholder="请输入用户密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="repassword">
            <el-input type="password" v-model="registryForm.repassword" placeholder="请输入用户密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%;padding-top: 10px;" type="primary" @click="agreeHandle">同意</el-button>
            <br>
            <el-button style="width: 100%;padding-top: 30px;" type="text" @click="backLoginHandle">已有账号? 返回登录</el-button>
          </el-form-item>
        </el-form>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "registry",
  data() {
    return {
      registryForm: {
        username: "",
        password: "",
        repassword: ""
      },
      funList: [
        {id: 1, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 2, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 3, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 4, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 5, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 6, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 7, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 8, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 9, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 10, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 11, icon: "el-icon-s-custom", name: "用户管理"},
        {id: 12, icon: "el-icon-s-custom", name: "用户管理"},
      ],
      rules: {
        username: [{required: true, message: "必填项", trigger: 'blur'}],
        password: [{required: true, message: "必填项", trigger: 'blur'}],
        repassword: [{required: true, message: "必填项", trigger: 'blur'}],
      }
    }
  },
  methods: {
    agreeHandle() {
      this.$message.success("注册成功，返回登录页面");
      this.$router.push("/login")
    },
    backLoginHandle() {
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
.registry {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/bg3.jpg") no-repeat;
}
.registry > h3 {
  padding: 40px;
  color: #0252cc;
  font-size: 24px;
  font-weight: 500;
}
.registry .content-body {
  width: 70%;
  height: 80vh;
  background: #fff;
  box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 1px rgba(9,30,66,.31);
  display: flex;
  padding: 20px 50px;
  border-radius: 8px;
}
.registry .content-body .left {
  width: 60%;
}
.registry .content-body .left > h1 {
  margin-bottom: 32px;
  font-size: 35px;
  font-weight: 400;
  line-height: 62px;
  color: #0052cc;
  color: #172b4d;
  letter-spacing: 0;
}
.registry .content-body .left > h3 {
  font-weight: 400;
  color: #6b6b6b;
  padding: 20px 0;
}
.registry .content-body .left > .function-list {
  padding: 10px;
  background: #fafbfc;
  display: flex;
  flex-wrap: wrap;
}
.registry .content-body .left > .function-list .function-item {
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

.registry .content-body .left > .function-list .function-item > i {
  padding: 10px;
  background: #fff;
  font-size: 35px;
  border-radius: 5px;
  color: #0052cc;
}
.registry .content-body .right {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.registry .content-body .right .right-content {
  width: 400px;
  height: 600px;
  background: #fff;
  box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 1px rgba(9,30,66,.31);
  border-radius: 8px;
  padding: 20px 30px;
}
.registry .content-body .right .right-content h1 {
  padding: 30px 0;
  text-align: center;
  font-weight: 500;
  font-size: 40px;
}
</style>