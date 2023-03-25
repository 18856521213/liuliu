<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp静态劈分地层系数法即法，法是对有效厚度法法的一次优化发展，其中尺表示油层层段的渗透率，表示油层有效厚度，乘积表示的就是地层系数。其基本原理与有效厚度法相似，也是利用地层系数的加权计算，从而得出每个层段的流量勞分系数，具体公式如下：
    </p>
    <VueMathjax formula="$$\gamma_i=\frac{K_iH_i}{\sum_{i=1}^nK_iH_i}$$" />
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp以上公式中：K表示目标层段的渗透率； H表示目标层段的有效厚度值。
    </p>
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "StaticSplitFormationCoefficientMethod",
    components: { VueMathjax }
}
</script>
<style scoped>

</style>