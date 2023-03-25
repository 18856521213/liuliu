<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp渗流阻力系数法即是通过计算注水井每个层段向周围连通生产井方向的渗流 阻力系数值，来判定每个层段应该多注还是少注，最终确定注水量。此方法需要 得知每个油水井每个小层的产量值、地层油粘度、有效渗透率、有效厚度和油水井距等参数。每个小层的渗流阻力系数计算公式如下：
    
    </p>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp以上公式中：
    </p>
    <VueMathjax formula="$$R_i=\mu_o\frac{L_i}{M_iH_iK_i}$$" />
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRi表示层段渗流阻力系数；U0表示地层油的粘度；M0表示i层段产量系数； Hi表示层段有效厚度值；Ki表示层段渗透率；Li表示层段的油水井距。
    </p>
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "SeepageResistanceCoefficientMethod",
    components: {VueMathjax}
}
</script>
<style scoped>

</style>