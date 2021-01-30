<template>

  <div>
    <el-container>
      <el-header>
        部门信息
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogBmxx="true" />

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { talePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'

export default {
  async created () {
    talePostGet(this, "test")//根据postman的Api获取数据来测试

  },
  components: {
    useTable
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
        },
        {
          label: "调用2",
          key: "d"
        }



      ],
      tableData: [],



    }
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