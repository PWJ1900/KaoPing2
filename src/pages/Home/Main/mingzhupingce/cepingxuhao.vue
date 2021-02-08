<template>

  <div>
    <el-header>
      <!-- 测评结果 -->
      <headerUse />
    </el-header>
    <el-main>
      <!-- 测评序号 -->
      <useTable   :headerUse="this.headerUse"
                  :tableData="this.tableData"
                  :showDialogCpxh="true"/>
      </el-main>

  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'


export default {
  async created () {
    console.log("测评序号组件-加载完成")
    // tablePostGet(this, "bmxx")//根据postman的Api获取数据来测试
  },
  data () {
    return {
      /**子组件的数据
       * headerUse：表头信息，带key（子组件用来绑定prop属性）
       * tableData：表格数据
       */
      headerUse: [
        {
          label: "测评序号",
          key: "cpxh"
        },
        {
          label: "测评名称",
          key: "cpmc"
        },
        {
          label: "开始时间",
          key: "kssj"
        },
        {
          label: "结束时间",
          key: "jssj"
        }
      ],
      tableData: [
        {
          cpxh: 'a',
          cpmc: 'b',
          kssj: 'c',
          jssj: 'd'
        },
        {
          cpxh: 'aa',
          cpmc: 'bb',
          kssj: 'cc',
          jssj: 'dd'
        }
      ],
    }
  },
  components: {
    useTable
  },
  methods: {
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