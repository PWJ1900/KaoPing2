<template>
  <div>
    <el-container>
      <el-aside>
        <!-- Aside -->
        <el-menu background-color="#303133"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse"
                 router>
          <el-menu-item v-for="(item,index) in this.useXiTong"
                        :index="item"
                        :key="index">
            <i :class="useIcon"
               @click="change"></i>
            <span slot="title">{{index}}</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <!-- 系统管理 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  beforeMounted () {
    console.log("您点击了系统管理")
  },
  data () {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false,
      useIcon: "el-icon-d-arrow-left",
      useXiTong: {
        "用户管理": "yonghuguanli",
        "密钥管理": "miyaoguangli",
        "备份与恢复": "beifengyuhuifu",
        "数据删除": "shujushanchu",
        "系统初始化": "xitongchushihua",
        "密码修改": "mimaxiugai",
        "编码规则说明": "bianmaguizeshuoming",
        "版权与业务联系": "bangquanyuyewulianxi",


      }
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    change () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse == false) {
        this.useIcon = "el-icon-d-arrow-left"
      }
      else {
        this.useIcon = "el-icon-d-arrow-right"
      }

    }
  },
};
</script>
<style scoped>
@import '../../../css/headerasidemain1.css';
</style>