<template>
  <div>
    <el-tabs v-model="editableTabsValue"
             style="margin-left:-2vw;height:3vh !important"
             type="card"
             closable
             @tab-click="tabClick"
             @tab-remove="removeTab">
      <el-tab-pane v-for="(item, index) in routerUse"
                   :key="index"
                   :label="item"
                   :name="item">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      editableTabsValue: '',
      tabIndex: 2,
      getRouter: ''

    }
  },
  computed: {
    ...mapState(['routerUse'])

  },
  activated () {
    let deUse = true
    this.getRouter = this.$route.name//得到当前的路由名字
    this.routerUse.forEach(element => {
      if (element === this.getRouter) {
        deUse = false//此处判断防止跳转页面重新重复页加载

      }

    });
    if (deUse === true) {//若不是重复路由就添加tag，只有不是重复的情况下才考虑是不是要加入到路由路径中
      if (this.routerUse.length <= 9) {//若在9个以内则可以加入，否则不用
        this.routerUse.push(this.getRouter)
      }//把它放入tag标签内
      else {
        this.$alert('对不起当前页数已经超过最大可容页数10页，当前点击页可以显示但无法在导航栏显示', '⚠️', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `已经读取`
            });
          }
        });
      }

    }

    this.editableTabsValue = this.getRouter//获取其长度当进入是自动点击进去
  },
  updated () {



  },
  methods: {
    removeTab (targetName) {
      console.log(targetName)
      this.routerUse.forEach((element, index) => {
        if (targetName === element) {
          this.routerUse.splice(index, 1)
        }
      });
      // this.$router.go(1)

    },
    tabClick (targetName) {
      console.log(targetName.name)
      this.$router.push({ name: targetName.name })

    }
  }
}
</script>
<style >
.el-tabs__nav .is-top {
  transform: 0 !important;
  background: rgb(200, 211, 208);
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 1px solid #c3c7d0;
}
.el-tags_item {
  width: 11vw;
  text-align: center;
}
</style>