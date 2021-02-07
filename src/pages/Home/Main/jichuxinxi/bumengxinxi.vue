<template>

  <div>
    <el-container>
      <el-header>
        <!-- 部门信息 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogBmxx="true"
                    :showAddorDelete="true"
                    :showdaoru="true"
                    :useSearch="true"
                    :showdaochu="true" />
          <!-- 这个里面的查询功能另外写 -->

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'

export default {
  async created () {
    tablePostGet(this, "bmxx")//根据postman的Api获取数据来测试

  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [
        {
          label: "部门代码",
          key: "bmdm"
        },
        {
          label: "部门名称",
          key: "bmmc"
        },
        {
          label: "单位代码",
          key: "bmxx"//这边写错了应该是单位代码为dwdm
        },
        {
          label: "单位名称",
          key: "dwmc"
        },




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