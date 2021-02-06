<template>

  <div>
    <el-container>
      <el-header>
        <!-- A~D分值 -->
        <headerUse />
      </el-header>
      <el-main>
        <table border="5">
          <caption>分值设定表格</caption>
          <tr>
            <th colspan="2">选项</th>
            <th colspan="2">分值</th>
          </tr>
          <tr>
            <td colspan="2">A</td>
            <td colspan="2">
              <input type="number" v-model="dataList.A">
            </td>
          </tr>
          <tr>
            <td colspan="2">B</td>
            <td colspan="2">
              <input type="number" v-model="dataList.B">
            </td>
          </tr>
          <tr>
            <td colspan="2">C</td>
            <td colspan="2">
              <input type="number" v-model="dataList.C">
            </td>
          </tr>
          <tr>
            <td colspan="2">D</td>
            <td colspan="2">
              <input type="number" v-model="dataList.D">
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <el-button type="success" @click="dataEdit">修改</el-button>
            </td>
          </tr>
        </table>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  async created () {
    // 获取后端的A~D分值
    console.log("A~D分值组件-加载完成")
  },
  data () {
    return {
      // 这是测试用的数据，实际应该是axios获取数据
      dataList : 
        { A : 10,
          B : 20,
          C : 30,
          D : 40
        }
    }
  },
  methods : {
    dataEdit () {
      // 修改A~D分值的方法
      alert("修改成功！"+this.dataList.A+this.dataList.B+this.dataList.C+this.dataList.D)
    }
  }
}
</script>
<style scoped>
@import '../../../../css/headermain2.css';
</style>
<style>
.el-main {
  padding: 0;
}
table {
  width: 400px;
  height: 300px;
  margin-top: 10px;
  margin-left: 50px;
}
input {
  margin: 10px;
}
td {
  text-align: center
}
</style>