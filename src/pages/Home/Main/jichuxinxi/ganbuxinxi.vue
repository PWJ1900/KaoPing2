<template>

  <div>
    <el-container>
      <el-header>
        <!-- 干部信息 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>

          <useTable :headerUse="this.headerUse"
                    :tableData="this.tableData"
                    :isBZXX='true'
                    useTitle="干部信息"
                    :showDialoggbxxbzxx="true"
                    :showAddorDelete="true"
                    :showdaoru="true"
                    :showdaochu="true" />
          <!-- 查询自己写 -->

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
export default {
  async created () {
    // tablePostGet(this, "bmxx")//根据postman的Api获取数据来测试

  },
  data () {
    return {
      headerUse: [
        {
          label: "代码",
          key: "dm"
        },
        {
          label: "姓名",
          key: "xm"
        },
        {
          label: "性别",
          key: "xb"//这边写错了应该是单位代码为dwdm
        },
        {
          label: "出生年月",
          key: "csny"
        },
        {
          label: "职务",
          key: "zw"
        },
        {
          label: "任职时间",
          key: "rzsj"
        },
        {
          label: "职级",
          key: "zj"
        },
        {
          label: "职级时间",
          key: "zjsj"
        },
        {
          label: "身份",
          key: "sf"
        },
        {
          label: "单位",
          key: "dw"
        },
        {
          label: "部门",
          key: "bm"
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