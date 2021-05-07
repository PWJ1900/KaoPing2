<template>

  <div>
    <el-container>
      <el-header>
        <!-- 参评群体 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :showDialogCpqt="true"
                    :showAddorDelete="true"
                    :showSearch="true"
                    :showCheckbox="false" />

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'

export default {
  async created () {
    tablePostGet(this, "cpqt")//根据postman的Api获取数据来测试

  },
  data () {
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [//此处虚更改与后端提取字段的一致
        {
          label: "参评群体名称",
          key: "name"
        },
        {
          label: "参评群体个数",
          key: "cpfv_num"
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