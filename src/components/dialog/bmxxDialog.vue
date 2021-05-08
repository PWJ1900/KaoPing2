<template>
  <el-row>
    <el-dialog title="提示"
               width="70%"
               :center="true"
               :visible.sync="dialogVisible"
               :before-close="handleClose">
      <!--  判断undefined就不显示    v-if="form!=undefined"
       :fullscreen="true"-->

      <table cellspacing="0">
        <tbody>
          <tr>
            <td>部门代码：</td>
            <td>
              <!-- 这里的form后期得把其字典的key改掉 -->
              <el-input type="text"
                        v-model="formUse.bmdm"></el-input>
            </td>
            <td>部门名称：</td>
            <td>
              <el-input type="text"
                        v-model="formUse.bmmc"></el-input>
            </td>
          </tr>
          <tr>
            <td>单位代码：</td>
            <td>
              <el-input type="text"
                        v-model="formUse.dwdm"></el-input>
            </td>
            <td>单位名称：</td>
            <td>
              <el-select v-model="formUse.dwmc"
                         placeholder="请选择单位"
                         id="el-selectUse">
                <el-option v-for="(item,index) in dwList"
                           :key="item.value"
                           :label="item.label"
                           :value="index">
                </el-option>
              </el-select>
            </td>
          </tr>
        </tbody>
      </table>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel"
                   size="small">取 消</el-button>

        <el-button type="primary"
                   @click="confirmit"
                   size="small">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>

</template>

<script>
import { tablePostUpdate } from '@/api/tablePostUpdate'
export default {
  beforeCreate () {
    this.$axios.post("get_dw").then(
      (res) => {
        this.dwList = res.data
      }
    )
  },
  props: {
    headerUse: Array,
    form: Object,
    getEditOrAdd: {
      type: String,
      default: "o"
    }
  },
  computed: {
  },
  watch: {
    form: {//子组建向其第一次传值的判断
      handler (newName, oldName) {
        let copy = JSON.parse(JSON.stringify(newName))//深复制避免获取同一个地址直接绑定到表上
        this.formUse = copy
        // ...
      },
      immediate: true
    },
    getEditOrAdd: {//子组建向其第一次传值的判断
      handler (newName, oldName) {
        // let copy = JSON.parse(JSON.stringify(newName))//深复制避免获取同一个地址直接绑定到表上
        this.useEditOrAdd = newName
        // ...
      },
      immediate: true
    }
  },
  data () {
    return {
      dialogVisible: true,
      formUse: {},
      dwList: [],
    };
  },
  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("funcBmxx", this.dialogVisible)
    },
    async confirmit () {
      this.dialogVisible = false
      // await tablePostUpdate(this, "edit_bmxx", this.formUse)//异步等待此结果完成在进行下一步获取
      await tablePostUpdate(this, this.useEditOrAdd, this.formUse)//异步等待此结果完成在进行下一步获取
      this.$emit("funcBmxx", this.dialogVisible)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcBmxx", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>