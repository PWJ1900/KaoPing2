<template>
    <div>
        <el-dialog
            title="提示"
            :modal='false'
            width="70%"
            v-if="form!=undefined"
            :close-on-click-modal='false'
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            :fullscreen="true"
            :center="true">
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props : {
        headerUse: Array,
        form: Object
    },
    data() {
      return {
        dialogVisible: true
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
      this.$emit("funcYhmm", this.dialogVisible)


    },
    confirmit () {
        this.dialogVisible = false
        tablePostUpdate(this, "xgbmxx", this.formUse)
        location.reload();
        this.$emit("funcYhmm", this.dialogVisible)
        //这里面写后端的edit，delete，create接口
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
          this.$emit("funcYhmm", this.dialogVisible)
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>