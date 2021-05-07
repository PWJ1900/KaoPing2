
<template>
  <el-row>
    <el-dialog title="提示"
               width="70%"
               :destroy-on-close='true'
               :modal='true'
               v-if="form!=undefined"
               :visible.sync="dialogVisible"
               :before-close="handleClose"
               :modal-append-to-body='false'
               :center="true">
      <!--  判断undefined就不显示    v-if="form!=undefined"
       :fullscreen="true"-->

      <el-form ref="form"
               :model="formUse"
               label-width="100px">
        <el-form-item v-for="item in headerUse"
                      :label="item.label+':'"
                      :key="item.key">
          <el-input v-model="formUse[item.key]"
                    style=""></el-input>
        </el-form-item>

      </el-form>
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
  props: {
    headerUse: Array,
    form: Object,
    // showDialog: Boolean,


  },
  data () {
    return {
      dialogVisible: true,
      formUse: {}
    };
  },
  watch: {
    form: {//子组建向其第一次传值的判断
      handler (newName, oldName) {
        let copy = JSON.parse(JSON.stringify(newName))//深复制避免获取同一个地址直接绑定到表上
        this.formUse = copy
        // ...
      },
      immediate: true




    }



  },

  methods: {
    cancel () {
      this.dialogVisible = false
      this.$emit("func", this.dialogVisible)//设置返回值，然关闭后状态停止无法再次打开


    },
    confirmit () {
      tablePostUpdate(this, "add_dwxx", this.formUse)
      this.dialogVisible = false
      this.$emit("func", this.dialogVisible)
      //这里面写后端的edit，delete，create接口

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("func", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>