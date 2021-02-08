<template>

  <div>
    <el-container>
      <el-header>
        <!-- 用户密码 -->
        <headerUse />
      </el-header>
      <el-main>
        <useTable :headerUse="this.headerUse"
                  :tableData="this.tableData"   
                  :showDialogYhmm="true"/>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import { tablePostGet } from '@/api/tablePostGet'
import useTable from '@/components/Table/useTable'

export default {
  async created () {
    console.log("用户密码组件-加载完成")
    // tablePostGet(this, "bmxx")//根据postman的Api获取数据来测试
  },
  components : {
    useTable
  },
  data () {
    return {
      /**表格数据、表头信息
       * 
       */
      tableData : [
        {
          yhm : '144',
          mm : '222',
          jy : true,
          kpxh : '212',
          qtlx : 'a',
          fzm : '',
          fzma : ''
        },
        {
          yhm : '222',
          mm : '33',
          jy : true,
          kpxh : '22',
          qtlx : 'a',
          fzm : '',
          fzma : ''
        }
      ],
      headerUse : [
        {
          label : '用户名',
          key : 'yhm'
        },
        {
          label : '密码',
          key : 'mm'
        },
        {
          label : '禁用',
          key : 'jy'
        },
        {
          label : '考评序号',
          key : 'kpxh'
        },
        {
          label : '群体类型',
          key : 'qtlx'
        },
        {
          label : '分组名',
          key : 'fzm'
        },
        {
          label : '分组码',
          key : 'fzma'
        }
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