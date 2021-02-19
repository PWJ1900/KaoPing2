<template>
  <el-row>
    <el-dialog title="提示"
               :modal='false'
               v-if="form!=undefined"
               :close-on-click-modal='false'
               :modal-append-to-body="true"
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :center="true">
      <!--  判断undefined就不显示    v-if="form!=undefined"-->

      <table cellspacing="0">
        <tbody>
          <tr>
            <td></td>
            <td>指标名称定义:</td>
            <td colspan="2">
              <el-input type="text"
                        v-model="this.form.b"></el-input>
            </td>
            <td>一级指标选择:</td>
            <td>
              <el-select v-model="value11"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options2"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </td>

          </tr>
          <tr>
            <td :rowspan="this.value1 + 1">指标内容定义:</td>
            <td>指标个数:</td>
            <td>
              <el-select v-model="value1"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="(item,index) in 21"
                           :key="index"
                           :label="index"
                           :value="index">
                </el-option>
              </el-select>
            </td>
            <td>考评要点:</td>
            <td>权重:</td>
            <td>对应一级指标:</td>
          </tr>
          <tr v-for="i in this.value1"
              :key="i">
            <td>指标{{i}}:</td>
            <td>
              <!-- 这里的form.d为暂时代替的，后续需改成后台json对应的字段 -->
              <el-input type="text"
                        v-model="valueUsezb[i]"></el-input>
            </td>
            <td>
              <el-input type="textarea"
                        style="width:12vw"
                        v-model="valueUsekpyd[i]"></el-input>
            </td>
            <td>
              <el-input type="text"
                        v-model="valueUseqz[i]"></el-input>
            </td>
            <td>
              <el-select v-model="value2[i]"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td colspan="6"
                id="buttonUse">
              <el-button>复制</el-button>
              <el-button>修改</el-button>
              <el-button>返回</el-button>

            </td>
          </tr>
        </tbody>
      </table>
      <!-- <span slot="footer"
            class="dialog-footer">
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
      value1: this.form.d,//把部门信息的最后一个属性弄进来
      value2: [],
      valueUsezb: [],
      valueUsekpyd: [],
      valueUseqz: [],
      value3: this.form.d,
      value4: this.form.d,
      value5: this.form.d,
      value6: this.form.d,
      value7: this.form.d,
      value8: this.form.d,
      value9: this.form.d,
      value10: this.form.d,
      value11: this.form.d,
      valueUse: '',

      options: [{
        value: '选项1',
        label: '政治建设'
      }, {
        value: '选项2',
        label: '能力建设'
      }, {
        value: '选项3',
        label: '事业发展'
      }],
      options2: [{
        value: '选项1',
        label: '校领导班子民主测评一级指标'
      }, {
        value: '选项2',
        label: '省管干部民主测评一级指标'
      }, {
        value: '选项3',
        label: '财务主管考核一级指标'
      },
      {
        value: '选项4',
        label: '集团本部中层以下人员绩效考核一级指标'
      },
      {
        value: '选项5',
        label: '集团本部中层绩效考核一级指标'
      },
      {
        value: '选项6',
        label: '企业经营班子考核一级指标'
      }],
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcEjzb", this.dialogVisible)


    },
    confirmit () {
      this.dialogVisible = false
      this.$emit("funcEjzb", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcEjzb", this.dialogVisible)
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