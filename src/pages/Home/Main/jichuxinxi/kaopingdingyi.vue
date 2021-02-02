<template>

  <div>
    <el-container>
      <el-header>
        <!-- 考评定义 -->
        <headerUse />
      </el-header>
      <el-main>
        <!-- 这是main -->
        <el-tabs type="border-card"
                 @tab-click="clickUse">
          <table>
            <tr>
              <td>
                登录信息：</td>
              <td>
                <el-input type="text"
                          v-model="useInput"
                          style="width:20vw"></el-input>
              </td>
            </tr>
            <tr>
              <td>提示信息:</td>
              <td>
                <fwbUse style="width:40vw"
                        :useHtml='useText'
                        v-if="true" />
              </td>
            </tr>
          </table>

          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 测评</span>
          </el-tab-pane>
          <el-tab-pane label="推荐">
          </el-tab-pane>
          <el-tab-pane label="后台管理">
          </el-tab-pane>

        </el-tabs>
        <div style="text-align:center">

          <el-button>保存</el-button>
        </div>

      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  created () {
    this.useInput = this.useCpInput
    this.useText = this.useCpFirst

  },
  data () {
    return {
      useText: '',
      useInput: '',
      useCpInput: '扬子江投资发展集团领导班子及领导干部年终考核',
      useTjInput: '模拟高校领导班子换届民主推荐',
      useHtglInput: '欢迎使用后台管理系统，请在插好密钥盘后输入用户名和密码登录系统',
      htglUse: false,
      useCpFirst: `<div class="Section1">
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span style="font-size: 15pt">欢迎您参加我们的网上测评工作，请您仔细阅读以下说明：<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">1</span><span style="font-size: 15pt">、本次网上测评的有效时间到当日24:00；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">2</span><span style="font-size: 15pt">、用户密码随机产生、随机抽取，请在有效时间内使用，过期作废；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">3</span><span style="font-size: 15pt">、共有10个测评指标，被测评的对象显示在窗口左侧；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">4</span><span style="font-size: 15pt">、依次选中左侧窗口的被测对象后，再对右侧窗口对应测评表中的各项指标进行选择；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">5</span><span style="font-size: 15pt">、切换被测对象或</span><span style="font-size: 15pt">保存时系统会提示漏选指标，请再次确认；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">6</span><span style="font-size: 15pt">、完成对所有被测对象的测评后，点击&ldquo;结束测评&rdquo;菜单来结束您的测评工作，同时用户密码作废；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">8</span><span style="font-size: 15pt">、如需中途暂时离开可点击&ldquo;暂时退出&rdquo;菜单，并可在有效时间内再次登录系统继续完成测评工作。</span></p>
	<p class="MsoNormal">
		<span style="font-size: 15pt">－－　现在，请开始您的测评工作。</span><a href="datacp/main.aspx"><img alt="" height="24" onclick="alert('请点击左边的被测对象')" src="Upload/image/zqbtncp.gif" width="81" /></a></p>
</div>
<p>
	&nbsp;</p>
`,
      useTjFirst: `<div class="Section1">
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span style="font-size: 15pt">欢迎您参加我们的网上推荐工作，请您仔细阅读以下说明：<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">1</span><span style="font-size: 15pt">、本次网上推荐的有效时间到今天<span lang="EN-US">12</span>：<span lang="EN-US">00</span>，采取机房集中推荐方式；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">2</span><span style="font-size: 15pt">、用户密码随机产生、随机抽取，请在有效时间内使用，过期作废；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">3</span><span style="font-size: 15pt">、完成对所有被测对象的测评后，点击&ldquo;结束推荐&rdquo;菜单来结束您的推荐工作，同时作废用户密码；<span lang="EN-US"><o:p></o:p></span></span></p>
	<p style="margin: 0cm 0cm 0pt 22.5pt; text-indent: -22.5pt; mso-char-indent-count: -1.5">
		<span lang="EN-US" style="font-size: 15pt">4</span><span style="font-size: 15pt">、如需中途暂时离开可点击&ldquo;暂时退出&rdquo;菜单，并可在有效时间内再次登录系统继续完成测评工作。<span lang="EN-US"><o:p></o:p></span></span></p>
	<p class="MsoNormal">
		<span style="font-size: 15pt">－－　现在，请开始您的推荐工作。</span><a href="datatj/gbtjlb.aspx"><img alt="" height="24" onclick="alert('请点击“干部推荐”按钮，开始您的推荐工作')" src="Upload/image/zqbtntj.gif" width="81" /></a></p>
</div>
<p>
	&nbsp;</p>
`,
      useHtglFirst: `<p>
	欢迎使用后台管理系统，请在插好密钥盘后输入用户名和密码登录系统</p>
`

    }
  }
  ,
  methods: {
    clickUse (data) {
      console.log(data.index)
      if (data.index == "0") {
        this.useText = this.useCpFirst
        this.useInput = this.useCpInput
      }
      else if (data.index == "1") {
        this.useText = this.useTjFirst
        this.useInput = this.useTjInput

      }
      else if (data.index == "2") {
        this.useText = this.useHtglFirst
        this.useInput = this.useHtglInput
      }

    }
  }

}
</script>
<style scoped>
@import '../../../../css/headermain2.css';
</style>
<style>
.el-main {
  padding: 0;
}
</style>