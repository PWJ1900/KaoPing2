<template>
  <el-row>
    <div>
      <el-button type="success"
                 @click="Use">+1</el-button>
      <h3>{{count}}</h3>
    </div>
  </el-row>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])

  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapMutations(['add']),//拓展试相当于把add方法拿出来给后续使用
    Use () {
      this.add('3')

    }
  }

}
</script>