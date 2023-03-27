<template>
  <div>
    <transition name="el-fade-in" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';

export default {
    name: "layout",
}
</script>
<style scoped>

</style>