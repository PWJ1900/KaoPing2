<template>

  <div>
    <el-container>
      <el-header>
        <!-- 数据上报 -->
        <headerUse />
      </el-header>
      <el-main>
        <table border cellspacing="0px">
          <caption>添加测评序号</caption>
          <tr>
            <th colspan="2">测评序号</th>
            <th colspan="2"><input type="text" style="width: 100%;"></th>
            <th colspan="2">测评名称</th>
            <th colspan="2"><input type="text" style="width: 100%;"></th>
          </tr>
          <tr>
            <th colspan="2">开始日期：</th>
            <th colspan="2"><el-date-picker type="date" placeholder="选择日期" v-model="ksrq" style="width: 100%;"></el-date-picker></th>
            <th colspan="2">开始时间：</th>
            <th colspan="2"><el-time-picker placeholder="选择时间" v-model="kssj" style="width: 100%;"></el-time-picker></th>
          </tr>
           <tr>
            <th colspan="2">结束日期：</th>
            <th colspan="2"><el-date-picker type="date" placeholder="选择日期" v-model="jsrq" style="width: 100%;"></el-date-picker></th>
            <th colspan="2">结束时间：</th>
            <th colspan="2"><el-time-picker placeholder="选择时间" v-model="jssj" style="width: 100%;"></el-time-picker></th>
          </tr>
          <tr>
            <th colspan="8"><el-button type="primary"  size="mini">添加</el-button><el-button type="primary"  size="mini">返回</el-button></th>
          </tr>
        </table>
        <p style="font-size: 16px; color: Red; font-weight: bold;">
            省委组织部对省属各高校领导班子及成员的年终考核的测评序号为：年份X88，如201088，2010188；<br>
            <br>
            省委组织部对省属各高校“一报告、两评议”的评议序号为：年份X99，如201099,2010199。<br>
            <br>
            请务必定义准确，只有这样才能将结果正确导出，上报省组织部。<br>
            <br>
            其它类型的干部民主测评，请不能用以88、99结尾的测评序号，否则无法统计这些干部的测评结果。<br>
            <br></p>

      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      ksrq: '',
      jsrq: '',
      kssj: '',
      jssj: '',
    }
  },
  created () {
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

#app {
  min-width: 1366px;
}
</style>