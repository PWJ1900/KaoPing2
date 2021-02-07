<template>

  <div>
    <el-container>
      <el-header>
        <!-- 测评等级 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 这是main -->
        <useTable :headerUse="this.headerUse"
                  :tableData="this.tableData"
                  useTitle="班子信息"
                  :showDialogNormal="true" />
      </el-main>
    </el-container>

  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
export default {
  created () {
    tablePostGet(this, "bmxx")

  },
  data () {
    return {
      tableData: [],
      headerUse: [
        {
          label: "测评等级",
          key: "bmdm"
        },
        {
          label: "最低分",
          key: "bmmc"
        },
        {
          label: "最高分",
          key: "zgf"
        },
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