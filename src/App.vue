<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-size: 100%;
}

.el-dialog__wrapper {
  margin-left: 11vw;
  margin-top: 11vh;
}
/* 所有的dialog */

.el-dialog .el-dialog__body {
  background-color: rgb(178, 240, 219);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0;
}
.dialog-footer {
  background-color: rgb(178, 240, 219);
}
.el-main {
  background-color: rgb(246, 252, 252);
}
/* .el-dialog {
  position: relative;
  left: 0vw;
  bottom: 4vh;
  margin-bottom: 3vh;
  padding: 0;
  width: 60vw !important;
  height: 85vh;

  /* height: 80vh !important; */
/* }  */
/* .el-dialog__body {
  margin-top: 0;
  padding-left: 2vw;
  margin: 0;
  left: 20vw;
} */
/* .el-dialog__header {
  padding: 0;
} */
/* .el-dialog .el-dialog__body {
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* .el-dialog__footer {
  padding: 0;
} */
</style>
