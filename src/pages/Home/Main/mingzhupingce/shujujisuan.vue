<template>

  <div>
    <el-card>
      <!-- 数据计算区域 -->
        <el-row :gutter="20">
        <el-col :span="15">
          测评序号:
              <el-select v-model="value" clearable placeholder="请选择" @change="changeShow">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">
          <el-checkbox v-model="checked1">去除全优  按（<el-input v-model="qcqy" style="width:5vw" size="small"></el-input>）%去除全优</el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
           <el-checkbox v-model="checked2">去除全差</el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
           总数：{{total}}
        </el-col>
      </el-row>
    </el-card>
      <el-card>
         <!-- 表格显示1 -->
          <el-table :data="sjjsData" stripe border v-show="showTable1">
          <el-table-column prop="bcsflx" label="被测身份类型" ></el-table-column>
          <el-table-column prop="a" label="a" ></el-table-column>
          <el-table-column label="修改" >
              <!-- 修改 -->
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible = true"></el-button>
          </el-table-column>
          </el-table>

          <!-- 表格显示2 -->
          <el-table :data="sjjsData2" stripe border v-show="showTable2">
          <el-table-column prop="bcsflx" label="被测身份类型" ></el-table-column>
          <el-table-column prop="a" label="a" ></el-table-column>
          <el-table-column prop="b" label="b" ></el-table-column>
          <el-table-column prop="c" label="c" ></el-table-column>
          <el-table-column prop="d" label="d" ></el-table-column>
          <el-table-column prop="d" label="d" ></el-table-column>

          <el-table-column label="修改" >
              <!-- 修改 -->
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible2 = true"></el-button>
          </el-table-column>

        </el-table>
          <p>(注：以上表格中若出现“空值”，说明该考评对象没有相应的参评群体，请检查“参评群体”与“考评指标”两个设置。） </p>
           <el-button type="primary" @click="open1">按指定权值计算 </el-button>
        <el-button type="primary" @click="open2">重新获取计算参数</el-button>

    </el-card>

    <!-- 修改表单 一 信息对话框 -->
    <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="50%">
      <el-form :model="editForm" label-width="100px"  >
      <el-form-item label="被测身份类型">
        <el-input v-model="editForm.bcsflx"></el-input>
      </el-form-item>
      <el-form-item label="a">
        <el-input v-model="editForm.a"></el-input>
      </el-form-item>
      </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<!-- 修改表单 二 信息对话框 -->
  <el-dialog title="编辑信息" :visible.sync="dialogVisible2" width="50%">
      <el-form :model="editForm2" label-width="100px"  >
      <el-form-item label="被测身份类型">
        <el-input v-model="editForm.bcsflx"></el-input>
      </el-form-item>
      <el-form-item label="a">
        <el-input v-model="editForm.a"></el-input>
      </el-form-item>
      <el-form-item label="b">
        <el-input v-model="editForm.b"></el-input>
      </el-form-item>
      <el-form-item label="c">
        <el-input v-model="editForm.c"></el-input>
      </el-form-item>
      <el-form-item label="d">
        <el-input v-model="editForm.d"></el-input>
      </el-form-item>
      <el-form-item label="e">
        <el-input v-model="editForm.e"></el-input>
      </el-form-item>
      </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return{
      options: [{
          value: '选项1',
          label: '2020考评（2020001）'
        }, {
          value: '选项2',
          label: '20201118测试（20201118）'
      }],
      value: '',
      checked1: '',
      qcqy: '',
      checked2: '',
      total:'',
      // 表一数据
      sjjsData:[
        {
          bcsflx: '6',
          a: '30'
        }
      ],
      // 表二数据
       sjjsData2:[
        {
          bcsflx: '6',
          a: '30',
          b: '10',
          c: '10',
          d: '10',
          e: '10'
        },
        {
          bcsflx: '6',
          a: '30',
          b: '12',
          c: '10',
          d: '10',
          e: '10'
        }
      ],
      // 编辑对话框表一显示
      dialogVisible: false,
      // 编辑对话框表二显示
      dialogVisible2: false,
      // 编辑对话框表一
      editForm: {
        bcsflx: '',
        a: ''
      },
      // 编辑对话框表二
      editForm2: {
        bcsflx: '',
        a: '',
        b: '',
        c: '',
        d: '',
        e: ''
      },
      // 表一显示
      showTable1: false,
      // 表二显示
      showTable2: false
    }
    
  },
  methods: {
    open1() {
      this.$confirm('你确定要计算吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
    },

    open2() {
      this.$confirm('你确定要重新获取计算参数吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
    },
    // 修改表单信息
    changeShow(value) {
      if(value == this.options[0].value) {
        this.showTable1 = true
        this.showTable2 = false
        this.total = this.sjjsData.length
      }
      if(value == this.options[1].value){
        this.showTable1 = false
        this.showTable2 = true
        this.total = this.sjjsData2.length
      }
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
.el-card{
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
    font-size: 15px;
    margin: 1%;
}
.el-table{
    margin-top: 15px;
}
.el-row{
  margin-top: 15px;
}
</style>