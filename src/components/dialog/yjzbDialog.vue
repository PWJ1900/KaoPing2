<template>
  <el-row>
    <el-dialog title="一级指标信息"
               :modal='true'
               width="70%"
               v-if="form!=undefined"
               :modal-append-to-body="false"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :center="true">
      <!--  判断undefined就不显示    v-if="form!=undefined"
       :fullscreen="true"-->
      <table cellspacing="0">
        <tbody>
          <tr>
            <!-- <td></td> -->
            <td>指标名称定义:</td>
            <td>
              <el-input type="text" v-model="form.name"></el-input>
            </td>
          </tr>
          <tr>
            <!-- <td :rowspan="value1+1">指标内容定义:</td> -->
            <td>指标个数设置:</td>
            <td>
              <el-select v-model="form.col_num"
                         placeholder="请选择指标"
                         id="el-selectUse">
                <el-option v-for="(item,index) in 11"
                           :key="index"
                           :label="index"
                           :value="index">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr v-show="form.col_num>=1">
            <td>指标1:</td>
            <td>
              <el-input type="text"  v-model="form.nr1"></el-input>
            </td>
          </tr>
          <tr  v-show="form.col_num>=2">
            <td>指标2:</td>
            <td>
              <el-input type="text"  v-model="form.nr2"></el-input>
            </td>
          </tr>
          <tr  v-show="form.col_num>=3">
            <td>指标3:</td>
            <td>
              <el-input type="text"  v-model="form.nr3"></el-input>
            </td>
          </tr>
          <tr  v-show="form.col_num>=4">
            <td>指标4:</td>
            <td>
              <el-input type="text"  v-model="form.nr4"></el-input>
            </td>
          </tr>
          <tr   v-show="form.col_num>=5">
            <td>指标5:</td>
            <td>
              <el-input type="text"  v-model="form.nr5"></el-input>
            </td>
          </tr>
          <tr   v-show="form.col_num>=6">
            <td>指标6:</td>
            <td>
              <el-input type="text"  v-model="form.nr6"></el-input>
            </td>
          </tr>
          <tr  v-show="form.col_num>=7">
            <td>指标7:</td>
            <td>
              <el-input type="text"  v-model="form.nr7"></el-input>
            </td>
          </tr>
          <tr   v-show="form.col_num>=8">
            <td>指标8:</td>
            <td>
              <el-input type="text"  v-model="form.nr8"></el-input>
            </td>
          </tr>
          <tr  v-show="form.col_num>=9">
            <td>指标9:</td>
            <td>
              <el-input type="text"  v-model="form.nr9"></el-input>
            </td>
          </tr>
          <tr  v-show="form.col_num>=10">
            <td>指标10:</td>
            <td>
              <el-input type="text"  v-model="form.nr10"></el-input>
            </td>
          </tr>
         
        </tbody>
      </table>
      <span slot="footer"
            class="dialog-footer" style="background-color:white">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>

<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'

export default {
  props: {
    headerUse: Array,
    form: {
        
    },
    // showDialog: Boolean,
    getEditOrAdd:''
  },
  data () {
    return {
      dialogVisible: true,
      temp: []  //保存一级指标的 nr1、nr2.....
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcYjzb", this.dialogVisible)
    },
    confirmit () {
      this.dialogVisible = false
      console.log(this.getEditOrAdd)
      tablePostUpdate(this, this.getEditOrAdd, this.form)
      this.$emit("funcYjzb", this.dialogVisible)

      //这里面写后端的edit，delete，create接口
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcYjzb", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>
<style scoped>
table,
table td {
  border: 0.5px solid rgba(124, 141, 141, 0.925);
}
table td {
  padding: 10px 30px;
}
#buttonUse {
  text-align: center;
}
</style>

<style scoped>
@import '../../css/tableuse.css';
</style>
