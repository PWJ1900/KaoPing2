<template>
  <div class="home">
    <div id="demo1"></div>
    <!-- <button type="button"
            class="btn"
            @click="getEditorData">获取当前内容</button> -->
    <!-- <h3>内容预览</h3> -->
    <!-- <textarea name=""
              id=""
              cols="170"
              rows="20"
              readonly
              v-model="editorData"></textarea> -->
  </div>
</template>
<script>
// 引入 wangEditor
import wangEditor from 'wangeditor'
export default {
  props: {
    useHtml: String
  },
  data () {
    return {
      editor: null,
      editorData: ''
    }
  },
  mounted () {
    const editor = new wangEditor(`#demo1`)
    console.log(editor)
    editor.config.uploadImgServer = 'http://localhost:8080' + "/upload"//这个地方呢写后端获取图片的请求一定要在create之前设置
    editor.config.uploadVideoServer = "/hkk"//这个地方写后端的获取video
    editor.config.uploadImgShowBase64 = false
    editor.config.uploadFileName = 'myFileName'
    editor.config.uploadImgHooks = {
      customInsert: function (insertImg, result, editor) {
        var url = result.data;//获取后台返回的url
        insertImg(url);
      }
    };
    console.log(editor)//此处可改属性
    // editor.customConfig.uploadImgServer = 'upload.php'
    // editor.customConfig.uploadImgServer = 'upload.php'
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml
    }
    // 创建编辑器
    editor.config.height = 420
    editor.config.zIndex = 10
    editor.create()
    this.editor = editor

    this.editor.txt.html(this.useHtml)//此处为初始化文本内容
  },
  watch: {//监视其变化
    useHtml (newVal, oldVal) {
      this.editor.txt.html(newVal)
    }
  },
  methods: {
    getEditorData () {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html()
      alert(data)
    }
  },
  beforeDestroy () {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  }
}
</script>

<style lang="css">
/* .home {
//   width: 500px;
//   margin: auto;
//   position: relative;
//   .btn {
//     position: absolute;
//     right: 0;
//     top: 0;
//     padding: 5px 10px;
     cursor: pointer;
//   }
//   h3 {
//     margin: 30px 0 15px;
//   }
// } */

.home {
  width: 500px;
  margin: auto;
  position: relative;
}
.home .btn {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 10px;
  cursor: pointer;
}
.home h3 {
  margin: 30px 0 15px;
}
</style>