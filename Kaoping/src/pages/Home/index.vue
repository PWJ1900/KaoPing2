<template>
  <el-row>
    <el-container>

      <el-header>
        <h3>管理系统</h3>
        <div id="headerUse">

          <el-menu :default-active="activeIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   router>
            <el-menu-item v-for="(item, index) in headerUseR"
                          :key="index"
                          :index="item">
              <span slot="title">{{index}}</span>
            </el-menu-item>
            <div id="iconUse">
              <i class="el-icon-s-custom"></i>
              <i class="el-icon-refresh"
                 @click="refreshUse"></i>
              <i class="el-icon-delete"
                 @click="exitTo"></i>
            </div>
          </el-menu>

        </div>
      </el-header>
      <!-- 下句是放aside和main布局 -->
      <router-view></router-view>

    </el-container>
  </el-row>

</template>
<style>
h3 {
  position: absolute;
  left: 10%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  background-color: transparent;
}
#headerUse {
  margin-left: 30%;
}
.el-header {
  background: url('../../assets/loginbg1.jpg');
}
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
#useAside {
  color: #231423;
}
#iconUse {
  position: absolute;
  top: 30%;
  left: 90%;
}
i {
  width: 30px;
}
</style>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: false,
      headerUseR: {
        "基础信息": "jichuxinxi",
        "民主评测": "mingzhupingce",
        "民主推荐": "mingzhutuijian",
        "系统管理": "xitongguanli"

      }
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    ReturnTo () {
      this.$router.push({ name: "Login", params: { useId: 1 } })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    refreshUse () {
      this.$router.go(0);
    },
    exitTo () {
      this.$router.push({ name: "Login" })
    }

  }
}
</script>