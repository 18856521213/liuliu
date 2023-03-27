<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="260px">
          <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo">
            <template v-for="item in routerList">
              <el-menu-item :index="item.meta.fullPath" v-if="!item.children">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.meta.name }}</span>
              </el-menu-item>
              <el-submenu :index="item.meta.fullPath" v-else>
                <template slot="title">
                  <i :class="item.meta.icon"></i>
                  <span>{{item.meta.name}}</span>
                </template>
                <template v-for="son in item.children">
                  <el-menu-item v-if="!son.children" :index="son.meta.fullPath">{{ son.meta.name }}</el-menu-item>
                  <el-submenu v-else :index="son.meta.fullPath">
                    <template slot="title">{{ son.meta.name }}</template>
                    <el-menu-item v-for="child in son.children" :index="child.meta.fullPath" :key="child.meta.fullPath">{{ child.meta.name }}</el-menu-item>
                  </el-submenu>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- <div class="nav">
            <el-tag size="medium" v-for="item in navList" :key="item.fullPath" closable>{{ item.name }}</el-tag>
          </div> -->
          <transition name="el-fade-in" mode="out-in">
              <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>
    <!-- <div class="hearder">
      <Header />
    </div>
    <div class="body">

    </div> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import { routes } from "@/router/"
export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      navList: []
    }
  },
  watch: {
    "$route": {
      deep: true,
      immediate: true,
      handler(val) {
        console.log(val)
        let newArr = this.navList.map(item => item.fullPath);
        if(!newArr.includes(val.meta.fullPath)) {
          this.navList.push(val)
        }
      }
    }
  },
  computed: {
    routerList() {
      let list= null;
      routes.forEach(item => {
        if(item.name == "Home") {
          list = item.children
        }
      })
      return list
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.el-header {
  padding: 0 !important;
  z-index: 5;
}
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}
.home >>> .el-main {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.nav {
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
}
.el-tag {
  margin-left: 5px;
}
</style>
