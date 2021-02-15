<template>

  <div>
    <el-container>
      <el-header>
        <!-- 密码修改 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 这是main -->
        <el-row>
          <el-col :span="6">
            &nbsp;
          </el-col>
          <el-col :span="10">
            <el-card style="margin:1%;width:40vw;height:60vh"
                     ref="elcards"
                     :body-style="{ padding: '4vw' }">
              <div slot="header"
                   style="text-align:center">
                <span>欢迎使用综合考评系统</span>

              </div>
              <table border="0"
                     align="center"
                     cellspacing="3vh">
                <tr>
                  <td align="right">用户名：</td>
                  <td>
                    <el-input id="useInput"></el-input>
                  </td>
                </tr>
                <tr>
                  <td align="right">原密码：</td>
                  <td>
                    <el-input id="useInput1"></el-input>
                  </td>
                </tr>
                <tr>
                  <td align="right">新密码：</td>
                  <td>
                    <el-input id="useInput2"></el-input>
                  </td>
                </tr>
                <tr>
                  <td align="right">再输一次新密码：</td>
                  <td>
                    <el-input id="useInput3"></el-input>
                  </td>
                </tr>
                <tr>
                  <td>

                  </td>
                  <td>
                    <el-button type="small">确定</el-button>
                  </td>
                </tr>

              </table>
            </el-card>
          </el-col>
        </el-row>

      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$refs.elcards)

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
#useInput {
  height: 4vh;
}
#useInput1 {
  height: 4vh;
}
#useInput2 {
  height: 4vh;
}
#useInput3 {
  height: 4vh;
}
</style>