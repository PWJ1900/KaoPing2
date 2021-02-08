<template>

  <div>
    <el-container>
      <el-header>
        <!-- 单位信息 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogNormal="true"
                    :showAddorDelete="true"
                    :showSearch="true"
                    :showdaoru="true"
                    :showdaochu="true" />

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'

export default {
  async created () {
    tablePostGet(this, "dwxx")//根据postman的Api获取数据来测试

  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [
        {
          label: "单位信息代码",
          key: "dwxxdm"
        },
        {
          label: "单位信息名称",
          key: "dwxxmc"
        }



      ],
      tableData: [],
      searchinfo: '',
      restoretableData: []



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