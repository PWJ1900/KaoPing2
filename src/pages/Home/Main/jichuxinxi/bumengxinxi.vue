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
                    :showdaochu="true"
                    @refreshUseData="SecondGet"
                    getName="bmxx"
                    @delete="del" />
          <!-- 这个里面的查询功能另外写 -->
          <!-- @refreshUseData="SecondGet"  -->

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
    return {//下面的headerUse写的是属性字段//tableData则为调用的json值
      headerUse: [
        {
          label: "id",
          key: "id"
        },
        {
          label: "部门代码",
          key: "bmdm"
        },
        {
          label: "部门名称",
          key: "bmmc"
        },
        {
          label: "py",
          key: "py"
        },
        {
          label: "单位代码",
          key: "dwdm"//这边写错了bmxx应该是单位代码为dwdm
        },
        {
          label: "单位名称",
          key: "dwmc"
        },
        {
          label: "时间",
          key: "addtime"
        },
        {
          label: "使用人",
          key: "UserName"
        }





      ],
      tableData: [],



    }
  },
  methods: {
    async SecondGet () {
      tablePostGet(this, "bmxx")//更改数据时第二次刷新其逻辑dialog->table->this属性，$emit实现
    },
    del (data) {
      this.$axios.post("del_bmxx", this.qs.stringify({ id: data.id })).then(
        (res) => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }
      )

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