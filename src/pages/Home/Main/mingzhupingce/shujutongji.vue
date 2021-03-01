<template>

  <div>
    <el-container>
      <el-header>
        <!-- 数据统计 -->
        <headerUse />
      </el-header>
      <el-main>

        <!-- 这是main -->

        <!-- 第一部分： -->
        <div style="margin-top:20px">
          <span style="margin-left:50px">
          测评序号：
          <el-select v-model="cepingxuhaotemp"
                     placeholder="请选择测评序号">
            <el-option v-for="item in data"
                       :label="item.cepingxuhao+'('+item.cepingmingcheng+')'"
                       :key="item.cepingxuhao"
                       value='i.cepingxuhao'>
            </el-option>
          </el-select>
          </span>
          <span style="margin-left:50px">
          单位：
          <el-select v-model="cepingxuhaotemp"
                     placeholder="请选择测评序号">
          </el-select>
          </span>
        </div>
        <!-- 第二部分：表格1 -->

        <div style="margin-top:20px"></div>  
        <div style="margin-top:20px">
          <table width="500px"
                 border="2">

            <caption>用户密码分配与使用情况统计</caption>
            <tr>
              <th>按测评对象</th>
              <th>合计</th>
              <th>范围a</th>
            </tr>
            <tr v-for="item in tableData1"
                :key="item.label">
              <td>{{item.label}}</td>
              <td>{{item.data1}}</td>
              <td>{{item.data2}}</td>
            </tr>
          </table>
        </div>
        <!-- 第三部分：表格2 -->
        <div style="margin-top:20px">
          <table  style="height:100px;width:600px"
                 border="2">

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
            <tr v-for="item in tableData2"
                :key="item.name">
              <td>{{item.name}}</td>
              <td>{{item.data1}}</td>
              <td>{{item.data2}}</td>
              <td>{{item.data3}}</td>
              <td>{{item.data4}}</td>
              <td>{{item.data5}}</td>
              <td>{{item.data6}}</td>
              <td>{{item.data7}}</td>
            </tr>
          </table>
        </div>

        <!-- 这是main -->
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
      /**第一部分
       * danweitemp：记录所选单位
       * cepingxuhaotemp：记录所选（测评序号+测评名称）
       * cepingList ：测评序号、测评名称信息列表
       * danweiList：单位信息列表
       */
      danweitemp: '',
      cepingxuhaotemp: '',
      cepingList: [],
      danweiList: [],
      /**第二部分（表格1）
       */
      tableData1: [
        {
          label: '用于密码分配数',
          data1: 5,
          data2: 5
        },
        {
          label: '已登录用户密码数',
          data1: 3,
          data2: 3
        },
        {
          label: '已结束测评用户数',
          data1: 0,
          data2: 0
        },
        {
          label: '应有测评记录总数',
          data1: 35,
          data2: 35
        },
        {
          label: '已采集测评记录数',
          data1: 7,
          data2: 7
        }
      ],
      /**第三部分（表格2）
       */
      tableData2: [
        {
          name: '人员03',
          data1: 7,
          data2: 7,
          data3: 7,
          data4: 7,
          data5: 7,
          data6: 7,
          data7: 7
        }
      ]


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