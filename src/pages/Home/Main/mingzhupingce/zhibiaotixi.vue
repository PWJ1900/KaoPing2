<template>
  <div>
    <el-container>
      <el-header>
        <!-- 指标体系 -->
        <headerUse />
      </el-header>
      <el-main>
        <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :isBZXX="false"
                    useTitle="指标体系"
                    :showDialoggbxxbzxx="true" />
      </el-main>
    </el-container>

  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'

export default {
  async created () {
    console.log("指标体系组件-加载完成")
    talePostGet(this, "test")//根据postman的Api获取数据来测试
  },
  components : {
    useTable
  },
  data () {
    return {
      headerUse : [
        {
          label :"测评序号",
          key : 'cpxh'
        },
        {
          label :'身份',
          key : 'sf'
        },{
          label :'指标名称',
          key : 'zbmc'
        },{
          label :'指标个数',
          key : 'zbgs'
        },{
          label :'参评群体数',
          key : 'cpqts'
        }
      ],
      tableData : []
    }
  }
}
</script>>
<style scoped>
@import '../../../../css/headermain2.css';

.el-main {
  padding: 0;
}
</style>