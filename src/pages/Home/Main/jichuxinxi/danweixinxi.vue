<template>

  <div>
    <el-row>
      <useDialog :headerUse="headerUse"
                 :form="this.tableData[0]" />
      <el-button>单位信息</el-button>

      <useTable :headerUse="this.headerUse"
                :tableData="this.tableData" />

    </el-row>
  </div>
</template>
<script>
import { talePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'
import useDialog from '@/components/dialog/dialogUse'
export default {
  async created () {
    talePostGet(this, "test")//根据postman的Api获取数据来测试

  },
  components: {
    useTable,
    useDialog
  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [
        {
          label: "单位信息代码",
          key: "a"
        },
        {
          label: "单位信息名称",
          key: "b"
        },
        {
          label: "调用",
          key: "c"
        }



      ],
      tableData: [],



    }
  },
  methods: {

  }

}
</script>