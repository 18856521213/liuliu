<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp当油井和水井都同时开井生产时，注水井的井底流压表达式为
    </p>
    <VueMathjax formula="$$P_wf=P_e+\frac{Q_i\mu_wB_w}{1.842\times(0.001) KK_rw(1)h_1}\times\ln\frac{r}{r_w}$$" />
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp在同一井组、地层压力相等的情况下，当注采压差相同时采油井劈分水量少，则压力平衡点与注水井间的距离越大，故可依据压力平衡点与注水井间的距离大小确定以注水井为中心到对应采油井之间的劈分系数。该方法计算需要的数据少，且更符合生产实际。
    </p>
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "PressureBalancePositionSplittingCoefficientInjectionMethod",
    components: {VueMathjax}
}
</script>
<style scoped>

</style>