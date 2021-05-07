<template>
  <el-row>
    <!-- 顶部设计 -->
    <el-card style="margin:1%">
      <!-- 顶部设计 -->
      <el-row>
        <!-- 新增、批量删除，由showAddorDelete控制 -->
        <el-col :span="5"
                v-show="showAddorDelete">
          <el-button @click="addUse"
                     type="success"
                     size="small">新增</el-button>
          <el-button type="danger"
                     @click="groupDelete"
                     size="small">批量删除</el-button>
        </el-col>
        <!-- 第一种查询，通过搜索框筛选 -->
        <el-col :span="10"
                v-show="showSearch">
          <span style="font-size:13px">请输入查询条件：</span>
          <el-input style="width:20vw"
                    id="inputheight"
                    v-model="searchinfo">
            <el-button @click="searchinfoUse(searchinfo)"
                       slot="append"
                       icon="el-icon-search"
                       style="width:5vw;padding:0;font-size:12px;  background: #23C6C8;"
                       size="small">
              <span style="color:white">查询</span>
            </el-button>
          </el-input>

        </el-col>
        <!-- 第二种查询：打开dialog -->
        <el-col :span="2"
                v-show="useSearch">
          <el-button size="small"
                     @click="dialogVisibleZhcx=true"
                     style="width:5vw;padding:0;font-size:12px;  background: #23C6C8;color:white;  width: 96px;
  height: 4vh;">组合查询</el-button>
        </el-col>
        <!-- 导入excel，由showdaoru控制 -->
        <el-col :span="2"
                v-show="showdaoru">
          <el-button type="info"
                     @click="dialogVisibledr=true"
                     size="small">导入EXCEL</el-button>
        </el-col>
        <!-- 导出excel，由showdaochu控制 -->
        <el-col :span="3"
                v-show="showdaochu">
          <download-excel :data="this.tableDataUse.
          slice((currentPage-1)*pagesize,currentPage*pagesize)"
                          style="margin:0"
                          :fields="json_fields"
                          name="导出的表格名称.xls">

            <!--      header="这是个excel的头部"  这里还有个动态绑定的问题没解决-->
            <el-button type="primary"
                       size="small">导出EXCEL</el-button>
          </download-excel>
        </el-col>
      </el-row>
    </el-card>

    <!--导入excel的dialog -->
    <el-dialog title="导入操作"
               id="daoruUSeId"
               :visible.sync="syncUse"
               v-show="dialogVisibledr"
               :modal="useModal"
               width="30%"
               :modal-append-to-body="true"
               :close-on-click-modal='false'
               ref="uploadDialog"
               :before-close="handleClosedr">
      <span>
        <input type="file"
               ref="upload"
               accept=".xls, .xlsx"
               class="outputlist_upload" />
      </span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisibledr = false">取 消</el-button>
        <el-button type="primary"
                   @click="usedr">确 定</el-button>
      </span>
    </el-dialog>
    <!--组合查询的dialog -->
    <el-dialog title="组合查询"
               :visible.sync="dialogVisibleZhcx"
               width="auto"
               :before-close="handleClose">
      <span>
        <div style="text-align:center">
          <el-button size="small"
                     @click="isSearchSure">确定</el-button>
          <el-button size="small">全部</el-button>
          <el-button size="small">取消</el-button>
        </div><br>
        <table cellspacing="0">
          <tbody v-for="j in i"
                 :key="j">
            <tr>
              <td>
                <el-select v-model="value1[j]"
                           placeholder="请选择属性"
                           id="el-selectUse">
                  <el-option v-for="(item,index) in headerUse"
                             :key="index"
                             :label="item.label"
                             :value="item.key">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-select v-model="value2[j]"
                           placeholder="关联方式"
                           id="el-selectUse">
                  <el-option v-for="(item,index) in options2"
                             :key="index"
                             :label="item"
                             :value="item">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-input type="text"
                          v-model="valueInput[j]"></el-input>
              </td>
              <td>
                <el-select v-model="value3[j]"
                           placeholder="组合方式"
                           id="el-selectUse">
                  <el-option v-for="(item,index) in options3"
                             :key="index"
                             :label="item"
                             :value="item">
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-button @click="deleteSearch">删除</el-button>
              </td>
              <td>
                <el-button @click="addSearch">新增</el-button>
              </td>
            </tr>

          </tbody>
        </table>
      </span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisibleZhcx = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisibleZhcx = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--通用的dialog -->
    <useDialog v-if="this.showDialogNormal&&this.showDialog"
               :headerUse="headerUse"
               :getEditOrAdd="useDefineEdit"
               :form="form"
               @func="getifshow" />

    <!-- 单位信息的dialog -->
    <dwxxDialog v-if="this.showDialogDwxx&&this.showDialog"
                :headerUse="headerUse"
                :getEditOrAdd="useDefineEdit"
                :form="form"
                @func="getifshow" />
    <!--基础信息-部门信息的dialog -->
    <bmxxDialog v-if="this.showDialogBmxx&&this.showDialog"
                :headerUse="headerUse"
                :getEditOrAdd="useDefineEdit"
                :form="form"
                @funcBmxx="getifshow" />
    <!--基础信息-一级指标的dialog-->
    <yjzbDialog v-if="this.showDialogYjzb&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcYjzb="getifshow" />
    <!--基础信息-二级指标的dialog -->
    <ejzbDialog v-if="this.showDialogEjzb&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcEjzb="getifshow" />
    <!--基础信息-参评群体的dialog -->
    <cpqtDialog v-if="this.showDialogCpqt&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcCpqt="getifshow" />
    <!--基础信息-班子信息和干部信息的复用dialog -->
    <gbxxbzxxDialog v-if="this.showDialoggbxxbzxx&&this.showDialog"
                    :headerUse="headerUse"
                    :form="form"
                    :isBZXX="isBZXX"
                    :useTitle="useTitle"
                    @funcgbxxbzxx="getifshow" />
    <!--民主评测-用户密码的dialog-->
    <!-- <yhmmDialog v-if="this.showDialogYhmm&&this.showDialog"
                @funcYhmm="getifshow" /> -->
    <!--民主评测-测评序号的dialog -->
    <cpxhDialog v-if="this.showDialogCpxh&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcCpxh="getifshow" />
    <!--民主评测-指标体系的dialog -->
    <zbtxDialog v-if="this.showDialogZbtx&&this.showDialog"
                :headerUse="headerUse"
                :form="form"
                @funcZbtx="getifshow" />

    <!--中部设计：表格-->
    <div style="height:68vh">
      <el-card style="margin:1%;">
        <!-- <el-scrollbar> -->
        <el-table :data="this.tableDataUse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border
                  ref="useTable"
                  style="font-size: 12px"
                  :max-height="useTableHeight"
                  :row-style="{height: '0'}"
                  :cell-style="{padding: '1px'}"
                  :row-class-name="rowClassName"
                  v-loading="loading"
                  @selection-change="selectionLineChangeHandle"
                  stripe>
          <el-table-column type="selection"
                           v-if="showCheckbox">
          </el-table-column>
          <el-table-column label="序号"
                           align="center"
                           prop="xh"
                           width="50"></el-table-column>
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
          <el-table-column label="操作框"
                           fixed="right"
                           width="300">
            <template slot-scope="scope">
              <el-button type="info"
                         icon="el-icon-edit"
                         size="small"
                         @click="editUse(scope.row)">编辑</el-button>
              <!-- <el-popconfirm :title="scope.row"
                             @confirm="deleteUse(scope.row)">
                <el-button type="danger"
                           slot="reference"
                           size="small"
                           icon="el-icon-delete">删除</el-button>
              </el-popconfirm> -->
              <el-button type="danger"
                         @click="open(scope.row,1)"
                         size="small"
                         icon="el-icon-delete">删除</el-button>

            </template>
          </el-table-column>
        </el-table>
        <!-- </el-scrollbar> -->
      </el-card>
    </div>

    <!--底部设计：页数组件  -->
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 50, 200]"
                     :page-size="5"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData.length">
      </el-pagination>
    </div>
  </el-row>
