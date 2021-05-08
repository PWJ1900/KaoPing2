//连接后端需要所做更改1、参评群体的表是统计作用，连接后端后把其总结值带入，dialog中的表格也会随之更改
<template>
  <el-row>
    <el-dialog title="提示"
               :modal='false'
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :center="true"
               style="margin-top:6%;width:100%;margin-left:5%">
      <!--  判断undefined就不显示    v-if="form!=undefined"-->

      <table cellspacing="0">
        <tbody>
          <tr>
            <td></td>
            <td>参评群体名称定义:</td>
            <td>
              <el-input type="text"
                        v-model="form.name"></el-input>
            </td>
            <td></td>
          </tr>
          <tr>
            <td :rowspan="form.cpfv_num+1">群体内容定义:</td>
            <td>群体个数设置:</td>
            <td>
              <el-select v-model="form.cpfv_num"
                         placeholder="请选择个数"
                         id="el-selectUse">
                <el-option v-for="(item,index) in 11"
                           :key="index"
                           :label="index"
                           :value="index">
                </el-option>
              </el-select>
            </td>
            <td>权重</td>
          </tr>
          <tr v-show="form.cpfv_num>=1">
            <td>群体1:</td>
            <td>
              <el-input type="text"
                        v-model="form.a"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.a_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=2">
            <td>群体2:</td>
            <td>
              <el-input type="text"
                        v-model="form.b"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.b_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=3">
            <td>群体3:</td>
            <td>
              <el-input type="text"
                        v-model="form.c"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.c_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=4">
            <td>群体4:</td>
            <td>
              <el-input type="text"
                        v-model="form.d"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.d_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=5">
            <td>群体5:</td>
            <td>
              <el-input type="text"
                        v-model="form.e"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.e_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=6">
            <td>群体6:</td>
            <td>
              <el-input type="text"
                        v-model="form.f"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.f_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=7">
            <td>群体7:</td>
            <td>
              <el-input type="text"
                        v-model="form.g"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.g_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=8">
            <td>群体8:</td>
            <td>
              <el-input type="text"
                        v-model="form.h"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.h_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=9">
            <td>群体9:</td>
            <td>
              <el-input type="text"
                        v-model="form.i"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.i_qz"></el-input>
            </td>
          </tr>
          <tr v-show="form.cpfv_num>=10">
            <td>群体10:</td>
            <td>
              <el-input type="text"
                        v-model="form.j"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="form.j_qz"></el-input>
            </td>
          </tr>
          <!-- <tr>
            <td colspan="4"
                id="buttonUse">
              <el-button size="small"
                         type="warning">复制</el-button>
              <el-button size="small"
                         type="success">保存</el-button>
              <el-button size="small">返回</el-button>
            </td>
          </tr> -->
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
     getEditOrAdd:'',
    form: Object,
    // showDialog: Boolean,
  },
  data () {
    return {
      dialogVisible: true,
     
      value1: '',//此处要对应传入后端的值
      options: [{
        value: '选项1',
        label: '请选择单位'
      }, {
        value: '选项2',
        label: '测试单位'
      }],
      valueUseGroup: [],
      valueUseQ: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcCpqt", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      tablePostUpdate(this, this.getEditOrAdd, this.form)
      this.$emit("funcCpqt", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcCpqt", this.dialogVisible)
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
