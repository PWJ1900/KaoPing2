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
          <el-menu-item v-for="(item,index) in this.useMingzhu"
                        :index="item"
                        :key="index">
            <i :class="useIcon"
               @click="change"></i>
            <span slot="title">{{index}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 民主推荐 -->
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
    console.log("您点击了民主推荐")
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: false,
      useIcon: "el-icon-d-arrow-left",
      useMingzhu: {
        "推荐序号": "tuijianxuhao",
        "职位职数": "zhiweizhishu",
        "用户密码": "yonghumima2",
        "数据统计": "shujutongji2",
        "谈话推荐": "tanhuatuijian",
        "姓名校改": "xingmingxiaogai",
        "人数设置": "rengshushezhi",
        "推荐结果": "tuijianjieguo",
        "数量上报": "shujushangbao2"


      }

    }
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
  }
}
</script>
<style scoped>
@import '../../../css/headerasidemain1.css';
</style>