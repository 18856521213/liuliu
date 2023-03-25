<template>
  <div>
    <transition name="el-fade-in" mode="out-in">
        <router-view/>
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