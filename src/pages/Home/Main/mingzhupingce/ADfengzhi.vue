<template>

  <div>
    <el-container>
      <el-header>
        <!-- A~D分值 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 这是main -->
        <table border="5">
          <caption>分值设定表格</caption>
          <tr>
            <th colspan="2">选项</th>
            <th colspan="2">分值</th>
          </tr>
          <tr>
            <td colspan="2">A</td>
            <td colspan="2">
              <input type="number" v-model="tableData[0].a">
            </td>
          </tr>
          <tr>
            <td colspan="2">B</td>
            <td colspan="2">
              <input type="number" v-model="tableData[0].b">
            </td>
          </tr>
          <tr>
            <td colspan="2">C</td>
            <td colspan="2">
              <input type="number" v-model="tableData[0].c">
            </td>
          </tr>
          <tr>
            <td colspan="2">D</td>
            <td colspan="2">
              <input type="number" v-model="tableData[0].d">
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
import { tablePostGet } from '@/api/tablePostGet'


export default {
  async created () {
    tablePostGet(this, "adfz")//根据postman的Api获取数据来测试
  },
  data () {
    return {
      // 这是测试用的数据，实际应该是axios获取数据
      tableData : {}
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
.el-main {
  padding: 0;
}
table {
  width: 500px;
  height: 300px;
  margin-top: 1%;
  margin-left: 10%;
}
table th,table td {
  height: 50px;
  width: 250px;
}
input {
  margin: 10px;
}
td {
  text-align: center
}
</style>