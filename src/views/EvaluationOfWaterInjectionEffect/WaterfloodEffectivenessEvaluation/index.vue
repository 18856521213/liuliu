<template>
  <div>
    <p>注水有效性可以通过压力保持水平、存水率、耗水量、含水（上升）率、递减率等几个方面进行评价，并建立相应的评价标准。</p>
    <div class="table-box" style="padding: 10px;">
      <el-table :data="tableData" :show-header="false" style="width: 100%" border>
        <el-table-column prop="value" label="a"></el-table-column>
        <el-table-column prop="value2" label="a"></el-table-column>
        <el-table-column prop="value3" label="a"></el-table-column>
        <el-table-column prop="value4" label="a"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "WaterfloodEffectivenessEvaluation",
    components: {"vue-mathjax": VueMathjax},
    data() {
      return {
        tableData: [
          {value: "评价标准", value2: "Ⅰ类", value3: "Ⅱ类", value4: "Ⅲ类"},
          {value: "压力保持水平， %", value2: "PR ≥ 0.85Pb", value3: "0.85Pb ＞ PR ≥ 0.60Pb", value4: "PR ＜ 0.6Pb"},
          {value: "存水率与经验统计差值幅度", value2: "≥ 0", value3: "-20% - 0", value4: "≤ -20%"},
          {value: "耗水量与经验统计偏离幅度", value2: "≤ 0", value3: "0 - 15%", value4: "≥ 15%"},
          {value: "可采储量采出50%前，%", value2: "≤ 3", value3: "3 - 7", value4: "> 7"},
          {value: "可采储量采出50%后，%", value2: "≤ 5", value3: "5 - 10", value4: "> 10"},
        ],
        formula: '$$\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t$$',
      }
    }
}
</script>
<style scoped>

</style>