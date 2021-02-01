<template>
  <el-row>
    <div>
      <el-button type="success"
                 @click="Use">+1</el-button>
      <h3>{{count}}</h3>
    </div>

    <el-table :data="tableDatatest"
              style="width: 100%">
      <el-table-column prop="a"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="b"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="c"
                       label="地址">
      </el-table-column>
      <el-table-column prop="d"
                       label="标识">
      </el-table-column>
    </el-table>
    <el-button @click="getKey"></el-button>
  </el-row>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { tablePostGet } from '@/api/tablePostGet'
export default {
  created () {
    tablePostGet(this, "test")

  },
  computed: {
    ...mapState(['count'])

  },
  data () {
    return {
      msg: '',
      tableData: [],
      tableDatatest: [{
        a: "dfas",
        b: "fad",
        c: "dada",
        d: "tbe"

      }, {
        a: "dfas",
        b: "fad",
        c: "dada",
        d: "tbe"


      }, {
        a: "dfas",
        b: "fad",
        c: "dada",
        d: "tbe"

      }, {
        a: "dfas",
        b: "fad",
        c: "dada",
        d: "tbe"

      }, {
        a: "dfas",
        b: "fad",
        c: "dada",
        d: "tbe"


      }]
    }
  },
  methods: {
    ...mapMutations(['add']),//拓展试相当于把add方法拿出来给后续使用
    Use () {
      this.add('3')

    },
    getKey () {
      let a = this.tableDatatest
      // a.forEach((element, index) => {
      //   console.log(element.key)
      //   console.log(index)

      // });
      for (let key in a[0]) {
        console.log(key)
      }

    }
  }

}
</script>