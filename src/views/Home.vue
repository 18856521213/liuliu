<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
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
                  <i class="el-icon-location"></i>
                  <span>{{item.meta.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="child in item.children" :index="child.meta.fullPath" :key="child.meta.fullPath">{{ child.meta.name }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
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
  data() {
    return {

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
}
</style>
