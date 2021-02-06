<template>

  <div>
    <el-container>
      <el-header>
        <!-- 数据统计 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 第一部分： -->
        <div>
          测评序号：
          <el-select v-model="cepingxuhaotemp" placeholder="请选择测评序号">
            <el-option v-for="item in data" :label="item.cepingxuhao+'('+item.cepingmingcheng+')'" 
              :key="item.cepingxuhao" 
              value='i.cepingxuhao'>
            </el-option>
          </el-select>
    
          单位：
          <el-select v-model="cepingxuhaotemp" placeholder="请选择测评序号">
          </el-select>
        </div>
        <!-- 第二部分：表格1 -->
        <div>
          <table width="500px" border="2">
            <caption>用户密码分配与使用情况统计</caption>
            <tr>
              <th>按测评对象</th>
              <th>合计</th>
              <th>合计</th>
            </tr>
            <tr>
              <td>用于密码分配数</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>已登录用户密码数</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>已结束测评用户数</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>应有测评记录总数</td>
              <td>35</td>
              <td>35</td>
            </tr>
            <tr>
              <td>已采集测评记录数</td>
              <td>7</td>
              <td>7</td>
            </tr>
          </table>
        </div>
        <!-- 第三部分：表格2 -->
        <div>
          <table width="500px" border="2">
            <caption>被测对象测评数据采集情况统计</caption>
            <tr>
              <th>按被测评对象</th>
              <th>代码</th>
              <th>合计</th>
              <th>范围a</th>
              <th>全优</th>
              <th>全差</th>
              <th>单位</th>
              <th>部门</th>
            </tr>
            <tr>
              <td>人员03</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
              <td>7</td>
            </tr>
          </table>
        </div>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  async created () {
    console.log("数据统计组件-加载完成")
  },
  data () {
    return {
      /**第一部分的数据：记录所选的测评序号、单位的值
       */
      danweitemp : '',
      cepingxuhaotemp : '',
      data : [],
      danwei : []
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
</style>