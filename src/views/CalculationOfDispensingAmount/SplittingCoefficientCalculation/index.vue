<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp选取出影响劈分系数的多种因素，构成劈分条件值，在由以下公式进行劈分系数的计算：
    </p>
    <p>
      <VueMathjax formula="$$C_i=\frac{Y_i}{\sum_{i=1}^nY_i}$$" />
    </p>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp式中为劈分条件值即为各类劈分系数影响因素值得乘积； 对于劈分条件值的构建，应当通过系统的分析，而不能把所有的影响因素都当做构建值的因子，因为各个油田区块的地质情况，开采条件以及开发情况各不相同，所以每种因素对劈分系数的影响程度也不相同，有些无关紧要的因子 如果加入到了勞分系数中，可能会引起结果计算的误差，从而影响整个配注方案。 因此需要事先通过灰色关联度分析法对影响因素进行分析计算，灰色关联度分析 法能够算出每种影响因素对勞分系数影响程度，根据结果中每种因素权重值来选 择哪些该用来构建劈分条件值，哪些该舍弃。采用灰色关联分析法相当于对勞分 系数公式进行了优化，可以建立更加符合该油田实际情况的勞分系数公式，然后计算出劈分系数，最后基于劈分系数进行配注。
    </p>
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "SplittingCoefficientCalculation",
    components: {VueMathjax}
}
</script>
<style scoped>

</style>