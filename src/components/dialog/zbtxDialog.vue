<template>
    <div>
        <el-dialog
            title="提示"
            v-if="form!=undefined"
            :visible.sync="dialogVisible"
            :fullscreen="true"
            :before-close="handleClose">
            <form>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </form>
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>