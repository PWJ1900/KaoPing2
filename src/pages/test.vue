<template>
  <el-row>
    <div>
      <el-button type="success"
                 @click="Use">+1</el-button>
      <h3>{{count}}</h3>
    </div>

    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="1"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="2"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="3"
                       label="地址">
      </el-table-column>
      <el-table-column prop="4"
                       label="标识">
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { talePostGet } from '@/api/tablePostGet'
export default {
  created () {
    talePostGet(this, "test")

  },
  computed: {
    ...mapState(['count'])

  },
  data () {
    return {
      msg: '',
      tableData: []
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