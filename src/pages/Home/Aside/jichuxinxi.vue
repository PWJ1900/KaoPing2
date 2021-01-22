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

            <el-menu-item v-for="(item,index) in this.use"
                          :key="index"
                          :index="item">
              <i class="el-icon-circle-plus"
                 @click="change"></i>
              <span slot="title">{{index}}</span>
            </el-menu-item>
            <el-menu-item>
            </el-menu-item>
            <el-menu-item>
            </el-menu-item>
            <el-menu-item>
            </el-menu-item>
            <el-menu-item>
            </el-menu-item>

          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <span>main</span>

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
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    change () {
      this.isCollapse = !this.isCollapse

    }

  }
}
</script>