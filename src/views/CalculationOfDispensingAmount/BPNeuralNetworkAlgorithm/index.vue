<template>
  <div>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBP神经网络的学习过程主要分两个阶段：第一个阶段是输入已知学习样本，通过设置的网络结构和前一次迭代的权值和阈值，从网络第一层向后计算各神经元的输出。第二个阶段是对权值和阈值进行修改，从最后一层向前计算各权值和阈值对总误差的影响，据此对各权值和阈值进行改进。以上两个过程反复交替，直到达到设定的训练次数，或者输出层的输出量与期望值的差值满足误差精度要求后，将所得的网络进行存储。
    </p>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一个BP神经网络主要由三部分组成，即1个输入层、n个隐含层和1输出层。每一层包括n个神经元，其数量根本需要情况设定，输入层神经元个数与输入数据的维度相同，输出层神经元个数则与需求拟合的目标数据个数相等。隐含层的个数则需根据具体需求情况而定，一般为1层，每个隐含层神经元的个数也依据使用者的规则来设定。
    </p>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBP神经网络神经元的传递采用S型函数，是一种非线性变换函数，分为单极性S 型函数和双极性S型函数两种，其本身和导函数皆为连续函数，在计算上极为方便。输出量为0-1的连续量，可以实现从输入到输出的任意非线性映射。
    </p>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp注水量预测BP神经网络流程；BP神经网络可以利用三层向前具有Sigmoid神经元的非线性网络，以任意精度逼近任何连续函数，因此可以利用BP神经网络对分层注水量进行预测。
    </p>
    <div style="text-align: center;padding: 10px;">
      <img src="~@/assets/img/liu.png" alt="流程图">
    </div>
    <p>
      BP神经网络拓扑结构图：
    </p>
    <div style="text-align: center;padding: 10px;">
      <img src="~@/assets/img/liu2.png" alt="流程图">
    </div>
    <p>
      据分层注水量预测的需要，选择3层向前神经网络。其中输入层节点为7个，量个隐含层经过优化选择各5个节点，输出层1个节点。
    </p>
    <p>
      图中各输入节点对应：
    </p>
    <p>
      i1-厚度i2-有效厚度 i3-地层系数 i4-有效渗透率 i5-地层压力 i6-孔隙度-i7-注入压力 输出节点：Q-该层段分层注水量。数据的预处理:
    </p>
    <p>
      在注水油井注水量数据中，注水量和地层参量是已知的，但是某些地层参量往往会 缺失部分数据，也就是出现空白值，空白数据会导致注水油井注水量无法准确预测，因此在建立基于BP神经网络的分层注水量预测模型前需要对空白值进行填充。如果某地 层参量缺失数据数量大于2个，为保证预测效果，本文将此认为此组数据无效。如果某 地层参量缺失的数据为2个，但此2个数据相邻，为保证预测效果，本文也将此认为此组数据无效。
    </p>
    <p>
      空白值的填充方法如下：
    </p>
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp设某地层参数:
    </p>
    <VueMathjax formula="$$A_0=(a_0(1),...,a_0(k),\phi_1,...a_0(i),...a_0(k_1),\phi_2,...,a_0(n))$$" />
    <p>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp第一个空白值的填充方法如下:
    </p>
    <VueMathjax formula="$$\hat \phi_1=\sum_{i=1}^ka_0(i)·(\beta_1-1)+\beta_2$$" />
  </div>
</template>
<script>
import { VueMathjax } from 'vue-mathjax'
export default {
    name: "BPNeuralNetworkAlgorithm",
    components: {VueMathjax}
}
</script>
<style scoped>

</style>