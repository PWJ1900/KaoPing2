<template>
<!-- 表格由头部 + 表格 + 底部组成  -->
  <el-row>
    <!-- 头部组件：新增、批量删除、筛选查找 -->
    <el-card style="margin:1%">
      <!-- 新增 -->
      <el-button @click="addUse" type="success">新增</el-button>
      <!-- 批量删除 -->
      <el-button type="danger" @click="groupDelete" plain>批量删除</el-button>
      <!-- 查询框 、查询按钮 -->
      请输入查询条件：<el-input style="width:15%" v-model="searchinfo"></el-input>
      <el-button @click="searchinfoUse(searchinfo)">查询</el-button>
    </el-card>

    <!-- 表格组件 -->
    <el-card style="margin:1%;">
      <el-scrollbar>
        <!--表格
              data：数据
              border：有边框
              max-height：使用computed计算的返回值
              row-style：
              cell-style：
              v-loading：
              @selection-change：
              stripe：

         -->
        <el-table :data="this.tableDataUse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border
                  :max-height="useTableHeight"
                  :row-style="{height: '0'}"
                  :cell-style="{padding: '1px'}"
                  v-loading="loading"
                  @selection-change="selectionLineChangeHandle"
                  stripe>
          <!--第一列：选取框 -->
          <el-table-column type="selection">
          </el-table-column>
          <!-- 中间列：根据headerUse的数据动态生成 -->
          <template v-for="info in headerUse">
            <el-table-column :key="info.key"
                             :prop="info.key"
                             v-if="ifshow(info.label)"
                             :label="info.label">
              <!-- <template slot-scope="scope">
                {{ scope.row[scope.column.property] }}
              </template> -->
            </el-table-column>
          </template>
          <!-- 最后列：拉选框（编辑和删除） -->
          <el-table-column label="拉选框">
            <template slot-scope="scope">
              <!-- 编辑 -->
              <el-button type="info" icon="el-icon-edit" @click="editUse(scope.row)">编辑</el-button>
              <!-- 删除 -->
              <el-popconfirm title="您确定要将此行信息删除吗" @confirm="deleteUse(scope.row)">
                <el-button type="danger" slot="reference" icon="el-icon-delete">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </el-card>

    <!-- 底部组件：页数组件 -->
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

    <!--以下是所有的dialog （新增、编辑用的是同一个dialog，区别在于带不带数据）
      useDialog ： 基础dialog
      基础信息的：
        bmxxDialog ： 部门信息
        yjzbDialog ： 一级指标
        ejzbDialog ： 二级指标
        cpqtDialog ： 参评群体
        gbxxbzxxDialog ： 干部信息、班子信息
      民主评测的：  
        yhmmDialog : 用户密码
    -->
    <useDialog v-if="this.showDialogNormal&&this.showDialog"
               :headerUse="headerUse"
               :form="form"
               @func="getifshow"/>
    <bmxxDialog v-if="this.showDialogBmxx&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcBmxx="getifshow"/>
    <yjzbDialog v-if="this.showDialogYjzb&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcYjzb="getifshow"/>
    <ejzbDialog v-if="this.showDialogEjzb&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcEjzb="getifshow"/>
    <cpqtDialog v-if="this.showDialogCpqt&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcCpqt="getifshow"/>
    <gbxxbzxxDialog v-if="this.showDialoggbxxbzxx&&this.showDialog"
                    :headerUse="headerUse"
                    :form="form"
                    :isBZXX="isBZXX"
                    :useTitle="useTitle"
                    @funcgbxxbzxx="getifshow"/>
    <yhmmDialog v-if="this.showDialoggbxxbzxx&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                :isBZXX="isBZXX"
                :useTitle="useTitle"/>              
  </el-row>
</template>
<script>
import useDialog from '@/components/dialog/dialogUse'
import bmxxDialog from '@/components/dialog/bmxxDialog'
import yjzbDialog from '@/components/dialog/yjzbDialog'
import ejzbDialog from '@/components/dialog/ejzbDialog'
import cpqtDialog from '@/components/dialog/cpqtDialog'
import gbxxbzxxDialog from '@/components/dialog/gbxxbzxxDialog'
import yhmmDialog from '@/components/dialog/yhmmDialog'

export default {
   created () {
    this.tableDataUse = this.tableData
    this.loading = false
  },

  props: {
    /**表格基本属性
     * headerUse ：表头信息，带key（用来绑定prop）
     * tableData ：表格数据
     */
    headerUse: Array,//此处为传入label的参数
    tableData: Array,//此处为传入的表单数据

    /**此处设置的传入值是来判断使用什么dialog，因为很多dialog不一样
     * showDialogNormal : 普通dialog
     * showDialogBmxx : 部门信息的dialog
     * showDialogYjzb : 一级指标的dialog
     * showDialogEjzb : 二级指标dialog
     * showDialogCpqt : 参评群体的dialog
     * showDialoggbxxbzxx ：
     * showDialogYhmm : 用户密码的dialog
     */
    showDialogNormal: Boolean,
    showDialogBmxx: Boolean,
    showDialogYjzb: Boolean,
    showDialogEjzb: Boolean,
    showDialogCpqt: Boolean,
    showDialoggbxxbzxx: Boolean,
    showDialogYhmm : Boolean,
    /**
     * isBZXX : 
     * useTitle : 
     */
    isBZXX: Boolean,
    useTitle: String
  },
  components: {
    useDialog,
    bmxxDialog,
    yjzbDialog,
    ejzbDialog,
    cpqtDialog,
    gbxxbzxxDialog,
    yhmmDialog
  },
  data () {
    return {
      /**组件数据
      * showDialog ： 用于直接控制所有的dialog
      * form ： 给弹出的dialog传数据
      * searchinfo ：搜索框内的条件
      */
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
  },
  // 计算结果传给table的高度
  computed: {
    useTableHeight () {
      return (window.innerHeight * 3 / 5)
    }
  },
  watch: {
    tableData: {
      handler (newVal, oldVal) {
        this.tableDataUse = newVal;  //newVal即是chartData
        this.loading = false
        // for (let i in this.headerUse) {//顺便把表格对应的字段映射起来
        //   this.json_fields[this.headerUse[i].label] = this.headerUse[i].key}
        // console.log(this.json_fields)
      },
      immediate: true
    }
  },
  methods: {
    // 新增
    addUse () {
      // 打开dialog的总开关
      this.showDialog = true
      // 清空dialog的数据
      this.form = {}
    },
    // 批量删除
    groupDelete () {
    },
    // 编辑
    editUse (value) {
      // 打开dialog的总开关
      this.showDialog = true
      // dialog数据赋值
      this.form = value
      // 把此次修改的值交给后端处理，写后端删除接口，可以设置一个值传入到dialog里面来判断是删除还是修改

    },
    // 删除
    deleteUse (value) {
      // this.showDialog = true
      this.form = value//把此次修改的值交给后端处理
      console.log(value.dwxxdm)
    },
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