<template>
  <div class="header">
    <div class="title">
      <svg t="1679732430121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2904" width="200" height="200"><path d="M928 160H96a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32z m-24 56v131H120V216zM494.7 808V649.21L586.51 808z m138 0l-131-226.48 70.58-43.24V558a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V457.66a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v33.7l-90.61 55.52-27 16.58-109 66.66a8 8 0 0 0-2.67 11.06l12.77 20.48a8 8 0 0 0 11 2.59l87.93-53.88V808H120V403h784v405z" fill="#0252cc" p-id="2905"></path><path d="M186 283m-26 0a26 26 0 1 0 52 0 26 26 0 1 0-52 0Z" fill="#0252cc" p-id="2906"></path><path d="M278 283m-26 0a26 26 0 1 0 52 0 26 26 0 1 0-52 0Z" fill="#0252cc" p-id="2907"></path><path d="M370 283m-26 0a26 26 0 1 0 52 0 26 26 0 1 0-52 0Z" fill="#0252cc" p-id="2908"></path><path d="M752 311.24v-8.9L737.66 288l13.75-13.76a2 2 0 0 0 0.59-1.41v-8.07a1 1 0 0 0-1.71-0.71L726.34 288l23.95 24a1 1 0 0 0 1.71-0.76zM828.71 312l23.95-24-23.95-23.95a1 1 0 0 0-1.71 0.71v8.9L841.34 288l-13.75 13.76a2 2 0 0 0-0.59 1.41v8.07a1 1 0 0 0 1.71 0.76z" fill="#0252cc" p-id="2909"></path></svg>      <h3 class="aaa" id="sdsd">注入井配注与调控知识应用平台</h3>
    </div>
    <div class="avatar-box">
      <el-dropdown @command="commandHandle">
        <span class="el-dropdown-link">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span class="avatar-name">某某人</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo" icon="el-icon-user-solid" divided>个人信息</el-dropdown-item>
          <el-dropdown-item command="exit" icon="el-icon-switch-button" divided>安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    commandHandle(item) {
      if(item === "userInfo") {
        this.$message.error("暂时还没有开发")
      }else if(item === "exit") {
        this.$router.push("/login")
      }
    }
  }
}
</script>

<style scoped>
.header {
 background: #fff;
 box-shadow: 0 1px 2px #dbdbdb;
 height: 60px;
 display: flex;
 justify-content: space-between;
}
.header > .title {
  line-height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.header > .title > h3 {
  color: #0252cc;
  font-size: 25px;
  font-weight: 400;
}
.header > .title svg {
  width: 42px;
  height: 34px;
}
.avatar-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  cursor: pointer;
}
.avatar-name {
  position: relative;
  top: -10px;
  left: 10px;
}
</style>