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
                    :showdaochu="true"
                    @refreshUseData="SecondGet" />
          <!-- @refreshUseData="SecondGet" 这个为更改传值再次刷新数据 -->

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
          key: "dwdm"
        },
        {
          label: "单位信息名称",
          key: "dwmc"
        }



      ],
      tableData: [],
      searchinfo: '',
      restoretableData: []
      ,






    }
  },
  methods: {
    SecondGet () {
      tablePostGet(this, "dwxx")//更改数据时第二次刷新其逻辑dialog->table->this属性，$emit实现



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