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
          <el-menu-item v-for="(item,index) in this.useCeping"
                        :index="item"
                        :key="index">
            <i :class="useIcon"
               @click="change"></i>
            <span slot="title">{{index}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- main -->
      <el-main>
        <!-- 民主评测 -->
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
    console.log("您点击了民主评测")
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: false,
      useIcon: "el-icon-d-arrow-left",
      useCeping: {
        "测评序号": "cepingxuhao",
        "指标体系": "zhibiaotixi",
        "A~D分值": "ADfengzhi",
        "测评等级": "cepingdengji",
        "用户密码": "yonghumima",
        "数据统计": "shujutongji",
        "数据计算": "shujujisuan",
        "测评结果": "cepingjieguo",
        "等级统计": "dengjitongji",
        "总体评价": "zongtipingjia",
        "数据上报": "shujushangbao",
        "数据导出": "shujudaochu",
      }

    }
  },
  methods: {
    handleOpen (key, keyPath) {
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

    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
@import '../../../css/headerasidemain1.css';
</style>