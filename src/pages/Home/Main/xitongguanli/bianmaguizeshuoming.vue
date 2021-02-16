<template>

  <div>
    <el-container>
      <el-header>
        <!-- 编码规则说明 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 这是main -->
        <el-row>
          <el-col :span="5">
            &nbsp;
          </el-col>
          <el-col :span="14">
            <el-card style="margin:1%;height:70vh;margin-left:2svw;width:50vw"
                     ref="elcards">
              <div slot="header"
                   style="text-align:center">
                <span>编码规则</span>&nbsp;&nbsp;&nbsp;
                <el-button size="mini"
                           type="primary">保存</el-button>

              </div>
              <fwbUse style="width:40vw"
                      :useHtml='useText'
                      v-if="true" />
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      useText: `<p>
	身份类型编码为1位码<br />
	对象分组编码为3位码<br />
	&nbsp;</p>`

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
</style>