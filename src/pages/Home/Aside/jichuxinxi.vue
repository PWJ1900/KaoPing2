<template>
  <div>
    <el-container>
      <el-aside style="width:auto">
        <!-- Aside background-color="#545c64"-->
        <el-menu text-color="#fff"
                 background-color="#303133"
                 active-text-color="#ffd04b"
                 default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse"
                 router>
          <el-menu-item v-for="(item,index) in this.use"
                        :key="index"
                        :index="item">
            <!-- 这里的:index定义的是跳转的路由 -->
            <i :class="useIcon"
               @click="change"></i>
            <span slot="title">{{index}}</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <!-- <span>基础信息</span> -->

      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  mounted () {
    console.log(this.use)
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: false,
      title: "title",
      useIcon: "el-icon-d-arrow-left",
      use: {
        "单位信息": "danweixinxi",
        "部门信息": "bumengxinxi",
        "身份类型": "shengfengleixing",
        "职级信息": "zhijixinxi",
        "干部信息": "ganbuxinxi",
        "班子信息": "banzixinxi",
        "一级指标": "yijizhibiao",
        "二级指标": "erjizhibiao",
        "参评群体": "canpingqunti",
        "对象分组": "duixiangfengzu",
        "考评定义": "kaopingdingyi"
      }

    }
  },
  methods: {
    handleOpen (key, keyPath) {

    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    change () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse == false) {
        this.useIcon = "el-icon-d-arrow-right"
      }
      else {
        this.useIcon = "el-icon-d-arrow-left"
      }

    }

  }
}
</script>
<style scoped>
@import '../../../css/headerasidemain1.css';
</style>