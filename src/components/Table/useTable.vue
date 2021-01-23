<template>
  <el-row>
    请输入查询条件：<el-input style="width:15%"></el-input>
    <el-button>查询</el-button>
    <el-button>全部</el-button>
    <el-table :data="tableData"
              border
              stripe
              height="713">
      <el-table-column type="selection">
        <!-- <template slot-scope="scope">
          <el-checkbox @click="checkUse(scope.row)"></el-checkbox>
        </template> -->
      </el-table-column>
      <el-table-column v-for="info in headerUse"
                       :key="info.key"
                       :property="info.key"
                       :label="info.label">
        <template slot-scope="scope">
          {{ scope.row[scope.column.property] }}
        </template>
      </el-table-column>
      <el-table-column label="拉选框">
        <template slot-scope="scope">
          <el-button @click="editUse(scope.row)">编辑</el-button>
          <el-button @click="deleteUse(scope.row)">删除</el-button>
          <!-- <el-switch v-model="scope.row.ifUse"
                     :active-color="ACT_COLOR"
                     :inactive-color="INACT_COLOR">
          </el-switch> -->
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
export default {
  props: {
    headerUse: Array,//此处为传入label的参数
    tableData: Array//此处为传入的表单数据
  },
  methods: {
    editUse (value) {
      alert(value.a)

    },
    deleteUse (value) {

    }
  }

}
</script>