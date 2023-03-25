import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "@/components/Layout.vue"
import Nprogress from "nprogress"
Vue.use(VueRouter)

export const routes = [
    {
      path: "*", redirect: "/login"
    },
    {
      path:'/', redirect: '/main'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: "main",
          name: "Main",
          component: () => import("@/views/Main/index.vue"),
          meta: {
            name: "首页",
            fullPath: "/main"
          }
        },
        {
          path: "other",
          name: "other",
          component: Layout,
          meta: {
            name: "其他",
            fullPath: "/other"
          },
          children: [
            {
              path: "other1",
              name: "other1",
              component: () => import("@/views/Main/index.vue"),
              meta: {
                name: "其他1",
                fullPath: "/other/other1"
              },
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login/index.vue"),
      meta: {
        name: "登录页",
        fullPath: "/login"
  }
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import("@/views/Registry/index.vue"),
      meta: {
        name: "注册页",
        fullPath: "/registry"
  }
    },
    
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})
//路由前置守卫
router.beforeEach((from, to, next) => {
  Nprogress.start();
  next();
})

//路由后置守卫
router.afterEach((from, to) => {
  Nprogress.done();
  sessionStorage.removeItem("userInfo")
})

export default router
