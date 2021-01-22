<template>
  <div class="container">
    <div class="logo-header"></div>
    <div class="logo-box"></div>
    <div class="login-box">
      <div class="login-text">
        登 录
        <br />
        <span>欢迎使用考评管理系统</span>
      </div>
      <el-form :model="loginForm"
               ref="loginFormRef"
               :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    prefix-icon="el-icon-s-custom"
                    placeholder="请输入用户名"
                    @input="change($event)"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    prefix-icon="el-icon-unlock"
                    placeholder="请输入密码"
                    @input="change($event)"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item prop="yzm">
          <td>
            <el-input v-model="yzm"
                      prefix-icon="el-icon-unlock"
                      placeholder="输入验证码"
                      @input="change($event)"
                      type="yzm"
                      style="width: 140px; margin: 0"></el-input>
          </td>
          <td>
            <vue-img-verify id="useYzm"
                            @getImgCode="getImgCode"
                            ref="vueImgVerify" />
          </td>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary"
                     @click="handleLoginForm">登录</el-button>
          <el-button type="primary"
                     @click="loginFormReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import vueImgVerify from "@/components/yzm/vue-img-verify";
export default {
  data () {
    return {
      // 登录表单数据对象
      yzm: "",
      loginForm: {
        username: "",
        password: "",
      },
      imgCode: "",
      // 登录表单的校验对象
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted () {
    this.imgCode = this.$refs.vueImgVerify.draw()

  },
  methods: {
    // 多层嵌套无法输入解决方法
    change (e) {
      this.$forceUpdate();
    },

    // 表单重置方法
    loginFormReset () {
      this.$refs.loginFormRef.resetFields();
    },
    // 登录方法
    handleLoginForm () {
      // console.log('123456')
      this.$refs.loginFormRef.validate((valid) => {
        // console.log(valid)
        if (!valid) return;
        console.log("333");
      });
      if (this.loginForm.username === "adminadmin")
        if (this.loginForm.password === "123123")
          if (this.yzm.toLowerCase() === this.imgCode.toLowerCase()) {
            this.$router.push({ name: "home" });
            sessionStorage.setItem("vtf", "1")
          } else {
            alert("验证码输入错误！");
            this.imgCode = this.$refs.vueImgVerify.draw();
            console.log("验证码: " + this.imgCode);
          }
        else {
          alert("密码输入错误！");
          this.imgCode = this.$refs.vueImgVerify.draw();
          console.log("验证码: " + this.imgCode);
        }
      else {
        alert("用户名输入错误！");
        this.imgCode = this.$refs.vueImgVerify.draw();
        console.log("验证码: " + this.imgCode);
      }
    },
    // 点击图片获取验证码
    getImgCode (code) {
      this.imgCode = code;
      console.log("验证码: " + this.imgCode);
    },
  },
  components: {
    vueImgVerify,
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  /* background: url("../assets/loginbg2.jpg");
  background-size: 100% 100%; */
}
.logo-header {
  width: 100%;
  top: 0;
  left: 0;
  height: 20%;
  position: absolute;
  background: url('../assets/loginbg1.jpg');
  background-size: 100% 100%;
}
.logo-box {
  position: absolute;
  width: 60%;
  height: 60%;
  top: 15%;
  left: 20%;
  background: url('../assets/loginbg2.jpg');
  background-size: 100% 100%;
}
.login-box {
  position: absolute;
  top: 55%;
  left: 70%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-text {
  width: 100%;
  font-size: 24px;
  text-align: center;
  color: #2f82fe;
  margin-bottom: 35px;
  box-sizing: border-box;
  padding: 20px;
}
.el-form-item {
  width: 90%;
  margin: 20px auto;
}
.login-text span {
  line-height: 30px;
  font-size: 18px;
  color: #666666;
}
.btns {
  width: 100%;
  text-align: center;
  margin-top: 50px;
}
#useYzm {
  position: absolute;
  margin-left: 28%;
}
</style>