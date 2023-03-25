<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp在注水井和生产井相对应的层段性质确定之后，接下来的任务就是要在注水 井上划分注水层段，实现分层注水。划分注水层段是调整和控制油田注水的重要 手段。根据油田的油层在垂直方向上的分布情况，分析注水井段每一段的特征， 要把吸水强度不相同、差别大的层段划分出来。对于那些能够采用分层注水办法 的注水井，应当确定出需要用封隔器进行卡封的具体部位。封隔器卡封的层段部 分必须要有性质足够稳定、不渗透的夹层来作为隔层，一般而言该隔层的厚度不 能小于三米。在油田实际划分层段中，还应该充分考虑井的深度，含油层段的长 度以及层一层之间的具体性质。最终的目的都是要控制住高渗透层的注水量，加 强低渗透层的注水量，使各层注水均匀推进。
    </p>
    <p>注水层段划分参考表：</p>
    <div class="table-box" style="padding: 10px;">
      <el-table :data="tableData" :show-header="false" style="width: 100%" border>
        <el-table-column prop="value" label="a"></el-table-column>
        <el-table-column prop="value2" label="a"></el-table-column>
        <el-table-column prop="value3" label="a"></el-table-column>
        <el-table-column prop="value4" label="a"></el-table-column>
      </el-table>
    </div>
    <!-- <div style="text-align: center;padding: 10px;">
      <img src="~@/assets/img/liu3.png" alt="流程图">
    </div> -->
  </div>
</template>
<script>
export default {
    name: "DivideTheWaterfloodInterval",
    data() {
      return {
        tableData: [
        {value: "储层性质", value2: "注水井对应层段", value3: "采油井对应层段", value4: "注水层段性质"},
        {value: "高渗透层", value2: "主要吸水层段、强注层、超注层", value3: "主要产油层、高含水层", value4: "控制限制注水层"},
        {value: "中渗透层", value2: "次要吸水层段", value3: "次要产油层、中低含水层", value4: "平衡注水层"},
        {value: "低渗透层", value2: "不吸水层段或未射孔、未配水层", value3: "低产油层", value4: "强化注水层"},
        ]
      }
    }
}
</script>
<style scoped>

</style>