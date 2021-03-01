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
                        v-model="value1"></el-input>
            </td>
            <td></td>
          </tr>
          <tr>
            <td :rowspan="value1+1">群体内容定义:</td>
            <td>群体个数设置:</td>
            <td>
              <el-select v-model="value1"
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
          <tr v-for="i in this.value1"
              :key="i">
            <td>群体{{i}}:</td>
            <td>
              <el-input type="text"
                        v-model="valueUseGroup[i]"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="valueUseQ[i]"></el-input>
            </td>

          </tr>
          <tr>
            <td colspan="4"
                id="buttonUse">
              <el-button size="small"
                         type="warning">复制</el-button>
              <el-button size="small"
                         type="success">保存</el-button>
              <el-button size="small">返回</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <span slot="footer"
            class="dialog-footer" style="background-color:white">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirmit">确 定</el-button>
      </span> -->
    </el-dialog>
  </el-row>

</template>

<script>
export default {
  props: {
    headerUse: Array,
    form: Object,
    // showDialog: Boolean,


  },
  // created () {
  //   console.log(this.form)
  // },
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
