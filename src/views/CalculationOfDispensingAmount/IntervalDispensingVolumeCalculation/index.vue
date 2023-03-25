<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp根据劈分系数与单井的注水量，就可以算出层段的注水量，公式如下：
    </p>
    
      <VueMathjax formula="$$Q_i=QC_i$$" />
      <p>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp式中表示层段配注量，表示单井配注量，表示该层段劈分系数。
      </p>
    
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "IntervalDispensingVolumeCalculation",
    components: {VueMathjax}
}
</script>
<style scoped>

</style>