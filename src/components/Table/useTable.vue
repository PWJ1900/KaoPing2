<template>
  <el-row>
    <el-button @click="addUse">新增</el-button>
    <el-button>全部</el-button>
    <el-button @click="groupDelete">批量删除</el-button>
    <el-button>单位信息</el-button>
    请输入查询条件：<el-input style="width:15%"
              v-model="searchinfo"></el-input>

    <el-button @click="searchinfoUse(searchinfo)">查询</el-button>
    <useDialog v-if="this.showDialog"
               :headerUse="headerUse"
               :form="form"
               @func="getifshow" />
    <el-table :data="this.tableDataUse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              border
              @selection-change="selectionLineChangeHandle"
              stripe>
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column v-for="info in headerUse"
                       :key="info.key"
                       :property="info.key"
                       :label="info.label">
        <template slot-scope="scope">
          {{ scope.row[scope.column.property] }}
        </template>
      </el-table-column>
      <el-table-column label="拉选框">
        <template slot-scope="scope">
          <el-button @click="editUse(scope.row)">编辑</el-button>
          <el-button @click="deleteUse(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 15, 20]"
                     :page-size="5"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData.length">
      </el-pagination>
    </div>
  </el-row>
</template>
<script>
import useDialog from '@/components/dialog/dialogUse'
export default {
  props: {
    headerUse: Array,//此处为传入label的参数
    tableData: Array//此处为传入的表单数据
  },
  watch: {
    tableData (newVal, oldVal) {
      this.tableDataUse = newVal;  //newVal即是chartData
    }
  },
  methods: {
    // changeTri(){


    // },
    groupDelete () {

    },
    selectionLineChangeHandle (val) {
      console.log(val)//把此值交给后groupDelete处理然后交给后端分配处理，交给后端接口

    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val
      // console.log(this.sizeChange)
    },
    handleCurrentChange (val) {
      this.currentPage = val


    },
    addUse () {
      this.showDialog = true
      this.form = {}

    },
    editUse (value) {
      this.showDialog = true
      this.form = value
      alert(value.a)//把此次修改的值交给后端处理，写后端删除接口，可以设置一个值传入到dialog里面来判断是删除还是修改

    },
    deleteUse (value) {
      this.showDialog = true
      this.form = value//把此次修改的值交给后端处理

    },
    getifshow (data) {
      this.showDialog = data//得到子组建的传值来点击关闭

    },
    searchinfoUse (datasearch) {
      if (datasearch != '') {
        this.tableDataUse = this.tableDataUse.filter(//便编写的查询过滤器考虑把次放出去因为每个的页面需要的过滤属性不一样
          (data) =>
            !datasearch ||
            (data.a + "")
              .toLowerCase()
              .includes(datasearch.toLowerCase()) ||
            (data.b + "")
              .toLowerCase()
              .includes(datasearch.toLowerCase()) ||
            data.c
              .toLowerCase()
              .includes(datasearch.toLowerCase())
        );



      } else {
        this.tableDataUse = this.tableData
        this.currentPage = 1
        this.pagesize = 5
      }
    },

  },
  components: {
    useDialog

  },
  data () {
    return {
      showDialog: false,
      form: Object,
      currentPage: 1,
      pagesize: 5,
      tableChange: [],
      tableUse: [],
      searchinfo: '',
      restoretableData: [],
      tableDataUse: []

    }
  }

}
</script>