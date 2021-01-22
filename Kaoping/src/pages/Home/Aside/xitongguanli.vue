<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <!-- Aside -->
        <el-scrollbar style="width:100%">
          <el-menu background-color="#545c64"
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
              <i class="el-icon-circle-plus"
                 @click="change"></i>
              <span slot="title">{{index}}</span>
            </el-menu-item>

            <!-- 此处暂时如此布局以观测，后面还得拉升满 -->
            <el-menu-item> </el-menu-item>
            <el-menu-item> </el-menu-item>
            <el-menu-item> </el-menu-item>
            <el-menu-item> </el-menu-item>
            <el-menu-item> </el-menu-item>
            <el-menu-item> </el-menu-item>
            <el-menu-item> </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>Main
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data () {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false,
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
    }
  },
};
</script>