</template>
<script>
import useDialog from '@/components/dialog/dialogUse'
import dwxxDialog from '@/components/dialog/DwxxDialog'
import bmxxDialog from '@/components/dialog/bmxxDialog'
import yjzbDialog from '@/components/dialog/yjzbDialog'
import ejzbDialog from '@/components/dialog/ejzbDialog'
import cpqtDialog from '@/components/dialog/cpqtDialog'
import gbxxbzxxDialog from '@/components/dialog/gbxxbzxxDialog'

import yhmmDialog from '@/components/dialog/yhmmDialog'
import cpxhDialog from '@/components/dialog/cpxhDialog'
import zbtxDialog from '@/components/dialog/zbtxDialog'

import XLSX from 'xlsx'//对excel导入操作

export default {
  props: {
    headerUse: Array,//此处为传入label的参数
    tableData: Array,//此处为传入的表单数据
    //所有的dialog控制开关交给showDialog
    showDialogNormal: Boolean,//激活普通的dialog
    showDialogDwxx: Boolean,//激活单位信息的dialog
    showDialogBmxx: Boolean,//激活部门信息的dialog
    showDialogYjzb: Boolean,//激活一级指标的dialog
    showDialogEjzb: Boolean,//激活二级指标dialog
    showDialogCpqt: Boolean,//激活参评群体的dialog
    showDialoggbxxbzxx: Boolean,

    //showDialogYhmm: Boolean,//激活用户密码的dialog
    showDialogCpxh: Boolean,//激活测评序号的dialog
    showDialogZbtx: Boolean,//激活指标体系的dialog

    isBZXX: Boolean,//区分班子信息、干部信息区别
    useTitle: String,//区分班子信息、干部信息区别
    getName: String,//进入的页面名
    showAddorDelete: {//新增、批量删除
      type: Boolean,
      default: false//default也可以写成函数形式default: () => {return []}
    },
    showSearch: {//查询框
      type: Boolean,
      default: false
    },
    showdaoru: {//导入excel
      type: Boolean,
      default: false
    },
    showdaochu: {//导出excel
      type: Boolean,
      default: false
    },
    showCheckbox: {//表格第一列的复选框
      type: Boolean,
      default: true
    },
    useSearch: {//具体查询dialog
      type: Boolean,
      default: false

    }
    //dialogVisibleZhcx: {
    //   type: Boolean,
    //   default: true
    // }
  },
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
        for (let i in this.headerUse) {//顺便把表格对应的字段映射起来
          this.json_fields[this.headerUse[i].label] = this.headerUse[i].key
        }
        // console.log(this.json_fields)
      },
      immediate: true
    },
    getName: {
      handler (newVal, oldVal) {
        this.Nameuse = newVal
      },
      immediate: true
    },

  },
  mounted () {
    this.$nextTick(() => {
      // console.log(this.$refs)
      this.$refs.upload.addEventListener("change", e => {
        this.readExcel(e)
      })
    });

    // let el = this.$refs.uploadDialog//
    // // console.log(el)
    // if (el) {
    //   el.$refs.upload.addEventListener("change", e => {
    //     //绑定监听表格导入事件
    //     this.readExcel(e);
    //   });
    // }

  },
  methods: {
    // changeTri(){
    // },
    rowClassName ({ row, rowIndex }) {
      row.xh = rowIndex + 1;
    },
    ifshow (data) {
      // console.log(data)
      if (data == '单位代码') {//此处添加要隐藏的列
        return false
      } else {
        return true
      }
    },
    groupDelete () {
      console.log(this.groupDeleteData)
      if (this.groupDeleteData.length === 0) {
        alert("请您选择需要批量删除的数据，目前选择为空！")
      }
      else {
        // for (let i in this.groupDeleteData) {
        //   this.open(this.groupDeleteData[i])//把删除的数组全部遍历进去
        // }
        this.open(this.groupDeleteData, 2)//代表list
      }

    },
    selectionLineChangeHandle (val) {
      console.log(val)//把此值交给后groupDelete处理然后交给后端分配处理，交给后端接口，与groupDelete方法连接
      this.groupDeleteData = val

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
      this.useDefineEdit = "add_" + this.Nameuse//改的编辑和增加
      this.form = {}

    },
    editUse (value) {
      this.showDialog = true
      this.form = value
      this.useDefineEdit = "edit_" + this.Nameuse


      //把此次修改的值交给后端处理，写后端删除接口，可以设置一个值传入到dialog里面来判断是删除还是修改

    },
    deleteUse (value) {
      // this.showDialog = true
      this.form = value//把此次修改的值交给后端处理
      console.log(value)

    },
    getifshow (data) {
      this.showDialog = data//得到子组建的传值来点击关闭
      this.$emit("d")

    },
    handleClosedr (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
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
    readExcel (e) {
      //表格导入
      let that = this
      let transSum = []
      let transRow = {}
      let num = 0

      const files = e.target.files;
      console.log(files);
      if (files.length <= 0) {
        //如果没有文件名
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }

      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary"
          });
          const wsname = workbook.SheetNames[0]; //取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
          console.log(ws, 111111111)
          for (let i in ws) {//这两个循环是为了把导入的表格键值对对应起来
            for (let j in ws[i]) {
              transRow[this.headerUse[num].key] = ws[i][j]
              num = num + 1
            }
            console.log(transRow)
            num = 0
            transSum.push(transRow)
            transRow = new Object()
          }
          console.log(transSum)
          this.tableDataUse = transSum

          // that.outputs = []; //清空接收数据
          //编辑数据
          // for (let i = 0; i < ws.length; i++) {
          //   let sheetData = {
          //     address: ws[i].addr,
          //     value: ws[i].value

          //   };
          //   console.log(sheetData)
          //   that.outputs.push(sheetData);

          // }
          // this.$refs.upload.value = "";//此处是给upload清空
        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },

    usedr () {
      this.dialogVisibledr = false//这里面接下来写获取到的ws来确定判断表格传入值
    },
    addSearch () {//增加搜索框
      this.i = this.i + 1
    },
    deleteSearch () {
      if (this.i > 1)
        this.i = this.i - 1
    },
    handleClose () {
      this.dialogVisibleZhcx = false
    },
    merge (bigArray) {
      let array = [];
      const middeleArray = bigArray.reduce((a, b) => {
        return a.concat(b);
      });

      middeleArray.forEach((arrItem) => {
        if (array.indexOf(arrItem) == -1) {
          array.push(arrItem);
        }
      });

      return array;
    },

    isSearchSure () {

      for (let t = 1; t < this.value1.length; t++) {
        if (t == 1) {
          if (this.value2[t] == "等于") {
            this.tableDataUse = this.tableData.filter((data) => data[this.value1[t]] + "" == this.valueInput[t])
          }
          else if (this.value2[t] == "不等于") {
            this.tableDataUse = this.tableData.filter((data) => data[this.value1[t]] + "" != this.valueInput[t])

          }
          else if (this.value2[t] == "相似于") {
            this.tableDataUse = this.tableData.filter((data) => (data[this.value1[t]] + "").includes(this.valueInput[t]))

          }
          else if (this.value2[t] == "不相似于") {
            this.tableDataUse = this.tableData.filter((data) => !(data[this.value1[t]] + "").includes(this.valueInput[t]))


          }

        }
        if (t > 1) {
          if (this.value3[t - 1] == "并且") {
            // this.tableDataUse = this.tableDataUse.filter((data) =>
            if (this.value2[t] == "等于") {
              this.tableDataUse = this.tableDataUse.filter((data) => data[this.value1[t]] + "" == this.valueInput[t])
            }
            else if (this.value2[t] == "不等于") {
              this.tableDataUse = this.tableDataUse.filter((data) => data[this.value1[t]] + "" != this.valueInput[t])

            }
            else if (this.value2[t] == "相似于") {
              this.tableDataUse = this.tableDataUse.filter((data) => (data[this.value1[t]] + "").includes(this.valueInput[t]))

            }
            else if (this.value2[t] == "不相似于") {
              this.tableDataUse = this.tableDataUse.filter((data) => !(data[this.value1[t]] + "").includes(this.valueInput[t]))


            }
          }
          if (this.value3[t - 1] == '或者') {
            if (this.value2[t] == "等于") {
              this.tableDataUse = this.merge([this.tableDataUse, (this.tableData.filter((data) => data[this.value1[t]] + "" == this.valueInput[t]))])

            }
            else if (this.value2[t] == "不等于") {
              this.tableDataUse = this.merge([this.tableDataUse, (this.tableData.filter((data) => data[this.value1[t]] + "" != this.valueInput[t]))])

            }
            else if (this.value2[t] == "相似于") {
              this.tableDataUse = this.merge([this.tableDataUse, (this.tableData.filter((data) => (data[this.value1[t]] + "").includes(this.valueInput[t])))])

            }
            else if (this.value2[t] == "不相似于") {
              this.tableDataUse = this.merge([this.tableDataUse, (this.tableData.filter((data) => !(data[this.value1[t]] + "").includes(this.valueInput[t])))])


            }

          }
        }

      }
    },
    open (data, numU) {//使用的删除弹出
      console.log(data)
      let useTranslate = {}
      let sumString = ''
      let trUse = []
      const h = this.$createElement
      trUse.push(h('tr', null, [h('td', null, "您确定要删除吗？已选择数据如下：")]))//表格嵌套着来做,第三个参数指的是要用[]型来当子节点
      if (numU === 1) {
        for (let i in this.headerUse) {
          useTranslate[this.headerUse[i].label] = data[this.headerUse[i].key]
        }
        for (let i in useTranslate) {
          sumString = i + ":" + useTranslate[i]//用字符串拼接使其label与字段对应，这边获取为{}数据
          trUse.push(h('tr', null, [h('td', null, sumString)]))
        }
      }
      if (numU === 2) {
        for (let j in data) {
          for (let i in this.headerUse) {
            useTranslate[this.headerUse[i].label] = data[j][this.headerUse[i].key]//这边获取为list数据
          }
          for (let i in useTranslate) {
            sumString = i + ":" + useTranslate[i]//用字符串拼接使其label与字段对应
            trUse.push(h('tr', null, [h('td', null, sumString)]))
          }
        }

      }
      // console.log(useTranslate)
      this.$confirm('提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        message: h('div', null, trUse),//重写message

      }).then(() => {
        this.$emit("delete", data)
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // });
      });
    },

  },
  components: {
    useDialog,
    bmxxDialog,
    yjzbDialog,
    ejzbDialog,
    cpqtDialog,
    gbxxbzxxDialog,
    yhmmDialog,
    cpxhDialog,
    zbtxDialog,
    dwxxDialog,
  },
  data () {
    return {
      useDefineEdit: '',
      showDialog: false,
      form: Object,
      Nameuse: '',

      // 组合查询
      i: 1,
      dialogVisibleZhcx: false,
      value1: [],
      value2: [],
      value3: [],
      valueInput: [],


      currentPage: 1,
      pagesize: 5,
      tableChange: [],
      tableUse: [],
      searchinfo: '',
      restoretableData: [],
      tableDataUse: [],
      noshow: true,
      loading: true,
      dialogVisibledr: false,//导入的dialog
      syncUse: true,
      useModal: false,


      options2: ['等于', '不等于', '相似于', '不相似于'],
      options3: ['并且', '或者'],
      groupDeleteData: [],
      json_meta: [//定义导出表格
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ],
      json_fields: {

      },

    }
  }
}
</script>

<style scoped>
.block {
  text-align: center;
}
#inputheight {
  height: 4vh;
}
#daoruUSeId {
  margin-left: 35%;
}
</style>
