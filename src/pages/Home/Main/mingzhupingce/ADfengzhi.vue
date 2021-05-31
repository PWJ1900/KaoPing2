<template>

  <div>
    <el-container>
      <el-header>
        <!-- A~D分值 -->
        <headerUse />
      </el-header>
      <el-main>
        <div class="adfz_div">
        <table border="1" class="adfz_table">
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
        </div>
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
      console.log(this.tableData)
      this.$axios.post('edit_adfz',this.qs.stringify(this.tableData[0])).then(
        (res)=>{
          if(res.data=='1'){
            alert('修改成功')
          }
        }
      )
    }
  }
}
</script>
<style scoped>
@import '../../../../css/headermain2.css';
.el-main {
  padding: 0;
}
.adfz_div{
  width:700px;
  height: 500px;
  margin:auto;
}
.adfz_table {
  width:700px;
  height: 300px;
  margin:auto;
  margin-top:100px!important ; 
  border-collapse:collapse; 
  border-radius:25px;
  border:2px solid #a1a1a1;
      background-color: #FFF;

}
table th,table td {
  height: 35px;
  width: 250px;
  text-align: center
}
input {
  margin: 10px;
}

</style>