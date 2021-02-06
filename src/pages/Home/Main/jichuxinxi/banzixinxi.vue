<template>

  <div>
    <el-container>
      <el-header>
        <!-- 班子信息 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>

          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :isBZXX="false"
                    useTitle="班子信息"
                    :showDialoggbxxbzxx="true" />

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'

export default {
  async created () {
    tablePostGet(this, "bmxx")//根据postman的Api获取数据来测试

  },
  data () {
    return {
      headerUse: [
        {
          label: "代码",
          key: "dm"
        },
        {
          label: "名称",
          key: "mc"
        },
        {
          label: "类型",
          key: "lx"//这边写错了应该是单位代码为dwdm
        },
        {
          label: "单位",
          key: "dw"
        },
        {
          label: "部门",
          key: "bm"
        },
      ],
      tableData: [],
    }
  },
  components : {
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