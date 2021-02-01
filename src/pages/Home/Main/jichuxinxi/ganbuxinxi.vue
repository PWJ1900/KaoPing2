<template>

  <div>
    <el-container>
      <el-header>
        <!-- 干部信息 -->
        <headerUse />
      </el-header>
      <el-main>
        <el-row>
          <el-dialog title="提示"
                     :modal-append-to-body="false"
                     v-if="dialogVisibleShowFile"
                     :close-on-click-modal="false"
                     append-to-body="false"
                     :visible.sync="dialogVisibleShowFile"
                     width="auto"
                     :before-close="handleCloseShowFile">
            <div style="height: 1200px">
              <embed :src="showFile"
                     type="application/pdf"
                     width="100%"
                     height="100%">
            </div>
            <!-- 这是展示查看文件 -->
          </el-dialog>
          <el-button type="text"
                     @click="dialogVisible = true">新增</el-button>

          <el-dialog :visible.sync="dialogVisible"
                     width="80%"
                     :modal='false'
                     :modal-append-to-body='false'
                     :before-close="handleClose">

            <table cellspacing="0">
              <tbody>
                <tr>
                  <td>姓名：</td>
                  <td>
                    <el-input id="useheight"></el-input>
                  </td>
                  <td>代码：</td>
                  <td>
                    <el-input id="useheight2"></el-input>
                  </td>

                </tr>
                <tr>
                  <td> 单位：</td>
                  <td>
                    <el-select v-model="value1"
                               placeholder="请选择单位"
                               id="el-selectUse">
                      <el-option v-for="item in options"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                  <td>部门：</td>
                  <td>
                    <el-select v-model="value2"
                               placeholder="请选择部门"
                               id="el-selectUse">
                      <el-option v-for="item in options5"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </td>

                </tr>
                <tr>
                  <td>性别：</td>
                  <td>
                    <el-select v-model="value3"
                               placeholder="请选择"
                               id="el-selectUse">
                      <el-option v-for="item in options2"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                  <td>现任职务：</td>
                  <td>
                    <el-input id="useheight3"></el-input>
                  </td>

                </tr>
                <tr>
                  <td>出生年月：</td>
                  <td>
                    <div class="block">
                      <span class="demonstration"></span>
                      <el-date-picker v-model="csny"
                                      type="month"
                                      placeholder="选择年月">
                      </el-date-picker>
                    </div>
                  </td>
                  <td>原任职务：</td>
                  <td>
                    <el-input id="useheight4"></el-input>
                  </td>

                </tr>
                <tr>
                  <td>任职时间：</td>
                  <td>
                    <div class="block">
                      <span class="demonstration"></span>
                      <el-date-picker v-model="rzsj"
                                      type="date"
                                      placeholder="选择日期">
                      </el-date-picker>
                    </div>
                  </td>
                  <td>职级：</td>
                  <td>
                    <!-- 这里的value后续要改为绑定传入数据库的键值对 -->
                    <el-select v-model="value5"
                               placeholder="请选择"
                               id="el-selectUse">
                      <el-option v-for="item1 in options3"
                                 :key="item1.value"
                                 :label="item1.label"
                                 :value="item1.value">
                      </el-option>
                    </el-select>
                  </td>

                </tr>
                <tr>
                  <td>职级时间：</td>
                  <td>
                    <div class="block">
                      <span class="demonstration"></span>
                      <el-date-picker v-model="zjsj"
                                      type="date"
                                      placeholder="选择日期">
                      </el-date-picker>
                    </div>
                  </td>
                  <td>12</td>
                  <td>12</td>

                </tr>
                <tr>
                  <td>身份：</td>
                  <td>
                    <el-select v-model="value4"
                               placeholder="请选择身份"
                               id="el-selectUse">
                      <el-option v-for="item in options4"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </td>
                  <td rowspan="2">照片：</td>
                  <td rowspan="2">
                    <el-upload action="#"
                               :multiple="false"
                               :limit="1"
                               :on-exceed="handleExceed"
                               accept="image/jpg, image/png,image/jpeg"
                               ref="uploadImage"
                               list-type="picture-card"
                               :http-request="httpRequest"
                               :auto-upload="false">
                      <i slot="default"
                         class="el-icon-plus"></i>
                      <div slot="file"
                           slot-scope="{file}">
                        <img class="el-upload-list__item-thumbnail"
                             :src="file.url"
                             alt="">
                        <span class="el-upload-list__item-actions">
                          <span class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)">
                            <i class="el-icon-zoom-in"></i>
                          </span>
                          <span v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)">
                            <i class="el-icon-download"></i>
                          </span>
                          <span v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)">
                            <i class="el-icon-delete"></i>
                          </span>
                        </span>
                      </div>
                    </el-upload>
                    <!-- 显示照片的dialog -->
                    <el-dialog :visible.sync="dialogVisible2"
                               append-to-body>
                      <img width="100%"
                           :src="dialogImageUrl"
                           alt="">
                    </el-dialog>
                  </td>

                </tr>
                <tr>
                  <td>备注：<br>（自设条件）</td>
                  <td>
                    <el-input type="textarea"
                              :rows="4"></el-input>
                  </td>
                <tr>
                  <td>简介名称：</td>
                  <td colspan="3">
                    <el-input id="useheight5"></el-input>
                  </td>

                </tr>
                <tr>
                  <td>个人附件：<br>(PDF、DOC、DOCX）：</td>
                  <td colspan="3">
                    <el-upload ref="uploadFJ"
                               action=""
                               :auto-upload="false"
                               :limit="1"
                               :on-exceed="exceedUseFJ"
                               :multiple="false"
                               :on-preview="handlePreviewFile"
                               accept=".pdf,.doc,.docx"
                               :http-request="httpRequestFJ">
                      <el-button slot="trigger"
                                 size="mini"
                                 type="success">选取文件</el-button>
                      <el-button size="mini"
                                 style="margin-left:30vw">打开附件</el-button>
                    </el-upload>

                  </td>

                </tr>
                <tr>
                  <td>简介内容：</td>
                  <td colspan="3">
                    <fwbUse />
                  </td>

                </tr>
                <tr>
                  <td colspan="4"
                      style="text-align:center">
                    <el-button type="success"
                               @click="uploadUse">修改</el-button>
                    <el-button type="success">返回</el-button>
                  </td>

                </tr>
              </tbody>
            </table>
            <!-- 
            <span slot="footer"
                  class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary"
                         @click="dialogVisible = false">确 定</el-button>
            </span> -->
          </el-dialog>

        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>

import { base64Use } from "@/utils/base64use.js"
export default {

  data () {
    return {
      rzsj: '',
      csny: '',
      zjsj: '',
      dialogImageUrl: '',
      dialogVisible2: false,
      disabled: false,
      dialogVisible: false,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      form: {
        label: "1",
        key: "1"

      },
      options: [{
        value: '选项1',
        label: '请选择单位'
      }, {
        value: '选项2',
        label: '测试单位'
      }],
      options2: [{
        value: '选项1',
        label: '男'
      },
      {
        value: '选项2',
        label: '女'
      }],
      options3: [{
        value: '选项1',
        label: '正处'
      }],
      options4: [
        {
          value: '选项1',
          label: '企业负责人(1)'
        },
        {
          value: '选项2',
          label: '企业班子成员(2)'
        },
        {
          value: '选项3',
          label: '集团本部中层正职或部门负责人(3)'
        },
        {
          value: '选项4',
          label: '集团本部中层其他(4)'
        },
        {
          value: '选项5',
          label: '集团本部中层以下(5)'
        },
        {
          value: '选项6',
          label: '财务经理(6)'
        },
        {
          value: '选项7',
          label: '集团本部中层(7)'
        },
        {
          value: '选项8',
          label: '企业领导班子1(8)'
        },
        {
          value: '选项9',
          label: 'AAA(9)'
        }
      ],
      options5: [{
        value: '选项1',
        label: '测试部门001'
      },
      {
        value: '选项2',
        label: '测试部门002'
      },
      {
        value: '选项3',
        label: '测试部门003'
      },
      {
        value: '选项4',
        label: '测试部门004'
      },
      {
        value: '选项5',
        label: '测试部门005'
      },
      {
        value: '选项6',
        label: '测试部门006'
      },

      {
        value: '选项7',
        label: '测试部门007'
      },
      {
        value: '选项8',
        label: '测试部门008'
      },
      {
        value: '选项9',
        label: '测试部门009'
      },

      {
        value: '选项10',
        label: '测试部门010'
      },
      {
        value: '选项11',
        label: '测试部门011'
      },
      {
        value: '选项12',
        label: '测试部门012'
      },
      {
        value: '选项13',
        label: '测试部门013'
      },
      {
        value: '选项14',
        label: '测试部门014'
      },
      {
        value: '选项15',
        label: '测试部门015'
      },
      {
        value: '选项16',
        label: '测试部门016'
      },
      {
        value: '选项17',
        label: '测试部门017'
      },
      {
        value: '选项18',
        label: '测试部门018'
      },
      {
        value: '选项19',
        label: '测试部门019'
      },
      {
        value: '选项20',
        label: '测试部门020'
      },
      {
        value: '选项21',
        label: '测试部门021'
      },
      {
        value: '选项22',
        label: '测试部门022'
      },
      {
        value: '选项23',
        label: '测试部门023'
      },
      {
        value: '选项24',
        label: '测试部门024'
      },
      {
        value: '选项25',
        label: '测试部门025'
      },
      {
        value: '选项26',
        label: '测试部门026'
      },
      {
        value: '选项27',
        label: '测试部门027'
      },
      {
        value: '选项28',
        label: '测试部门028'
      },
      {
        value: '选项29',
        label: '测试部门029'
      },


      ],
      dialogVisibleShowFile: false,
      showFile: ''

    }
  },
  methods: {
    handleCloseShowFile () {
      this.dialogVisibleShowFile = false
    },
    handlePreviewFile (file) {
      console.log(file.raw)
      base64Use(file.raw).then((data) => {

        this.showFile = data.result
      });

      this.dialogVisibleShowFile = true


    },
    httpRequest (param) {//思考如何把这两个请求写在一个请求里面
      let formdata = new FormData()
      formdata.append("image", param.file)
      this.$axios.post("usetranto/useit", formdata).then((response) => {

      }).catch((error) => {
        console.log(error)
      })

    },
    //上传文件方法开始
    exceedUseFJ () {
      alert("个人简历只能有1个附件！")

    },
    httpRequestFJ (param) {
      let formdata = new FormData()
      formdata.append("fj", param.file)
      this.$axios.post("usetranto/useit", formdata).then((response) => {
      }).catch((error) => {//这里是提交附件的request
        console.log(error)
      })

    },


    uploadUse () {//点击修改按钮全部提交
      this.$refs.uploadImage.submit();
      this.$refs.uploadFJ.submit();
    },
    //上传图片方法开始
    handleExceed () {
      alert("只能上传一张图片请删除后重试！")
    },
    handleRemove (file) {
      console.log(file);
      this.$refs.uploadImage.clearFiles();
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible2 = true;
    },
    handleDownload (file) {
      console.log(file);
    },
    // 上传图片方法结尾
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }

}
</script>
<style scoped>
table,
table td {
  border: 0.5px solid rgba(124, 141, 141, 0.925);
}
table td {
  padding: 10px 30px;
}
table tbody {
  position: relative;
  display: block;
  height: 78vh;
  overflow-y: scroll;
}
#useheight {
  width: 120vw !important;
  height: 30px;
}
#useheight2 {
  width: 200px;
  height: 30px;
}
#useheight3 {
  width: 200px;
  height: 30px;
}
#useheight4 {
  width: 200px;
  height: 30px;
}
#useheight5 {
  width: 200px;
  height: 30px;
}

#el-selectUse {
  width: 180px;
  height: 35px;
}
</style>
<style scoped>
@import '../../../../css/headermain2.css';
</style>

<style>
.el-main {
  padding: 0;
}
</style>