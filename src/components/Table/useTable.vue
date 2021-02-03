<template>
  <el-row>
    <el-card style="margin:1%">
      <el-button @click="addUse"
                 type="success">新增</el-button>
      <el-button type="danger"
                 @click="groupDelete"
                 plain>批量删除</el-button>
      请输入查询条件：<el-input style="width:15%"
                v-model="searchinfo"></el-input>

      <el-button @click="searchinfoUse(searchinfo)">查询</el-button>
      <!-- 以下是通用dialog -->
    </el-card>

    <useDialog v-if="this.showDialogNormal&&this.showDialog"
               :headerUse="headerUse"
               :form="form"
               @func="getifshow" />
    <!-- 此处为分别不同类型的页面使用不同的dialog -->
    <!-- 以下是部门信息dialog -->
    <bmxxDialog v-if="this.showDialogBmxx&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcBmxx="getifshow" />
    <!-- 以下是 一级指标dialog-->
    <yjzbDialog v-if="this.showDialogYjzb&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcYjzb="getifshow" />
    <!-- 以下是二级指标 -->
    <ejzbDialog v-if="this.showDialogEjzb&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcEjzb="getifshow" />
    <!-- 以下是参评群体的dialog -->
    <cpqtDialog v-if="this.showDialogCpqt&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcCpqt="getifshow" />
    <!-- 以下是班子信息和干部信息的复用 -->
    <gbxxbzxxDialog v-if="this.showDialoggbxxbzxx&&this.showDialog"
                    :headerUse="headerUse"
                    :form="form"
                    :isBZXX="isBZXX"
                    :useTitle="useTitle"
                    @funcgbxxbzxx="getifshow" />

    <el-card style="margin:1%;">
      <el-scrollbar>
        <el-table :data="this.tableDataUse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border
                  :max-height="useTableHeight"
                  v-loading="loading"
                  @selection-change="selectionLineChangeHandle"
                  stripe>
          <el-table-column type="selection">
          </el-table-column>
          <template v-for="info in headerUse">
            <el-table-column :key="info.key"
                             :property="info.key"
                             v-if="ifshow(info.label)"
                             :label="info.label">
              <template slot-scope="scope">
                {{ scope.row[scope.column.property] }}
              </template>
            </el-table-column>
          </template>
          <el-table-column label="拉选框">
            <template slot-scope="scope">
              <el-button type="info"
                         icon="el-icon-edit"
                         @click="editUse(scope.row)">编辑</el-button>
              <el-popconfirm title="您确定要将此行信息删除吗"
                             @confirm="deleteUse(scope.row)">
                <el-button type="danger"
                           slot="reference"
                           icon="el-icon-delete">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </el-card>

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
import bmxxDialog from '@/components/dialog/bmxxDialog'
import yjzbDialog from '@/components/dialog/yjzbDialog'
import ejzbDialog from '@/components/dialog/ejzbDialog'
import cpqtDialog from '@/components/dialog/cpqtDialog'
import gbxxbzxxDialog from '@/components/dialog/gbxxbzxxDialog'
export default {
  props: {
    headerUse: Array,//此处为传入label的参数
    tableData: Array,//此处为传入的表单数据
    showDialogNormal: Boolean,//此处设置的传入值是来判断使用什么dialog，因为很多dialog不一样
    showDialogBmxx: Boolean,//这个为部门信息的dialog
    showDialogYjzb: Boolean,//这个为一级指标的dialog
    showDialogEjzb: Boolean,//这个为二级指标dialog
    showDialogCpqt: Boolean,//这个对应的是参评群体的dialog
    showDialoggbxxbzxx: Boolean,
    isBZXX: Boolean,
    useTitle: String
  },
  computed: {
    useTableHeight () {
      return (window.innerHeight * 3 / 5)
    }

  },
  watch: {
    tableData (newVal, oldVal) {
      this.tableDataUse = newVal;  //newVal即是chartData
      this.loading = false
    },

  },
  methods: {
    // changeTri(){


    // },
    ifshow (data) {
      console.log(data)
      if (data == '单位代码') {//此处添加要隐藏的列
        return false
      } else {
        return true
      }
    },
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


      //把此次修改的值交给后端处理，写后端删除接口，可以设置一个值传入到dialog里面来判断是删除还是修改

    },
    deleteUse (value) {
      // this.showDialog = true
      this.form = value//把此次修改的值交给后端处理
      console.log(value.dwxxdm)

    },
    getifshow (data) {
      this.showDialog = data//得到子组建的传值来点击关闭

    },
    searchinfoUse (datasearch) {
      let keyUse = []
      //把tableData的一组key取出来，从而做下面对应属性的过滤
      for (let i in this.tableData[0]) {
        keyUse.push(i)

      }
      this.tableDataUse = this.tableData
      if (datasearch != '') {
        this.tableDataUse = this.tableDataUse.filter(//便编写的查询过滤器考虑把次放出去因为每个的页面需要的过滤属性不一样
          (data) =>
            !datasearch ||
            (data[keyUse[0]] + "")
              .toLowerCase()
              .includes(datasearch.toLowerCase()) ||
            (data[keyUse[1]] + "")
              .toLowerCase()
              .includes(datasearch.toLowerCase()) ||
            (data[keyUse[2]] + "")
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
    useDialog,
    bmxxDialog,
    yjzbDialog,
    ejzbDialog,
    cpqtDialog,
    gbxxbzxxDialog

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
      tableDataUse: [],
      noshow: true,
      loading: true

    }
  }

}
</script>

<style scoped>
.block {
  text-align: center;
}
</style>
<style>